// Run with Node and Playwright. Set PLAYWRIGHT_PACKAGE or PLAYWRIGHT_EXECUTABLE
// to use an existing local installation. The default entry tests the offline app.
const assert = require('node:assert/strict');
const {test} = require('node:test');
const {resolve} = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require(process.env.PLAYWRIGHT_PACKAGE || 'playwright');

test('timed papers, resume, deadlines and result history', async () => {
  const browser = await chromium.launch({executablePath: process.env.PLAYWRIGHT_EXECUTABLE});
  try {
    const context = await browser.newContext({viewport: {width: 320, height: 800}});
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.clock.install({time: new Date('2026-11-26T12:00:00Z')});
    const url = process.env.PEAKLINE_URL || pathToFileURL(resolve(__dirname, '../dist/index.html')).href;
    await page.goto(url);
    await page.getByRole('link', {name:'限時模測'}).click();
    const key = 'peakline-timed-mock-v1';
    const read = () => page.evaluate(k => JSON.parse(localStorage.getItem(k)), key);
    const act = name => page.locator('[data-mock="' + name + '"]').click();
    const pick = index => page.getByRole('radio').nth(index).check();
    const bank = await page.evaluate(() => mockQuestions);
    assert.equal(bank.length, 120);
    assert.equal(new Set(bank.map(q => q.id)).size, 120);
    assert(await page.evaluate(() => mockQuestions.every(q => !questions.some(practice => practice.id === q.id) && q.choices[q.right])));
    for (const form of ['ma', 'mb', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mi', 'mj']) {
      const questions = bank.filter(q => q.id.startsWith(form));
      assert.equal(questions.filter(q => q.mode === 'R').length, 6);
      assert.equal(questions.filter(q => q.mode === 'L').length, 6);
    }

    // Complete form A, revise an earlier choice and reload mid-paper.
    await act('start-A');
    await pick(0);
    const first = (await read()).active;
    assert.equal(first.deadline - first.started, 480000);
    await act('next');
    await act('prev');
    await page.clock.fastForward(60000);
    await page.reload();
    await page.getByRole('radio').first().waitFor();
    assert(await page.getByRole('radio').first().isChecked());
    assert.equal((await read()).active.deadline, first.deadline);
    for (const [i,q] of bank.filter(q => q.id.startsWith('ma')).entries()) {
      if (q.mode === 'L') {
        await page.locator('audio').evaluate(async audio => {
          await audio.play(); audio.pause();
          if (!(audio.duration > 0)) throw Error('Missing audio duration');
        });
      }
      assert.equal(await page.getByText(q.why, {exact:true}).count(), 0);
      await pick(q.right);
      if (i < 11) await act('next');
    }
    page.once('dialog', dialog => dialog.dismiss());
    await act('finish');
    assert((await read()).active);
    page.once('dialog', dialog => dialog.accept());
    await act('finish');
    await page.getByRole('heading', {name:'模測結果'}).waitFor();
    assert.match(await page.locator('main').innerText(), /聽力 6 \/ 6.*閱讀 6 \/ 6/);
    assert.equal(await page.evaluate(()=>timedMock.feedback().misses.size),0);
    assert.equal(await page.locator('details').count(), 12);
    await page.reload();
    await act('result-' + first.id);
    assert.equal(await page.locator('details').count(), 12);
    await act('list');

    // Cross the deadline with a partial answer sheet. A late click cannot count.
    await act('start-B');
    await pick(2);
    await act('next');
    const second = (await read()).active;
    await page.clock.setSystemTime(new Date(second.deadline));
    await page.getByRole('radio').first().evaluate(r => r.click());
    await page.getByText(/時間到，自動交卷/).waitFor();
    let data = await read();
    assert.equal(data.active, null);
    assert.equal(data.results.length, 2);
    assert.equal(data.results[0].finished, second.deadline);
    assert.equal(data.results[0].choices.filter(Number.isInteger).length, 1);
    assert.match(await page.locator('main').innerText(), /聽力 1 \/ 6.*閱讀 0 \/ 6/);
    assert.match(await page.locator('main').innerText(), /未作答 11 題/);
    await page.getByRole('link',{name:'開啟錯題本'}).click();
    await page.locator('.review-list').waitFor();
    assert.equal(await page.locator('.review-list .row').count(),11);
    assert.equal(await page.getByText(/模測 B 卷 · 未作答/).count(),11);
    await page.getByRole('link',{name:'學習總覽',exact:true}).click();
    assert.equal(await page.locator('.hero button').getAttribute('data-act'),'start-R');
    assert.match(await page.locator('[data-act="start-R"].row').innerText(),/4 題/);
    assert.match(await page.locator('[data-act="start-L"].row').innerText(),/2 題/);
    await page.getByRole('link',{name:'限時模測',exact:true}).click();

    // Timer alone submits. Leaving the site and reopening after expiry also submits once.
    await act('list');
    await act('start-A');
    await page.locator('#mock-paper').waitFor();
    await page.clock.fastForward(481000);
    await page.getByText(/時間到，自動交卷/).waitFor();
    await act('list');
    await act('start-B');
    await page.locator('#mock-paper').waitFor();
    await page.goto('about:blank');
    await page.clock.fastForward(481000);
    await page.goto(url + '#mock');
    await page.getByText(/時間到，自動交卷/).waitFor();
    await page.reload();
    data = await read();
    assert.equal(data.results.length, 4);
    assert.equal(new Set(data.results.map(r => r.id)).size, 4);
    assert.equal(data.active, null);
    // Both tabs display the same attempt and observe one submission.
    await act('start-A');
    await page.locator('#mock-paper').waitFor();
    const peer = await context.newPage();
    await peer.clock.setSystemTime(new Date(await page.evaluate(() => Date.now())));
    await peer.goto(url + '#mock');
    await peer.locator('#mock-paper').waitFor();
    assert.equal(await peer.locator('#mock-paper').getAttribute('data-id'), (await read()).active.id);
    await pick(1);
    await peer.waitForFunction(() => document.querySelector('input[value="1"]')?.checked);
    const dashboard=await context.newPage();
    await dashboard.goto(url+'#home');
    await dashboard.getByText(/最近模測 B 卷/).waitFor();
    peer.once('dialog', dialog => dialog.accept());
    await peer.locator('[data-mock="finish"]').click();
    await page.getByRole('heading', {name:'模測結果'}).waitFor();
    await dashboard.getByText(/最近模測 A 卷 · 聽力 1\/6、閱讀 0\/6/).waitFor();
    assert.equal((await read()).results.length, 5);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});

async function checkPaperPair(first, second, nextAfterPair) {
  const browser = await chromium.launch({executablePath: process.env.PLAYWRIGHT_EXECUTABLE});
  try {
    const page = await browser.newPage({viewport:{width:320,height:800}});
    const url = process.env.PEAKLINE_URL || pathToFileURL(resolve(__dirname, '../dist/index.html')).href;
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.clock.install({time:new Date('2026-11-27T12:00:00+08:00')});
    await page.goto(url + '#mock');
    for (const form of [first, second]) {
      const weak = form === first ? 'L' : 'R';
      const firstMiss = weak === 'L' ? 0 : 6;
      const paper = await page.evaluate(form => mockQuestions.filter(q=>q.id.startsWith('m'+form.toLowerCase())),form);
      await page.getByRole('button',{name:'開始 '+form+' 卷'}).click();
      await page.locator('#mock-paper').waitFor();
      const attempt = await page.evaluate(()=>JSON.parse(localStorage.getItem('peakline-timed-mock-v1')).active);
      assert.equal(attempt.deadline-attempt.started, 8*60*1000);
      for (const [i,q] of paper.entries()) {
        const card = page.locator('#mock-paper[data-index="'+i+'"]');
        await card.waitFor();
        if (i === 2) await page.reload();
        assert.match(await card.locator('h2').innerText(), new RegExp(form+' 卷'));
        if (q.mode === 'L') {
          const audio = card.locator('audio');
          assert.equal(await audio.getAttribute('src'),'audio/'+q.id+'.mp3');
          await audio.evaluate(async el => {
            await el.play(); el.pause();
            if (!(el.duration > 0)) throw Error('Empty listening clip');
          });
        }
        if (i !== firstMiss+1) {
          const choice = i === firstMiss ? (q.right+1)%q.choices.length : q.right;
          await card.getByRole('radio').nth(choice).check();
        }
        if (i < 11) await card.getByRole('button',{name:'下一題'}).click();
      }
      page.once('dialog', d=>d.accept());
      await page.getByRole('button',{name:'交卷'}).click();
      await page.getByRole('heading',{name:'模測結果'}).waitFor();
      assert.match(await page.locator('main').innerText(), weak==='L' ? /聽力 4 \/ 6.*閱讀 6 \/ 6/ : /聽力 6 \/ 6.*閱讀 4 \/ 6/);
      await page.getByRole('link',{name:'開啟錯題本'}).click();
      await page.locator('.review-list').waitFor();
      assert.equal(await page.getByText(new RegExp('模測 '+form+' 卷 · 答錯')).count(),1);
      assert.equal(await page.getByText(new RegExp('模測 '+form+' 卷 · 未作答')).count(),1);
      await page.getByRole('button',{name:'提前練習'}).click();
      const ids = await page.evaluate(()=>state.drafts.review.ids);
      assert(ids.includes(paper[firstMiss].id) && ids.includes(paper[firstMiss+1].id));
      for (const id of ids) {
        const q = await page.evaluate(id=>byId.get(id),id);
        await page.locator('#quiz [data-act="answer-'+q.right+'"]').click();
        await page.getByText(q.why,{exact:true}).waitFor();
        await page.locator('#quiz [data-act="next"]').click();
      }
      await page.locator('#quiz [data-act="home"]').click();
      await page.locator('.hero').waitFor();
      assert.equal(await page.locator('.hero button').getAttribute('data-act'),'start-'+weak);
      for (const mode of ['L','R']) {
        assert.match(await page.locator('.row[data-act="start-'+mode+'"]').innerText(),new RegExp((mode===weak?4:2)+' 題'));
      }
      await page.locator('nav [data-page="mock"]').click();
      await page.locator('[data-mock="list"]').click();
      await page.getByText('建議從 '+(form===first?second:nextAfterPair)+' 卷開始。',{exact:false}).waitFor();
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    }
    assert.deepEqual(errors,[]);
  } finally { await browser.close(); }
}

test('forms C and D play, resume, populate review and update daily training', () => checkPaperPair('C','D','E'));
test('forms E and F play, resume, populate review and update daily training', () => checkPaperPair('E','F','G'));
test('forms G and H play, resume, populate review and update daily training', () => checkPaperPair('G','H','I'));
test('forms I and J play, resume, populate review and update daily training', () => checkPaperPair('I','J','A'));

test('old submissions, review intervals, repeat misses and adaptive drill sizes', async () => {
  const browser = await chromium.launch({executablePath: process.env.PLAYWRIGHT_EXECUTABLE});
  try {
    const context = await browser.newContext({timezoneId:'Asia/Taipei'});
    const page = await context.newPage();
    const url = process.env.PEAKLINE_URL || pathToFileURL(resolve(__dirname, '../dist/index.html')).href;
    await page.clock.install({time:new Date('2026-11-27T12:00:00+08:00')});
    await page.goto(url);
    const act = name => page.locator('[data-act="' + name + '"]:visible').last().click();
    const navigate = async name => {
      await page.locator('nav [data-page="'+name+'"]').click();
      await page.locator('nav [data-page="'+name+'"][aria-current="page"]').waitFor();
    };
    const reviewDate = () => page.evaluate(() => reviewQueue.ma01?.due);
    const readDraft = () => page.evaluate(() => state.drafts[active]);
    async function addSavedResult(form, wrong, missing) {
      await page.evaluate(({form, wrong, missing}) => {
        const key='peakline-timed-mock-v1';
        const saved=JSON.parse(localStorage.getItem(key)) || {active:null,results:[]};
        const paper=mockQuestions.filter(q=>q.id.startsWith('m'+form.toLowerCase()));
        const choices=paper.map(q=>missing.includes(q.id)?null:wrong.includes(q.id)?(q.right+1)%q.choices.length:q.right);
        saved.results.unshift({id:crypto.randomUUID(),form,choices,finished:Date.now(),started:Date.now()-120000,expired:false});
        localStorage.setItem(key,JSON.stringify(saved));
      }, {form,wrong,missing});
      await page.reload();
    }
    async function finishReview() {
      await navigate('review');
      await act('start-review');
      const {ids}=await readDraft();
      for(const id of ids) {
        const right=await page.evaluate(id=>byId.get(id).right,id);
        await act('answer-'+right);
        await act('next');
      }
      await act('home');
    }
    await page.evaluate(()=>{
      state.review.a1={due:'2027-01-01',step:1};
      save();
    });
    // A legacy paper has one wrong listening answer and one unanswered reading item.
    await addSavedResult('A',['ma01'],['ma08']);
    await navigate('review');
    assert.equal(await page.locator('.review-list .row').count(),3);
    assert.equal(await page.getByText(/模測 A 卷 · 答錯/).count(),1);
    assert.equal(await page.getByText(/模測 A 卷 · 未作答/).count(),1);
    await navigate('home');
    await act('start-R');
    assert.equal((await readDraft()).ids.length,3);
    await act('close');
    await finishReview(); // early practice leaves the due date intact
    assert.equal(await reviewDate(),'2026-11-28');
    await page.clock.setSystemTime(new Date('2026-11-28T12:00:00+08:00'));
    await finishReview();
    assert.equal(await reviewDate(),'2026-12-01');
    await page.reload();
    assert.equal(await reviewDate(),'2026-12-01');
    await page.clock.setSystemTime(new Date('2026-12-01T12:00:00+08:00'));
    await finishReview();
    await page.reload();
    assert.deepEqual(await page.evaluate(()=>reviewIds()),['a1']);
    // A new miss starts a fresh cycle, while the old unanswered item stays retired.
    await addSavedResult('A',[],['ma01','ma02']);
    assert.deepEqual((await page.evaluate(()=>reviewIds())).sort(),['a1','ma01','ma02']);
    assert.equal(await page.locator('.hero button').getAttribute('data-act'),'start-L');
    await act('start-L');
    assert.equal((await readDraft()).ids.length,4);
    await act('close');
    await act('start-R'); // earlier three-question drill survives the new 4:2 plan
    assert.equal((await readDraft()).ids.length,3);
    await act('begin');
    for (const id of (await readDraft()).ids) {
      await act('answer-'+await page.evaluate(id=>byId.get(id).right,id));
      await act('next');
    }
    await act('home');
    await act('start-R');
    assert.equal((await readDraft()).ids.length,2);
    const mixed = await page.evaluate(()=>idsFor('mix').map(id=>byId.get(id).mode));
    assert.deepEqual(mixed,['L','L','L','R']);
  } finally { await browser.close(); }
});
