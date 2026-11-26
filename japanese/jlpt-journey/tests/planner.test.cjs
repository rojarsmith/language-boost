const assert = require("node:assert/strict");
const { existsSync, readFileSync } = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const root = path.resolve(__dirname, "../dist");
const files = [
  "curriculum.js",
  ...[5, 4, 3, 2, 1].map((n) => "extra-n" + n + ".js"),
  "planner.js",
  "mock-model.js",
  ...[5, 4, 3, 2, 1].map((n) => "mock-n" + n + ".js"),
];
const context = vm.createContext({});
for (const file of files)
  vm.runInContext(readFileSync(path.join(root, file), "utf8"), context, {
    filename: file,
  });
const { course, plan, completed, mocks, begin, finish, apply } =
  vm.runInContext(
    "({course:curriculum, plan:dailyPlan, completed:lessonComplete, mocks:mockBank, begin:startMock, finish:finishMock, apply:applyMockResult})",
    context,
  );
const today = "2026-11-25";
const fresh = () => ({
  level: 0,
  minutes: 25,
  best: {},
  learned: {},
  activity: {},
  review: {},
});
test("all five levels have original IDs, four skill strands, valid questions and matching audio", () => {
  assert.equal(course.length, 5);
  const prompts = new Set();
  course.forEach((level, i) => {
    assert.equal(level.lessons.length, 12);
    level.lessons.forEach((lesson, j) => {
      assert.ok(
        lesson.title && lesson.tip && lesson.example && lesson.translation,
      );
      assert.equal(lesson.questions.length, j < 4 ? 3 : 4);
      lesson.questions.forEach((q, k) => {
        assert.ok(q.why && q.prompt && !prompts.has(q.prompt), q.prompt);
        prompts.add(q.prompt);
        assert.equal(new Set(q.options).size, 4);
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
        if (j % 4 === 3) {
          assert.ok(q.audio);
          assert.ok(
            existsSync(path.join(root, "audio", [i, j, k].join("-") + ".mp3")),
          );
        }
      });
    });
  });
  assert.equal(prompts.size, 220);
});
test("remaining budget, studied IDs and level boundaries are respected at all input budgets", () => {
  for (let i = 0; i < 5; i++) {
    for (let minutes = 5; minutes <= 180; minutes++) {
      const s = fresh();
      s.level = i;
      s.minutes = minutes;
      s.activity[today] = [{ id: i + "-0-0", kind: "new", minutes: 2 }];
      const p = plan(course, s, today);
      assert.ok(
        p.spent + p.tasks.reduce((n, t) => n + t.minutes, 0) <= minutes,
      );
      assert.equal(new Set(p.tasks.map((t) => t.id)).size, p.tasks.length);
      assert.ok(
        p.tasks.every((t) => t.id.startsWith(i + "-") && t.id !== i + "-0-0"),
      );
    }
  }
});
test("overdue mistakes and weak skills are prioritized without crowding out new material", () => {
  const s = fresh();
  s.minutes = 10;
  for (const j of [1, 5, 9])
    for (let k = 0; k < 3; k++)
      s.review["0-" + j + "-" + k] = { due: today, step: 0, misses: 1 };
  s.review["0-1-2"].due = "2026-11-20";
  s.review["0-1-0"].misses = 4;
  s.review["0-2-0"] = { due: "2026-11-30", step: 1 };
  let p = plan(course, s, today);
  assert.equal(p.tasks[0].id, "0-1-2");
  assert.equal(p.tasks[1].id, "0-1-0");
  assert.equal(p.tasks.find((t) => t.kind === "new").id.split("-")[1] % 4, 1);
  assert.ok(p.tasks.some((t) => t.kind === "new") && p.deferred > 0);
  assert.ok(!p.tasks.some((t) => t.id === "0-2-0"));
  s.activity[today] = [p.tasks[0]];
  p = plan(course, s, today);
  assert.ok(!p.tasks.some((t) => t.id === "0-1-2"));
  assert.equal(plan(course, s, "2026-11-26").tasks[0].id, "0-1-2");
});
test("daily study preserves old credit and waits for an assessment before promotion", () => {
  const s = fresh();
  s.minutes = 5;
  s.best["0-0"] = 3;
  assert.ok(completed(course, s, 0, 0));
  for (let d = 0; d < 350; d++) {
    const date = new Date(Date.UTC(2026, 0, 1 + d)).toISOString().slice(0, 10);
    s.activity[date] = [];
    for (let n = 0; n < 5; n++) {
      const task = plan(course, s, date).tasks[0];
      if (!task) break;
      s.learned[task.id] = date;
      s.activity[date].push(task);
    }
    if (course[0].lessons.every((_, j) => completed(course, s, 0, j))) break;
  }
  assert.equal(s.level, 0);
  assert.ok(course[0].lessons.every((_, j) => completed(course, s, 0, j)));
  assert.ok(
    plan(course, s, "2027-12-25").tasks.every((t) => t.kind === "recall"),
  );
});
test("all 15 held-out papers have 12 unique items and working listening assets", () => {
  const prompts = new Set(
    course
      .flatMap((l) => [
        ...l.diagnostic,
        ...l.lessons.flatMap((u) => u.questions),
      ])
      .map((q) => q.prompt.trim()),
  );
  const scripts = new Set(
    course.flatMap((l) =>
      l.lessons.flatMap((u) => u.questions.map((q) => q.audio).filter(Boolean)),
    ),
  );
  for (const [level, forms] of mocks.entries()) {
    assert.equal(forms.length, 3);
    forms.forEach((qs, form) => {
      assert.equal(qs.length, 12);
      qs.forEach((q, i) => {
        assert.ok(
          q.why && q.options.length === 4 && new Set(q.options).size === 4,
        );
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
        assert.ok(!prompts.has(q.prompt.trim()), q.prompt);
        prompts.add(q.prompt.trim());
        if (i >= 9) {
          assert.ok(q.audio && !scripts.has(q.audio));
          scripts.add(q.audio);
          assert.ok(
            existsSync(
              path.join(root, "audio", `mock-${level}-${form}-${i}.mp3`),
            ),
          );
        } else assert.ok(!q.audio);
      });
    });
  }
});
test("a weak section blocks promotion even at 10/12 and changes the budgeted plan", () => {
  const book = { active: null, history: [] },
    s = fresh();
  begin(book, 0, 1000);
  const q = mocks[0][book.active.form];
  book.active.answers = q.map((x, i) => (i <= 1 ? null : x.answer));
  const result = finish(book, 5000);
  assert.equal(result.total, 10);
  assert.equal(result.ready, false);
  apply(s, result);
  assert.equal(s.level, 0);
  assert.equal(s.mockFocus[0], 4);
  s.best = Object.fromEntries(
    course[0].lessons.map((u, j) => ["0-" + j, u.questions.length]),
  );
  const tasks = plan(course, s, today).tasks;
  assert.equal(Number(tasks[0].id.split("-")[1]) % 4, 0);
  assert.equal(tasks[0].kind, "recall");
  s.mockFocus[0]--;
  assert.equal(apply(s, result), false);
  assert.equal(s.mockFocus[0], 3);
});
test("fresh forms, partial timeout, passing boundary, N1 ceiling and no demotion", () => {
  for (let level = 0; level < 5; level++) {
    const book = { active: null, history: [] },
      s = fresh();
    s.level = level;
    for (let n = 0; n < 3; n++) {
      begin(book, level, 1000);
      const a = book.active;
      assert.equal(a.form, n);
      begin(book, level + 1, 2000);
      assert.equal(book.active, a);
      const q = mocks[level][n];
      a.answers = q.map((x, i) =>
        n === 0
          ? i === 1
            ? x.answer
            : null
          : [0, 3, 6].includes(i)
            ? null
            : x.answer,
      );
      const result = finish(book, n === 0 ? a.deadline + 500 : 2000);
      assert.equal(result.timedOut, n === 0);
      assert.equal(result.total, n === 0 ? 1 : 9);
      assert.equal(result.ready, n !== 0);
      apply(s, result);
      assert.equal(s.level, n === 0 ? level : Math.min(4, level + 1));
      assert.equal(finish(book, 3000), null);
    }
    begin(book, level, 4000);
    assert.equal(book.active, null);
    assert.equal(book.history.length, 3);
  }
});
