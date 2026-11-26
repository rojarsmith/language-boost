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
    assert.equal(bank.length, 24);
    assert.equal(new Set(bank.map(q => q.id)).size, 24);
    assert(await page.evaluate(() => mockQuestions.every(q => !byId.has(q.id) && q.choices[q.right])));
    for (const form of ['ma', 'mb']) {
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
    peer.once('dialog', dialog => dialog.accept());
    await peer.locator('[data-mock="finish"]').click();
    await page.getByRole('heading', {name:'模測結果'}).waitFor();
    assert.equal((await read()).results.length, 5);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
