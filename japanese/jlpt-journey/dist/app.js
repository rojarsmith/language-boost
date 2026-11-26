"use strict";
const paths = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  route:
    '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 8v6a4 4 0 0 0 8 0V9a2 2 0 0 1 4 0v7"/>',
  book: '<path d="M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2zm9 2v15"/>',
  flag: '<path d="M5 21V3c4-3 9 3 14 0v9c-5 3-10-3-14 0"/>',
  play: '<path d="m8 4 12 8-12 8z"/>',
  cards:
    '<path d="m3 6 3-2m-2 8L2 7m5 1 10-4 5 13-10 4z"/><path d="m11 11 5-2m-3 5 4-1"/>',
  list: '<rect x="5" y="4" width="15" height="17" rx="2"/><path d="M9 3v3m7-3v3M9 11h7m-7 4h5"/>',
  chev: '<path d="m9 5 7 7-7 7"/>',
  close: '<path d="m5 5 14 14M19 5 5 19"/>',
  speaker:
    '<path d="M3 9h4l5-5v16l-5-5H3zm12-1a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
  bookmark: '<path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4z"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  repeat: '<path d="M3 10a9 9 0 1 1 2 9M3 4v6h6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  next: '<path d="M4 6h12l4 4m-4-8 4 4-4 4M20 18H8l-4-4m4 8-4-4 4-4"/>',
};
function icon(key) {
  return (
    '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' +
    paths[key] +
    "</svg>"
  );
}
document
  .querySelectorAll("[data-icon]")
  .forEach((el) => el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon)));
const main = document.querySelector("main"),
  dialog = document.querySelector("dialog");
const levelNames = ["基礎入門", "日常應用", "中階銜接", "進階理解", "高階精讀"];
const skills = ["詞彙", "文法", "閱讀", "聽力"],
  glyphs = ["あ", "文", "読", "聴"];
const words = [
  [
    ["旅", "たび", "旅行", "旅が好きです。", "我喜歡旅行。"],
    ["駅", "えき", "車站", "駅で友達に会います。", "我在車站和朋友見面。"],
    ["朝", "あさ", "早晨", "毎朝、水を飲みます。", "我每天早上喝水。"],
  ],
  [
    [
      "乗り換え",
      "のりかえ",
      "轉乘",
      "次の駅で乗り換えです。",
      "下一站要轉乘。",
    ],
    ["支度", "したく", "準備", "出かける支度をします。", "準備出門。"],
    [
      "間に合う",
      "まにあう",
      "趕得上",
      "電車に間に合いました。",
      "趕上電車了。",
    ],
  ],
  [
    [
      "見直す",
      "みなおす",
      "重新檢視",
      "計画を見直すことにした。",
      "決定重新檢視計畫。",
    ],
    ["余裕", "よゆう", "餘裕", "時間に余裕があります。", "時間還很充裕。"],
    [
      "目印",
      "めじるし",
      "辨認位置的標誌",
      "赤い看板が目印です。",
      "認紅色招牌就找得到。",
    ],
  ],
  [
    [
      "見通し",
      "みとおし",
      "展望、預估",
      "復旧の見通しが立った。",
      "已經可以估計何時能恢復。",
    ],
    [
      "促す",
      "うながす",
      "促使、催促",
      "係員が乗客に移動を促した。",
      "工作人員請乘客移動。",
    ],
    [
      "見送る",
      "みおくる",
      "暫緩、送行",
      "今回は導入を見送った。",
      "這次暫緩採用。",
    ],
  ],
  [
    [
      "趣旨",
      "しゅし",
      "宗旨、用意",
      "提案の趣旨をくみ取る。",
      "理解提案的用意。",
    ],
    [
      "覆す",
      "くつがえす",
      "推翻",
      "新たな証拠が定説を覆した。",
      "新證據推翻了定論。",
    ],
    [
      "兆し",
      "きざし",
      "徵兆",
      "景気に回復の兆しが見える。",
      "景氣出現復甦跡象。",
    ],
  ],
];
const bank = new Map();
curriculum.forEach((level, i) => {
  level.lessons.forEach((lesson, j) =>
    lesson.questions.forEach((q, k) => bank.set(i + "-" + j + "-" + k, q)),
  );
  level.diagnostic.forEach((q, k) => bank.set(i + "-d-" + k, q));
});
const storageKey = "nihongo-journey-v1";
function defaults() {
  return {
    level: 0,
    best: {},
    review: {},
    saved: [],
    answers: 0,
    days: [],
    diagnosis: null,
    minutes: 25,
    learned: {},
    activity: {},
  };
}
let state = defaults(),
  wordIndex = new Date().getDate() % 3,
  session = null,
  viewLevel = 0;
try {
  const previous = JSON.parse(localStorage.getItem(storageKey));
  if (previous) state = { ...state, ...previous };
} catch {}
if (!curriculum[state.level]) state.level = 0;
if (
  !Number.isInteger(state.minutes) ||
  state.minutes < 5 ||
  state.minutes > 180
)
  state.minutes = 25;
viewLevel = state.level;
function toast(msg) {
  const el = document.querySelector("#notice");
  el.textContent = msg;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (el.textContent = ""), 3300);
}
function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    toast("瀏覽器無法儲存，本次紀錄僅保留到關閉頁面。");
  }
}
function day(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0"),
  ].join("-");
}
const done = (i, j) => lessonComplete(curriculum, state, i, j);
const lessonCount = (i) =>
  curriculum[i].lessons.filter((_, j) => done(i, j)).length;
const due = () =>
  Object.keys(state.review).filter(
    (id) => bank.has(id) && state.review[id].due <= day(),
  );
function nextLesson(i) {
  return curriculum[i].lessons.findIndex((_, j) => !done(i, j));
}
function button(action, label, cls = "cta") {
  return (
    '<button type="button" class="' +
    cls +
    '" data-act="' +
    action +
    '">' +
    label +
    "</button>"
  );
}
function stations(i) {
  return (
    '<div class="paper stations" aria-label="選擇學習級別">' +
    levelNames
      .map(
        (n, k) =>
          '<button type="button" class="station" data-act="level-' +
          k +
          '" aria-pressed="' +
          (i === k) +
          '"><span class="station-mark">' +
          curriculum[k].level +
          "</span><strong>" +
          n +
          "</strong></button>",
      )
      .join("") +
    "</div>"
  );
}
function lessonRows(i) {
  return curriculum[i].lessons
    .map(
      (l, j) =>
        '<button class="row" data-act="lesson-' +
        i +
        "-" +
        j +
        '"><span class="tile t' +
        (j % 4) +
        '">' +
        glyphs[j % 4] +
        "</span><span><strong>" +
        l.title +
        "</strong><small>" +
        skills[j % 4] +
        "練習 · " +
        l.questions.length +
        ' 題</small></span><span class="row-action">' +
        (done(i, j)
          ? icon("check") + " 已完成"
          : "<span>練習</span>" + icon("chev")) +
        "</span></button>",
    )
    .join("");
}
function wordKey(i, k) {
  return i + "-" + k;
}
function wordCard(i) {
  const w = words[i][wordIndex],
    saved = state.saved.includes(wordKey(i, wordIndex));
  return (
    '<section class="word-card"><div class="card-head"><h2>' +
    icon("cards") +
    '今日一語</h2><button class="icon-btn" data-act="bookmark" aria-label="' +
    (saved ? "取消收藏" : "收藏單字") +
    '" aria-pressed="' +
    saved +
    '">' +
    icon(saved ? "check" : "bookmark") +
    '</button></div><div class="word-body"><div class="reading" lang="ja">' +
    w[1] +
    '</div><ruby lang="ja">' +
    w[0] +
    "</ruby><p>" +
    w[2] +
    '</p><p class="example" lang="ja">' +
    w[3] +
    '</p><p class="translation">' +
    w[4] +
    '</p></div><div class="word-actions">' +
    button("speakword", icon("speaker") + "聆聽發音", "") +
    button("nextword", icon("repeat") + "換一個字", "") +
    "</div></section>"
  );
}
const planNames = { review: "到期錯題", new: "新課練習", recall: "鞏固練習" };
function planTitle(task) {
  const [i, j] = task.id.split("-");
  return (
    curriculum[i].level +
    " · " +
    (j === "d" ? "程度診斷錯題" : curriculum[i].lessons[j].title)
  );
}
function hero(plan) {
  const i = plan.level;
  const title =
    i === 4
      ? "讀懂言外之意，<br>挑戰 N1。"
      : "從 " + curriculum[i].level + " 出發，<br>向 N1 前進。";
  const todo = plan.tasks.length;
  return (
    '<section class="hero"><img class="hero-art" src="fuji.webp" alt="" width="1440" height="720" fetchpriority="high"><div class="hero-copy"><div class="eyebrow">' +
    icon("sun") +
    "今日學習</div><h1>" +
    title +
    "</h1><p>" +
    (todo
      ? "今天還有 " +
        todo +
        " 題，預計約 " +
        plan.tasks.reduce((n, t) => n + t.minutes, 0) +
        " 分鐘。"
      : "今天的排程已完成，可回顧手帳或自由練習。") +
    '</p><div class="tools">' +
    (todo
      ? button(
          "start",
          icon("play") + (plan.spent ? "繼續今日計畫" : "開始今日計畫"),
        )
      : '<a class="cta" href="#notes">查看學習紀錄</a>') +
    button("diagnose", "程度診斷", "subtle") +
    "</div></div></section>"
  );
}
function planCard(plan) {
  const groups = new Map();
  for (const task of plan.tasks) {
    const [i, j] = task.id.split("-");
    const key = task.kind + "-" + i + "-" + j;
    if (!groups.has(key)) groups.set(key, { task, count: 0, minutes: 0 });
    const group = groups.get(key);
    group.count++;
    group.minutes += task.minutes;
  }
  const rows = [...groups.values()].map(({ task, count, minutes }) => {
    const skill = questionSkill(curriculum, task.id);
    const weak = task.kind === "new" && plan.weights[skill] > 1;
    return (
      '<button class="row" data-act="task-' +
      task.id +
      '"><span class="tile t' +
      skill +
      '">' +
      (task.kind === "review" ? icon("repeat") : glyphs[skill]) +
      "</span><span><strong>" +
      planTitle(task) +
      "</strong><small>" +
      (weak ? "弱項加練" : planNames[task.kind]) +
      " · " +
      count +
      ' 題</small></span><span class="row-action">' +
      minutes +
      " 分 " +
      icon("chev") +
      "</span></button>"
    );
  });
  return (
    '<section class="paper"><div class="card-head"><h2>' +
    icon("list") +
    "今日個人計畫</h2>" +
    button("settings", "調整計畫", "subtle") +
    '</div><div class="plan-summary"><div class="metricline"><strong>' +
    curriculum[plan.level].level +
    " · 每日 " +
    state.minutes +
    " 分鐘</strong><span>" +
    plan.log.length +
    " 題已練</span></div>" +
    '<progress aria-label="今日已完成的估計課量" value="' +
    Math.min(plan.spent, state.minutes) +
    '" max="' +
    state.minutes +
    '"></progress><small>已完成約 ' +
    plan.spent +
    " 分鐘課量 · " +
    day() +
    '</small></div><div class="rows">' +
    (rows.join("") ||
      '<p class="empty">今天的排程已完成。明天會依最新進度接續安排。</p>') +
    (plan.deferred
      ? '<p class="empty">還有 ' +
        plan.deferred +
        " 題到期錯題，後續計畫會繼續安排。</p>"
      : "") +
    "</div></section>"
  );
}
function today() {
  const plan = dailyPlan(curriculum, state, day());
  return (
    hero(plan) +
    '<div class="columns">' +
    planCard(plan) +
    wordCard(plan.level) +
    '</div><section><div class="section-head"><h2>我的學習路線</h2><a class="caption section-link" href="#route">查看全部教材</a></div>' +
    stations(plan.level) +
    "</section>"
  );
}
function planSettings() {
  const options = curriculum
    .map(
      (l, i) =>
        '<option value="' +
        i +
        '"' +
        (i === activeLevel(curriculum, state) ? " selected" : "") +
        ">" +
        l.level +
        " · " +
        levelNames[i] +
        "</option>",
    )
    .join("");
  show(
    "調整每日學習計畫",
    '<form id="plan-settings"><label for="plan-level">目前學習級別</label><select id="plan-level" name="level">' +
      options +
      "</select>" +
      '<label for="plan-minutes">每天可投入的時間（分鐘）</label><input type="number" name="minutes" id="plan-minutes" inputmode="numeric" min="5" max="180" step="1" required value="' +
      state.minutes +
      '" aria-describedby="time-hint">' +
      '<p id="time-hint" class="caption">可設 5 至 180 分鐘。這是估計課量，之後每天沿用，隨時可調整。</p><div class="tools"><button class="cta" type="submit">儲存並重新排課</button></div></form>',
    "計畫設定",
  );
}
function startPlan(requestedId) {
  const plan = dailyPlan(curriculum, state, day());
  const task = requestedId
    ? plan.tasks.find((t) => t.id === requestedId)
    : plan.tasks[0];
  if (!task) {
    show(
      "今天的排程已完成",
      "<p>今天已完成約 " +
        plan.spent +
        ' 分鐘課量。下次開啟時會依日期、錯題與單元進度排課。</p><div class="tools">' +
        button("close", "回到學習首頁") +
        "</div>",
      "每日計畫",
    );
    return;
  }
  session = {
    type: "plan",
    task,
    date: day(),
    ids: [task.id],
    index: 0,
    results: [],
  };
  question();
}
function route() {
  const i = viewLevel,
    l = curriculum[i];
  const transferTasks = [
    "讀一張沒看過的車站告示，圈出地點、時間和動作。蓋住原文，用日語回答「いつ」「どこで」。",
    "找一段行程變更的對話，分別寫下原定安排和最後決定，再跟讀表示原因的那一句。",
    "讀一篇生活短文，用一句日文說明主旨。再聽一段同主題對話，記下說話者改變計畫的理由。",
    "搭配一篇社論與一則新聞訪談，比較雙方主張。各摘一句原文，標出讓步、轉折或保留態度的線索。",
    "閱讀同一議題的兩篇評論，比較作者的前提與立場。再聽訪談，從措辭推斷未明說的態度，記下支持推論的原句。",
  ];
  return (
    '<div class="page-intro"><div class="eyebrow">JLPT 學習計畫</div><h1 class="page-title">學習路線</h1><p class="intro">選一個級別，查看學習目標與單元。已有日語基礎，可以先做程度診斷。</p><div class="tools">' +
    button("diagnose", "開始程度診斷", "plain") +
    "</div></div>" +
    stations(i) +
    '<section class="paper block"><span class="tag">' +
    l.level +
    "</span><h2>" +
    l.title +
    "</h2><p>" +
    l.goal +
    '</p><div class="tools">' +
    (i !== state.level
      ? button("select-" + i, "設為目前學習級別", "plain")
      : '<span class="caption">目前學習級別</span>') +
    "</div>" +
    lessonRows(i) +
    '</section><section class="paper block"><h2>這一級怎麼練</h2><p>今日計畫會依你設定的時間穿插錯題與新課，優先補強較常答錯的技能。想把學過的內容用在新材料，可以挑戰下面的延伸任務。</p><div class="lesson-example"><b>' +
    l.level +
    " 延伸任務</b><p>" +
    transferTasks[i] +
    '</p></div><p class="empty">每週用一組沒看過的官方題目驗收。若同類題仍常錯，先重練對應單元；能指出答案線索後再進下一級。</p>' +
    '</section><section class="paper block"><h2>用官方題目驗收</h2><p>完成單元後，請挑選同級的陌生閱讀題與聽力題，檢查能否在限時內理解。這份原創課程提供各級起點與複習方向。</p><div class="links"><a class="section-link" href="https://www.jlpt.jp/e/samples/forlearners.html" target="_blank" rel="noopener">JLPT 官方樣題</a><a class="section-link" href="https://www.jlpt.jp/e/samples/sampleindex.html" target="_blank" rel="noopener">官方練習題集與音檔</a></div></section>'
  );
}
function notes() {
  const ids = Object.keys(state.review).filter((id) => bank.has(id));
  return (
    '<div class="page-intro"><div class="eyebrow">個人學習紀錄</div><h1 class="page-title">我的手帳</h1></div><div class="stats">' +
    [
      [
        curriculum.reduce((n, _, i) => n + lessonCount(i), 0) +
          "/" +
          curriculum.reduce((n, l) => n + l.lessons.length, 0),
        "完成單元",
      ],
      [state.answers, "累計作答"],
      [state.days.length, "練習天數"],
    ]
      .map(
        ([n, label]) =>
          '<div class="stat paper"><b>' + n + "</b>" + label + "</div>",
      )
      .join("") +
    '</div><section class="block paper"><h2>錯題複習</h2><p>錯題可在這裡立即重練。每日計畫會在下一個學習日優先安排尚未補強的題目，複習答對後依序間隔 1、3、7 天再練習。</p>' +
    (ids.length
      ? '<div class="tools">' +
        (due().length
          ? button("review", "開始複習（" + due().length + " 題）")
          : "<span>今天的複習已完成。</span>") +
        "</div>" +
        ids
          .map(
            (id) =>
              '<p class="empty"><strong>' +
              curriculum[Number(id[0])].level +
              "</strong> · " +
              bank.get(id).prompt.slice(0, 48) +
              "　<small>複習日 " +
              state.review[id].due +
              "</small></p>",
          )
          .join("")
      : '<p class="empty">目前沒有錯題。完成練習後，需要再練的題目會出現在這裡。</p>') +
    '</section><section class="block paper"><h2>收藏單字</h2>' +
    (state.saved.length
      ? state.saved
          .map((id) => {
            const [i, k] = id.split("-"),
              w = words[i][k];
            return (
              '<div class="row"><span><strong lang="ja">' +
              w[0] +
              "（" +
              w[1] +
              "）</strong><small>" +
              w[2] +
              " · " +
              w[3] +
              '</small></span><button class="plain row-action" data-act="remove-' +
              id +
              '">移除</button></div>'
            );
          })
          .join("")
      : '<p class="empty">在「今日一語」點選書籤，即可在這裡複習。</p>') +
    "</section>"
  );
}
function page() {
  const name = location.hash.slice(1);
  return ["route", "notes"].includes(name) ? name : "today";
}
function render() {
  renderedDate = day();
  const key = page();
  document.querySelectorAll("nav a").forEach((a) => {
    if (a.hash === "#" + key) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  main.innerHTML = { today, route, notes }[key]();
}
function show(title, body, label = "單元練習") {
  player.pause();
  dialog.innerHTML =
    '<div class="dialog-top"><span class="tag">' +
    label +
    '</span><button class="icon-btn" data-act="close" aria-label="關閉">' +
    icon("close") +
    '</button></div><h2 id="dialog-title" tabindex="-1">' +
    title +
    '</h2><div class="dialog-content">' +
    body +
    "</div>";
  if (!dialog.open) dialog.showModal();
  dialog.querySelector("h2").focus();
  dialog.scrollTop = 0;
}
function lesson(i, j) {
  const l = curriculum[i].lessons[j];
  session = {
    type: "lesson",
    i,
    j,
    ids: l.questions.map((_, k) => i + "-" + j + "-" + k),
    index: 0,
    results: [],
  };
  show(
    l.title,
    "<p>" +
      l.tip +
      '</p><div class="lesson-example"><strong lang="ja">' +
      l.example +
      "</strong><p>" +
      l.translation +
      '</p></div><div class="tools">' +
      button("question", "開始作答 · " + l.questions.length + " 題") +
      "</div>",
    curriculum[i].level + " · " + skills[j % 4],
  );
}
function diagnose() {
  session = {
    type: "diagnostic",
    ids: curriculum.flatMap((l, i) =>
      l.diagnostic.map((_, k) => i + "-d-" + k),
    ),
    index: 0,
    results: [],
  };
  show(
    "找到你的起點",
    '<p>從 N5 開始，每級 2 題。兩題都答對就接著挑戰下一級，遇到需要補強的級別就結束。最多 10 題。</p><p>結果用來安排課程，正式程度可再以官方樣題驗收。</p><div class="tools">' +
      button("question", "開始診斷") +
      "</div>",
    "程度診斷",
  );
}
function review() {
  const ids = due();
  if (!ids.length) {
    toast("今天的複習已完成。");
    render();
    return;
  }
  session = { type: "review", ids, index: 0, results: [] };
  question();
}
const player = new Audio();
function playClip(id, feedback) {
  player.pause();
  player.src = "audio/" + id + ".mp3";
  if (feedback) feedback.textContent = "";
  player.play().catch((error) => {
    if (error.name === "AbortError") return;
    if (feedback) feedback.textContent = "音檔無法播放，請展開逐字稿。";
    else toast("音檔無法播放，請稍後再試。");
  });
}
function question() {
  const s = session,
    id = s.ids[s.index],
    q = bank.get(id),
    lvl = curriculum[Number(id[0])].level;
  s.answered = false;
  const label =
    s.type === "plan"
      ? lvl + " · 今日計畫 · " + planNames[s.task.kind]
      : s.type === "diagnostic"
        ? lvl + " · 程度診斷"
        : s.type === "review"
          ? lvl + " · 錯題複習"
          : lvl + " · " + skills[s.j % 4];
  const audio = q.audio
    ? button("audio", icon("speaker") + "播放日語", "audio") +
      '<span id="voice-status" role="status"></span><details><summary>查看逐字稿</summary><p lang="ja">' +
      q.audio +
      '</p></details><a class="caption section-link" href="audio/credits.txt" target="_blank" rel="noopener">合成語音來源</a>'
    : "";
  const [li, lj] = id.split("-");
  const unit = curriculum[li].lessons[lj];
  const guide =
    s.type === "plan" && unit
      ? '<details class="study-tip" ' +
        (s.task.kind === "new" ? "open" : "") +
        "><summary>教材重點 · " +
        unit.title +
        "</summary><p>" +
        unit.tip +
        '</p><p lang="ja"><strong>' +
        unit.example +
        "</strong></p><p>" +
        unit.translation +
        "</p></details>"
      : "";
  show(
    s.type === "plan"
      ? planTitle(s.task)
      : "第 " +
          (s.index + 1) +
          " 題" +
          (s.type === "diagnostic" ? "" : " ／ " + s.ids.length),
    guide +
      audio +
      '<form id="answer"><fieldset><legend>' +
      q.prompt +
      "</legend>" +
      q.options
        .map(
          (o, k) =>
            '<label class="option"><input name="choice" type="radio" value="' +
            k +
            '" required><span>' +
            o +
            "</span></label>",
        )
        .join("") +
      '</fieldset><button type="submit" class="cta">確認答案</button></form><div id="result" aria-live="polite"></div>',
    label,
  );
}
function record(id, correct, mode) {
  if (!correct) {
    state.review[id] = {
      due: day(),
      step: 0,
      misses: (state.review[id]?.misses || 0) + 1,
    };
    return;
  }
  const r = state.review[id];
  if (mode !== "review" || !r || r.due > day()) return;
  const intervals = [1, 3, 7];
  if (r.step >= intervals.length) delete state.review[id];
  else
    state.review[id] = { ...r, due: day(intervals[r.step]), step: r.step + 1 };
}
dialog.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.id === "plan-settings") {
    const form = new FormData(event.target);
    const minutes = Number(form.get("minutes")),
      level = Number(form.get("level"));
    if (
      !Number.isInteger(minutes) ||
      minutes < 5 ||
      minutes > 180 ||
      !curriculum[level]
    )
      return;
    state.minutes = minutes;
    setLevel(level);
    closeDialog();
    toast("已依可用時間更新今天的計畫");
    return;
  }
  const s = session;
  if (!s || s.answered) return;
  const form = event.target,
    id = s.ids[s.index],
    q = bank.get(id),
    correct = Number(new FormData(form).get("choice")) === q.answer;
  if (
    s.type === "plan" &&
    (s.date !== day() ||
      !dailyPlan(curriculum, state, day()).tasks.some((t) => t.id === id))
  ) {
    startPlan();
    return;
  }
  s.answered = true;
  s.results.push(correct);
  state.answers++;
  if (!state.days.includes(day())) state.days.push(day());
  const kind = s.task?.kind || (s.type === "review" ? "review" : "new");
  record(id, correct, kind);
  if (s.type !== "diagnostic") {
    const log = (state.activity[day()] ||= []);
    log.push({ id, kind, minutes: questionMinutes(curriculum, id, kind) });
    if (correct && !id.includes("-d-")) state.learned[id] = day();
  }
  if (s.type === "lesson" && s.index === s.ids.length - 1) {
    const key = s.i + "-" + s.j;
    state.best[key] = Math.max(
      state.best[key] || 0,
      s.results.filter(Boolean).length,
    );
  }
  const priorLevel = state.level;
  state.level = activeLevel(curriculum, state);
  if (priorLevel !== state.level) viewLevel = state.level;
  save();
  form.querySelector("fieldset").disabled = true;
  form.querySelector("[type=submit]").hidden = true;
  let end = s.index === s.ids.length - 1;
  if (
    s.type === "diagnostic" &&
    s.index % 2 === 1 &&
    !s.results.slice(-2).every(Boolean)
  )
    end = true;
  document.querySelector("#result").innerHTML =
    '<div class="feedback ' +
    (correct ? "" : "miss") +
    '"><strong>' +
    (correct ? "答對了" : "正解是「" + q.options[q.answer] + "」") +
    "</strong><p>" +
    q.why +
    '</p></div><div class="tools">' +
    (s.type === "plan"
      ? button(
          "start",
          dailyPlan(curriculum, state, day()).tasks.length
            ? "繼續今日計畫"
            : "查看今日成果",
        )
      : button(end ? "finish" : "next", end ? "查看結果" : "下一題")) +
    (priorLevel !== state.level
      ? "<p>本級單元已完成，接著練習 " +
        curriculum[state.level].level +
        "。</p>"
      : "") +
    "</div>";
  document.querySelector("#result button").focus();
});
function finish() {
  const s = session,
    score = s.results.filter(Boolean).length;
  if (s.type === "diagnostic") {
    const i = Number(s.ids[s.index][0]);
    state.diagnosis = i;
    show(
      "建議從 " + curriculum[i].level + " 開始",
      "<p>本次答對 " +
        score +
        " / " +
        s.results.length +
        " 題。" +
        (score === 10
          ? "你已答對所有抽樣題，接著用 N1 官方樣題確認閱讀速度與聽力。"
          : curriculum[i].goal) +
        '</p><div class="tools">' +
        button("adopt-" + i, "從 " + curriculum[i].level + " 開始") +
        button("close", "保留目前級別", "plain") +
        "</div>",
      "診斷結果",
    );
  } else if (s.type === "lesson") {
    const next = nextLesson(s.i);
    show(
      done(s.i, s.j) ? "單元完成" : "再練一次，鞏固記憶",
      "<p>本次答對 " +
        score +
        " / " +
        s.ids.length +
        " 題。" +
        (score < s.ids.length
          ? "錯題已加入手帳，之後的每日計畫會安排複習。"
          : next < 0
            ? "這一級的單元都完成了，可用官方樣題驗收。"
            : "可以接著練習下一個單元。") +
        '</p><div class="tools">' +
        (score < s.ids.length
          ? button("lesson-" + s.i + "-" + s.j, "重練本單元")
          : next >= 0
            ? button("lesson-" + s.i + "-" + next, "下一個單元")
            : s.i < 4
              ? button(
                  "adopt-" + (s.i + 1),
                  "前往 " + curriculum[s.i + 1].level,
                )
              : button("map", "查看官方資源")) +
        button("close", "結束練習", "plain") +
        "</div>",
      "練習結果",
    );
  } else
    show(
      "完成本輪複習",
      "<p>答對 " +
        score +
        " / " +
        s.results.length +
        " 題。" +
        (score < s.results.length
          ? "仍需補強的題目會保留在今天的清單中。"
          : "下一次複習日期已更新。") +
        '</p><div class="tools">' +
        button("close", "完成") +
        "</div>",
      "複習結果",
    );
  save();
  render();
}
function setLevel(i) {
  player.pause();
  state.level = i;
  state.level = activeLevel(curriculum, state);
  viewLevel = state.level;
  wordIndex = new Date().getDate() % words[i].length;
  save();
  render();
}
function closeDialog() {
  if (dialog.open) dialog.close();
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const [a, v, k] = b.dataset.act.split("-");
  switch (a) {
    case "level":
      if (page() === "route") {
        viewLevel = Number(v);
        render();
      } else setLevel(Number(v));
      break;
    case "select":
      setLevel(Number(v));
      toast("已更新學習級別");
      break;
    case "lesson":
      lesson(Number(v), Number(k));
      break;
    case "settings":
      session = null;
      planSettings();
      break;
    case "task":
      startPlan(b.dataset.act.slice(5));
      break;
    case "start":
      startPlan();
      break;
    case "diagnose":
      diagnose();
      break;
    case "review":
      review();
      break;
    case "question":
      question();
      break;
    case "next":
      player.pause();
      session.index++;
      question();
      break;
    case "finish":
      finish();
      break;
    case "adopt":
      closeDialog();
      setLevel(Number(v));
      location.hash = "today";
      break;
    case "map":
      closeDialog();
      viewLevel = state.level;
      location.hash = "route";
      break;
    case "close":
      closeDialog();
      break;
    case "audio":
      playClip(
        session.ids[session.index],
        document.querySelector("#voice-status"),
      );
      break;
    case "speakword":
      playClip("word-" + state.level + "-" + wordIndex);
      break;
    case "nextword":
      player.pause();
      wordIndex = (wordIndex + 1) % words[state.level].length;
      render();
      main.querySelector("[data-act=nextword]").focus({ preventScroll: true });
      break;
    case "bookmark": {
      const id = wordKey(state.level, wordIndex);
      state.saved = state.saved.includes(id)
        ? state.saved.filter((i) => i !== id)
        : [...state.saved, id];
      save();
      render();
      main.querySelector("[data-act=bookmark]").focus({ preventScroll: true });
      break;
    }
    case "remove":
      state.saved = state.saved.filter((id) => id !== v + "-" + k);
      save();
      render();
      break;
  }
});
dialog.addEventListener("close", () => {
  player.pause();
  session = null;
  render();
});
window.addEventListener("hashchange", () => {
  player.pause();
  closeDialog();
  viewLevel = state.level;
  render();
  main.focus({ preventScroll: true });
  window.scrollTo(0, 0);
});
let renderedDate = day();
function checkDate() {
  if (renderedDate !== day()) render();
}
window.addEventListener("focus", checkDate);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) checkDate();
});
function watchMidnight() {
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 50);
  setTimeout(() => {
    checkDate();
    watchMidnight();
  }, midnight.getTime() - Date.now());
}
watchMidnight();
window.addEventListener("storage", (event) => {
  if (event.key !== storageKey) return;
  try {
    const latest = localStorage.getItem(storageKey);
    state = { ...defaults(), ...(latest ? JSON.parse(latest) : {}) };
    viewLevel = state.level;
    render();
  } catch {}
});
render();
