// The first four lessons in each level retain their original indices and scores.
// Each further block of four follows the same skill order.
function questionSkill(course, id) {
  const [level, lesson, q] = id.split("-");
  return lesson === "d"
    ? course[level].diagnostic[q].skill
    : Number(lesson) % 4;
}
function questionMinutes(course, id, kind) {
  const level = Number(id.split("-")[0]);
  const skill = questionSkill(course, id);
  if (kind === "review") return skill >= 2 ? 2 : 1;
  return skill >= 2 ? (level >= 3 ? 4 : 3) : 2;
}

function lessonComplete(course, state, level, index) {
  const lesson = course[level].lessons[index];
  if (state.best[level + "-" + index] >= lesson.questions.length) return true;
  return lesson.questions.every(
    (_, k) => state.learned[level + "-" + index + "-" + k],
  );
}

function dailyPlan(course, state, date) {
  const level = state.level;
  const log = state.activity[date] || [];
  const spent = log.reduce((n, item) => n + item.minutes, 0);
  const seen = new Set(log.map((item) => item.id));
  const tasks = [];
  let remaining = Math.max(0, state.minutes - spent);
  function add(id, kind) {
    const minutes = questionMinutes(course, id, kind);
    if (minutes > remaining || seen.has(id)) return false;
    tasks.push({ id, kind, minutes });
    seen.add(id);
    remaining -= minutes;
    return true;
  }
  const relevant = Object.entries(state.review).filter(([id]) => {
    const [i, j, k] = id.split("-");
    const unit = course[i];
    return (
      Number(i) <= level &&
      unit &&
      (j === "d" ? unit.diagnostic[k] : unit.lessons[j]?.questions[k])
    );
  });
  const due = relevant
    .filter(([id, item]) => item.due <= date && !seen.has(id))
    .sort(
      ([a, x], [b, y]) =>
        x.due.localeCompare(y.due) ||
        (y.misses || 1) - (x.misses || 1) ||
        a.localeCompare(b),
    );
  const weights = [1, 1, 1, 1];
  for (const [id, item] of relevant) {
    const skill = questionSkill(course, id);
    if (Number.isInteger(skill))
      weights[skill] = Math.min(
        3,
        weights[skill] + Math.min(2, item.misses || 1),
      );
  }
  // Reserve room for new material when reviews accumulate. Unused room is
  // available to the other activity, including on very short study days.
  let reviewAllowance =
    Math.ceil(state.minutes * 0.4) -
    log.filter((x) => x.kind === "review").reduce((n, x) => n + x.minutes, 0);
  for (const [id] of due) {
    const cost = questionMinutes(course, id, "review");
    if (cost <= reviewAllowance && add(id, "review")) reviewAllowance -= cost;
  }
  const fresh = [[], [], [], []],
    familiar = [];
  const coverage = [0, 0, 0, 0];
  course[level].lessons.forEach((lesson, j) => {
    const complete = lessonComplete(course, state, level, j);
    lesson.questions.forEach((_, k) => {
      const id = [level, j, k].join("-");
      if (complete || state.learned[id]) coverage[j % 4]++;
      if (seen.has(id) || state.review[id]) return;
      if (complete || state.learned[id]) familiar.push(id);
      else fresh[j % 4].push(id);
    });
  });
  const counts = [0, 0, 0, 0];
  const focus = state.mockFocus || [0, 0, 0, 0];
  const byNeed = [0, 1, 2, 3]
    .filter((s) => focus[s] > 0)
    .sort((a, b) => focus[b] - focus[a]);
  for (const skill of byNeed) {
    weights[skill] += Math.min(4, focus[skill]);
    if (fresh[skill].length) {
      if (add(fresh[skill][0], "new")) {
        fresh[skill].shift();
        counts[skill]++;
      }
    } else {
      const id = familiar.find(
        (id) => questionSkill(course, id) === skill && !seen.has(id),
      );
      if (id) add(id, "recall");
    }
  }
  for (const item of log) {
    const [i, j] = item.id.split("-");
    if (Number(i) === level && item.kind === "new" && j !== "d")
      counts[Number(j) % 4]++;
  }
  while (remaining > 0) {
    const candidates = [0, 1, 2, 3].filter(
      (skill) =>
        fresh[skill].length &&
        questionMinutes(course, fresh[skill][0], "new") <= remaining,
    );
    if (!candidates.length) break;
    candidates.sort(
      (a, b) =>
        (counts[a] + 1) / weights[a] - (counts[b] + 1) / weights[b] ||
        coverage[a] - coverage[b] ||
        a - b,
    );
    const skill = candidates[0];
    add(fresh[skill].shift(), "new");
    counts[skill]++;
  }
  for (const [id] of due) add(id, "review");
  // Cycle through familiar material after this level's new work runs out.
  familiar.sort(
    (a, b) =>
      (state.learned[a] || "").localeCompare(state.learned[b] || "") ||
      a.localeCompare(b),
  );
  for (const id of familiar) add(id, "recall");
  return {
    level,
    spent,
    tasks,
    log,
    weights,
    deferred: due.filter(([id]) => !seen.has(id)).length,
  };
}
