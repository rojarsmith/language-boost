"use strict";
const mockStorageKey = "nihongo-journey-mocks-v1";
const emptyMockBook = () => ({ active: null, history: [] });
let mockBook = emptyMockBook(),
  mockLevel = null,
  mockReport = null,
  confirmingMock = false;
let mockStorageOK = true,
  expiring = false;

function readMockBook() {
  const raw = localStorage.getItem(mockStorageKey);
  if (!raw) return emptyMockBook();
  const book = JSON.parse(raw);
  if (!Array.isArray(book.history) || !Object.hasOwn(book, "active"))
    throw Error("invalid book");
  return book;
}
function mockEscape(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function mockButton(action, text, cls = "plain", attrs = "") {
  return (
    '<button type="button" class="' +
    cls +
    '" data-mock="' +
    action +
    '" ' +
    attrs +
    ">" +
    text +
    "</button>"
  );
}
function mockName(level) {
  return curriculum[level].level;
}
function formLabel(attempt) {
  return mockName(attempt.level) + " · " + "ABC"[attempt.form] + " 卷";
}
function timeLeft(deadline) {
  const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  return Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, "0");
}
function syncMockResult() {
  const last = mockBook.history.at(-1);
  if (!last || state.lastMock === last.id) return;
  const raw = localStorage.getItem(storageKey);
  if (raw) state = { ...defaults(), ...JSON.parse(raw) };
  if (applyMockResult(state, last)) {
    viewLevel = state.level;
    save();
  }
}
function mockPlanNote() {
  if (!state.lastMock) return "";
  const focus = state.mockFocus
    .map((n, s) => (n > 0 ? skills[s] + " " + n + " 題" : ""))
    .filter(Boolean);
  return (
    '<p class="mock-plan-note">' +
    (focus.length
      ? "模測補強目標：在每日計畫答對" + focus.join("、") + "。"
      : "上次模測的補強目標已完成。") +
    "</p>"
  );
}
function mockPage() {
  if (!mockStorageOK)
    return '<h1 class="page-title">升級測驗</h1><p>無法讀寫這個瀏覽器的測驗紀錄。請開啟網站儲存後重新整理，才能保留新卷與截止時間。</p>';
  if (mockBook.active) return mockPaper(mockBook.active);
  const report = mockBook.history.find((r) => r.id === mockReport);
  if (report) return mockResultPage(report);
  const level = mockLevel ?? state.level;
  const left = unusedMockForms(mockBook, level).length;
  const levels = curriculum
    .map((l, i) =>
      mockButton(
        "level",
        l.level,
        "plain",
        'aria-pressed="' + (i === level) + '" data-level="' + i + '"',
      ),
    )
    .join("");
  const history = [...mockBook.history]
    .reverse()
    .map((r) =>
      mockButton(
        "report",
        "<span><strong>" +
          formLabel(r) +
          "</strong><small>" +
          new Date(r.ended).toLocaleDateString("zh-TW") +
          " · " +
          (r.ready ? "達標" : "建議補強") +
          '</small></span><span class="row-action">' +
          r.total +
          " / 12 " +
          icon("chev") +
          "</span>",
        "row",
        'data-id="' + r.id + '"',
      ),
    )
    .join("");
  return (
    '<div class="page-intro"><div class="eyebrow">JLPT 分級驗收</div><h1 class="page-title">限時升級測驗</h1><p class="intro">用第一次見到的題目，檢查你能否在時間內讀懂、聽懂，再安排下一階段的練習。</p></div>' +
    '<section class="paper block"><h2>選擇測驗級別</h2><div class="mock-levels">' +
    levels +
    '</div><div class="lesson-example"><strong>' +
    mockName(level) +
    " · " +
    mockMinutes[level] +
    " 分鐘</strong><p>每卷 12 題，詞彙、文法、閱讀、聽力各 3 題。剩餘新卷 " +
    left +
    " / 3 份。</p></div>" +
    '<p class="mock-rule">本 App 的進階門檻為總分至少 9 / 12，且各科至少 2 / 3。達標後排入下一級，N1 達標後繼續鞏固；未達標則保留目前級別並加練弱項。這是短卷抽測，正式考試準備度可再用官方題集驗收。</p>' +
    '<p>開始後即保留整份新卷。每次選答都會儲存，離開仍會計時，到時按已選答案自動交卷。測驗時間另計。</p><div class="tools">' +
    (left
      ? mockButton(
          "begin",
          icon("clock") + " 開始 " + mockName(level) + " 新卷",
          "cta",
          'data-level="' + level + '"',
        )
      : '<span>本級三份新卷均已使用。可查看歷次解析，或使用<a class="section-link" target="_blank" rel="noopener" href="https://www.jlpt.jp/e/samples/sampleindex.html">官方練習題集</a>繼續驗收。</span>') +
    "</div></section>" +
    (history
      ? '<section class="paper block"><h2>歷次成績</h2>' +
        history +
        "</section>"
      : "")
  );
}
function mockPaper(a) {
  const qs = mockBank[a.level][a.form],
    q = qs[a.index],
    filled = a.answers.filter((v) => v !== null).length;
  const nav = qs
    .map((_, i) =>
      mockButton(
        "jump",
        String(i + 1),
        "mock-dot" + (a.answers[i] !== null ? " filled" : ""),
        'data-index="' +
          i +
          '" aria-label="第 ' +
          (i + 1) +
          " 題，" +
          (a.answers[i] !== null ? "已答" : "未答") +
          '"' +
          (i === a.index ? ' aria-current="step"' : ""),
      ),
    )
    .join("");
  const options = q.options
    .map(
      (o, i) =>
        '<label class="option"><input type="radio" name="mock-choice" value="' +
        i +
        '"' +
        (a.answers[a.index] === i ? " checked" : "") +
        "><span>" +
        mockEscape(o) +
        "</span></label>",
    )
    .join("");
  const bottom = confirmingMock
    ? '<section class="feedback"><strong>確定交卷？</strong><p>已答 ' +
      filled +
      " 題，未答 " +
      (12 - filled) +
      ' 題。未答題以零分計算。</p><div class="tools">' +
      mockButton("submit", "確認交卷", "cta") +
      mockButton("back", "返回檢查") +
      "</div></section>"
    : '<div class="tools">' +
      (a.index ? mockButton("previous", "上一題") : "") +
      (a.index < 11 ? mockButton("next", "下一題", "cta") : "") +
      mockButton("confirm", "檢查並交卷", a.index === 11 ? "cta" : "subtle") +
      "</div>";
  return (
    '<article class="paper block mock-sheet" data-attempt="' +
    a.id +
    '" data-position="' +
    a.index +
    '"><div class="metricline"><span class="tag">' +
    formLabel(a) +
    '</span><span class="mock-clock">' +
    icon("clock") +
    ' 剩餘 <b id="mock-clock" role="timer" aria-label="剩餘時間">' +
    timeLeft(a.deadline) +
    "</b></span></div>" +
    '<h1 class="page-title" id="mock-question-title" tabindex="-1">' +
    skills[mockSkill(a.index)] +
    " · 第 " +
    (a.index + 1) +
    ' 題</h1><p class="caption">共 12 題 · 已答 <span id="mock-answered">' +
    filled +
    '</span> 題</p><div class="mock-grid" aria-label="題號導覽">' +
    nav +
    "</div>" +
    (q.audio
      ? mockButton("audio", icon("speaker") + " 播放聽力", "audio") +
        '<span role="status" id="mock-voice"></span>'
      : "") +
    "<fieldset><legend>" +
    mockEscape(q.prompt) +
    "</legend>" +
    options +
    "</fieldset>" +
    bottom +
    "</article>"
  );
}
function mockResultPage(r) {
  const qs = mockBank[r.level][r.form];
  const weak = skills.filter((_, s) => r.points[s] < 3);
  const mark = skills
    .map(
      (skill, s) =>
        '<div class="stat paper"><b>' +
        r.points[s] +
        " / 3</b>" +
        skill +
        "</div>",
    )
    .join("");
  const explanations = qs
    .map(
      (q, i) =>
        '<details class="mock-answer"><summary>第 ' +
        (i + 1) +
        " 題 · " +
        skills[mockSkill(i)] +
        " · " +
        (r.answers[i] === null
          ? "未答"
          : r.answers[i] === q.answer
            ? "答對"
            : "答錯") +
        "</summary><p>" +
        mockEscape(q.prompt) +
        "</p>" +
        (q.audio ? '<p lang="ja">' + mockEscape(q.audio) + "</p>" : "") +
        "<p>你的答案：" +
        (r.answers[i] === null ? "未答" : mockEscape(q.options[r.answers[i]])) +
        "</p><p><b>正解：" +
        mockEscape(q.options[q.answer]) +
        "</b></p><p>" +
        mockEscape(q.why) +
        "</p></details>",
    )
    .join("");
  return (
    '<section class="page-intro"><div class="eyebrow">' +
    formLabel(r) +
    " · " +
    (r.timedOut ? "時間到，自動交卷" : "已交卷") +
    '</div><h1 class="page-title">' +
    (r.ready
      ? r.level === 4
        ? "N1 短卷達標"
        : "適合進入 " + mockName(r.level + 1)
      : "建議先補強") +
    "</h1><p>總分 <b>" +
    r.total +
    " / 12</b>，未答 " +
    r.answers.filter((v) => v === null).length +
    ' 題。門檻為總分至少 9 題，各科至少 2 題。</p></section><div class="mock-scores">' +
    mark +
    "</div>" +
    '<section class="paper block"><h2>後續學習</h2><p>' +
    (weak.length ? "這次可加練" + weak.join("、") + "。" : "四項技能皆全對。") +
    (state.lastMock === r.id
      ? "目前每日計畫安排在 " + mockName(state.level) + "。"
      : "目前計畫已採用較新的成績。") +
    '</p><div class="tools"><a class="cta" href="#today">查看今日計畫</a>' +
    mockButton("home", "返回測驗列表") +
    "</div></section>" +
    '<section class="paper block"><h2>逐題解析</h2>' +
    explanations +
    "</section>"
  );
}

// Reload inside the lock so two tabs cannot reserve two papers or submit the
// same attempt twice. Only durable writes count as starting a fresh paper.
async function changeMock(change, redraw = true) {
  const run = () => {
    const book = readMockBook();
    let result;
    if (book.active && Date.now() >= book.active.deadline)
      result = finishMock(book, Date.now());
    else result = change(book);
    localStorage.setItem(mockStorageKey, JSON.stringify(book));
    mockBook = book;
    if (result?.points) {
      mockReport = result.id;
      confirmingMock = false;
      player.pause();
      syncMockResult();
    }
    if (redraw || result?.points) render();
  };
  try {
    if (navigator.locks) await navigator.locks.request(mockStorageKey, run);
    else run();
  } catch {
    mockStorageOK = false;
    render();
    toast("無法儲存測驗紀錄，請檢查網站儲存設定後重新整理。");
  }
}
function tickMock() {
  if (!mockBook.active || !mockStorageOK) return;
  if (Date.now() >= mockBook.active.deadline && !expiring) {
    expiring = true;
    changeMock(() => {}).finally(() => {
      expiring = false;
    });
  } else {
    const clock = document.getElementById("mock-clock");
    if (clock) clock.textContent = timeLeft(mockBook.active.deadline);
  }
}
function initMock() {
  try {
    mockBook = readMockBook();
    syncMockResult();
  } catch {
    mockStorageOK = false;
  }
  tickMock();
  setInterval(tickMock, 1000);
  window.addEventListener("focus", tickMock);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tickMock();
  });
  window.addEventListener("storage", (e) => {
    if (e.key !== mockStorageKey) return;
    try {
      const old = mockBook.active;
      mockBook = readMockBook();
      if (old && !mockBook.active) {
        mockReport = old.id;
        player.pause();
      }
      syncMockResult();
      render();
      tickMock();
    } catch {
      mockStorageOK = false;
      render();
    }
  });
}
document.addEventListener("change", async (e) => {
  if (e.target.name !== "mock-choice") return;
  const sheet = e.target.closest(".mock-sheet"),
    index = Number(sheet.dataset.position),
    value = Number(e.target.value);
  await changeMock((book) => {
    if (
      book.active?.id === sheet.dataset.attempt &&
      book.active.index === index
    )
      book.active.answers[index] = value;
  }, false);
  const a = mockBook.active;
  if (a && sheet.isConnected) {
    document.getElementById("mock-answered").textContent = a.answers.filter(
      (v) => v !== null,
    ).length;
    const dot = sheet.querySelector('[data-index="' + index + '"]');
    dot.classList.add("filled");
    dot.setAttribute("aria-label", "第 " + (index + 1) + " 題，已答");
    if (confirmingMock) render();
  }
});
document.addEventListener("click", async (e) => {
  const b = e.target.closest("[data-mock]");
  if (!b) return;
  const action = b.dataset.mock,
    level = Number(b.dataset.level),
    sheet = b.closest(".mock-sheet");
  if (action === "level") {
    mockLevel = level;
    render();
    return;
  }
  if (action === "home" || action === "report") {
    mockReport = action === "home" ? null : b.dataset.id;
    render();
    return;
  }
  if (action === "begin") {
    mockReport = null;
    confirmingMock = false;
    await changeMock((book) => startMock(book, level, Date.now()));
    return;
  }
  if (
    !sheet ||
    !mockBook.active ||
    sheet.dataset.attempt !== mockBook.active.id
  )
    return;
  if (Date.now() >= mockBook.active.deadline) {
    tickMock();
    return;
  }
  if (action === "audio") {
    const a = mockBook.active;
    playClip(
      "mock-" + a.level + "-" + a.form + "-" + a.index,
      document.querySelector("#mock-voice"),
      "音檔無法播放，請檢查連線後再次播放。",
    );
    return;
  }
  if (action === "confirm" || action === "back") {
    confirmingMock = action === "confirm";
    render();
    document
      .querySelector(
        confirmingMock ? '[data-mock="submit"]' : '[data-mock="confirm"]',
      )
      ?.focus();
    return;
  }
  player.pause();
  await changeMock((book) => {
    const a = book.active;
    if (a?.id !== sheet.dataset.attempt) return;
    if (action === "submit" && confirmingMock)
      return finishMock(book, Date.now());
    confirmingMock = false;
    const next =
      action === "jump"
        ? Number(b.dataset.index)
        : Number(sheet.dataset.position) + (action === "previous" ? -1 : 1);
    a.index = Math.max(0, Math.min(11, next));
  });
  document.getElementById("mock-question-title")?.focus();
});
