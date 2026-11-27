const timedMock = (() => {
  const storageKey = 'peakline-timed-mock-v1';
  const duration = 8 * 60 * 1000;
  const papers = { A: mockQuestions.filter(q => q.id.startsWith('ma')), B: mockQuestions.filter(q => q.id.startsWith('mb')) };
  let cache = { active: null, results: [] };
  let selectedResult = null;
  let timer = null;
  let memoryOnly = false;
  let expiring = false;

  function read() {
    if (!memoryOnly) {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) cache = JSON.parse(raw);
      } catch { memoryOnly = true; }
    }
    return cache;
  }

  function persist(record) {
    cache = record;
    try { localStorage.setItem(storageKey, JSON.stringify(record)); }
    catch { memoryOnly = true; }
    if (memoryOnly) {
      const note = document.getElementById('storage-note');
      note.hidden = false;
      note.textContent = '瀏覽器儲存不可用。請保留此分頁直到交卷。';
    }
  }

  function closeAttempt(record, time) {
    const exam = record.active;
    const expired = time >= exam.deadline;
    record.results.unshift({ ...exam, finished: Math.min(time, exam.deadline), expired });
    record.active = null;
    selectedResult = exam.id;
  }

  // Re-read under the same lock across tabs. Never accept an answer at or after the deadline.
  function change(apply, redraw = true) {
    function update() {
      const record = read();
      const now = Date.now();
      if (record.active && now >= record.active.deadline) {
        closeAttempt(record, now);
        persist(record);
        if (location.hash !== '#mock') render();
        redraw = true;
      } else if (apply(record, now)) {
        persist(record);
      }
      if (location.hash === '#mock' && redraw) render();
    }
    if (navigator.locks) return navigator.locks.request(storageKey, update);
    update();
    return Promise.resolve();
  }

  function expire() {
    if (expiring) return;
    expiring = true;
    change(() => false).finally(() => { expiring = false; });
  }

  function clock(ms) {
    const seconds = Math.max(0, Math.ceil(ms / 1000));
    return Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
  }

  function labels(exam) {
    return papers[exam.form].map((q, i) => {
      const choice = exam.choices[i];
      return { q, choice, correct: choice === q.right };
    });
  }

  function feedback() {
    const misses = new Map();
    let latest = null;
    // Results are newest first. Only the latest miss of a question starts its review cycle.
    for (const exam of read().results) {
      const scores = {L: 0, R: 0};
      for (const {q, choice, correct} of labels(exam)) {
        if (correct) scores[q.mode]++;
        else if (!misses.has(q.id)) misses.set(q.id, {
          attempt: exam.id, due: day(1, exam.finished), step: 0,
          source: '模測 ' + exam.form + ' 卷 · ' + (choice === null ? '未作答' : '答錯')
        });
      }
      if (!latest) latest = {form: exam.form, ...scores};
    }
    return {latest, misses};
  }

  function startClock(exam) {
    clearInterval(timer);
    const update = () => {
      const remaining = exam.deadline - Date.now();
      if (remaining <= 0) {
        clearInterval(timer);
        expire();
        return;
      }
      const el = document.querySelector('#mock-clock');
      if (el) el.textContent = clock(remaining);
    };
    timer = setInterval(update, 400);
  }

  function action(label, name, light = false) {
    return '<button class="action' + (light ? ' light' : '') + '" data-mock="' + name + '">' + label + '</button>';
  }

  function title(form) { return '聽讀短模測 ' + form + ' 卷'; }

  function landing(record) {
    const next = record.results[0]?.form === 'A' ? 'B' : 'A';
    const history = record.results.map(r => {
      const score = labels(r).filter(row => row.correct).length;
      const date = new Date(r.finished).toLocaleString('zh-TW');
      return '<li><span>' + date + ' · ' + r.form + ' 卷 · ' + score + ' / 12</span>' +
        action('查看檢討', 'result-' + r.id, true) + '</li>';
    }).join('');
    return heading('限時模測') +
      '<section class="panel"><h2>8 分鐘聽讀短模測</h2><p class="sub">每卷 12 題，先聽力 6 題，再閱讀 6 題。兩部分共用 8 分鐘。可回頭改答或重播錄音；交卷後才顯示答案與解析。切換頁面或關閉瀏覽器時，時間繼續計算。</p>' +
      '<p>建議從 ' + next + ' 卷開始。兩卷各有獨立題目，未作答算錯。</p><div class="result-buttons">' +
      action('開始 ' + next + ' 卷', 'start-' + next) + action('開始 ' + (next === 'A' ? 'B' : 'A') + ' 卷', next === 'A' ? 'start-B' : 'start-A', true) +
      '</div></section><section class="panel resource"><h2>模測紀錄</h2>' +
      (history ? '<ul class="score-list">' + history + '</ul>' : '<p class="meta">交卷後，可在這裡查看兩科答對題數與逐題檢討。</p>') + '</section>';
  }

  function questionView(exam) {
    const index = exam.index;
    const paper = papers[exam.form];
    const q = paper[index];
    const count = exam.choices.filter(Number.isInteger).length;
    const context = q.mode === 'L'
      ? '<audio controls preload="metadata" class="audio" aria-label="題目錄音" src="audio/' + q.id + '.mp3"></audio>'
      : q.material ? '<p class="passage" lang="en">' + q.material + '</p>' : '';
    const options = q.choices.map((choice, i) => {
      const letter = String.fromCharCode(65 + i);
      return '<label class="choice"><input type="radio" name="mock-choice" value="' + i + '"' +
        (exam.choices[index] === i ? ' checked' : '') + '><span lang="en">' + letter + (q.part === 2 ? '' : '. ' + choice) + '</span></label>';
    }).join('');
    return heading('限時模測') + '<section id="mock-paper" class="panel" data-id="' + exam.id + '" data-index="' + index + '">' +
      '<div class="card-title"><h2 tabindex="-1" id="mock-question-title">' + title(exam.form) + '</h2><span class="count">剩餘&nbsp;<b role="timer" id="mock-clock">' +
      clock(exam.deadline - Date.now()) + '</b></span></div><p>第 ' + (index + 1) + ' / ' + paper.length + ' 題 · ' +
      (q.mode === 'L' ? '聽力' : '閱讀') + ' Part ' + q.part + ' · 已答 <span id="mock-answered">' + count + '</span> 題</p>' +
      '<progress class="mock-progress" aria-label="已答題數" value="' + count + '" max="' + paper.length + '"></progress>' +
      context + (q.part === 2 ? '<p class="meta">聽完問題與三個回應後，選出最適合的一項。</p>' : '') +
      '<fieldset class="mock-options"><legend lang="en">' + q.prompt + '</legend><div class="answer-grid">' + options + '</div></fieldset>' +
      '<div class="result-buttons">' + (index ? action('上一題', 'prev', true) : '') +
      (index < paper.length - 1 ? action('下一題', 'next') : '') + action('交卷', 'finish', index < paper.length - 1) + '</div></section>';
  }

  function resultView(exam) {
    const rows = labels(exam);
    const score = rows.filter(row => row.correct).length;
    const missing = rows.filter(row => row.choice === null).length;
    const byMode = mode => rows.filter(row => row.q.mode === mode && row.correct).length;
    const details = rows.map(({q, choice, correct}, i) => {
      const status = choice === null ? '未作答' : correct ? '答對' : '答錯';
      const chosen = choice === null ? '未作答' : q.choices[choice];
      return '<details><summary>第 ' + (i + 1) + ' 題 · ' + q.skill + ' · ' + status + '</summary>' +
        (q.material ? '<p class="passage" lang="en">' + q.material.replaceAll('||', '\n') + '</p>' : '') +
        (q.mode === 'L' ? '<audio class="audio" controls preload="none" aria-label="重聽第 ' + (i + 1) + ' 題" src="audio/' + q.id + '.mp3"></audio>' : '') +
        '<p lang="en">' + q.prompt + '</p><p>你的答案：' + chosen + '</p><p><strong>正解：' +
        q.choices[q.right] + '</strong></p><p>' + q.why + '</p></details>';
    }).join('');
    return heading('模測結果') + '<section class="panel"><h2 tabindex="-1" id="mock-result-title">' + title(exam.form) + '</h2><p class="meta">' +
      (exam.expired ? '時間到，自動交卷' : '已交卷') + ' · 用時 ' + clock(exam.finished - exam.started) + ' · 未作答 ' + missing +
      ' 題</p><div class="result-number">' + score + ' <small>/ 12 題答對</small></div><p>聽力 ' + byMode('L') +
      ' / 6　 ·　閱讀 ' + byMode('R') + ' / 6</p><p class="meta">短模測只記錄原始答對題數。</p><div class="result-buttons">' +
      '<a class="action light" href="#home">查看今日訓練</a><a class="action light" href="#review">開啟錯題本</a>' +
      action('返回模測清單', 'list', true) + '</div></section><section class="panel resource"><h2>逐題檢討</h2>' + details + '</section>';
  }

  function page() {
    clearInterval(timer);
    const record = read();
    if (record.active) {
      if (record.active.deadline <= Date.now()) {
        queueMicrotask(expire);
        return heading('限時模測') + '<p role="status">時間到，正在結算。</p>';
      }
      startClock(record.active);
      return questionView(record.active);
    }
    const result = record.results.find(r => r.id === selectedResult);
    return result ? resultView(result) : landing(record);
  }

  function matches(exam, element) {
    const paper = element.closest('#mock-paper');
    return paper && exam && exam.id === paper.dataset.id && exam.index === Number(paper.dataset.index);
  }

  document.addEventListener('change', e => {
    const radio = e.target;
    if (radio.name !== 'mock-choice') return;
    change(record => {
      const exam = record.active;
      if (!matches(exam, radio)) return false;
      exam.choices[exam.index] = Number(radio.value);
      const count = exam.choices.filter(Number.isInteger).length;
      document.querySelector('#mock-answered').textContent = count;
      document.querySelector('.mock-progress').value = count;
      return true;
    }, false);
  });

  document.addEventListener('click', async e => {
    const control = e.target.closest('[data-mock]');
    if (!control) return;
    const name = control.dataset.mock;
    if (name === 'list' || name.startsWith('result-')) {
      selectedResult = name === 'list' ? null : name.slice(7);
      render();
      main.focus();
      return;
    }
    if (name === 'finish' && !window.confirm('確定交卷？未作答的題目會以答錯計算。')) return;
    await change((record, now) => {
      const exam = record.active;
      if (name.startsWith('start-')) {
        if (exam) return false;
        const form = name.slice(6);
        record.active = {id: crypto.randomUUID(), form, started: now, deadline: now + duration,
          index: 0, choices: Array(papers[form].length).fill(null)};
        selectedResult = null;
      } else if (!matches(exam, control)) return false;
      else if (name === 'finish') closeAttempt(record, now);
      else exam.index = Math.max(0, Math.min(papers[exam.form].length - 1, exam.index + (name === 'next' ? 1 : -1)));
      return true;
    });
    document.querySelector('#mock-question-title, #mock-result-title')?.focus();
  });

  // Catch up after sleep or returning from another tab, including a closed-browser timeout.
  function sync() {
    const record = read();
    if (record.active && record.active.deadline <= Date.now()) expire();
    else if (location.hash === '#mock') render();
  }
  window.addEventListener('storage', e => {
    if (e.key !== storageKey) return;
    if (location.hash !== '#mock') {
      if (e.newValue && JSON.parse(e.newValue).results[0]?.id !== JSON.parse(e.oldValue || '{}').results?.[0]?.id) render();
      return;
    }
    const previous = document.querySelector('#mock-paper')?.dataset.id;
    if (previous && !read().active) selectedResult = previous;
    sync();
  });
  window.addEventListener('pageshow', sync);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) sync(); });
  return { page, feedback };
})();
