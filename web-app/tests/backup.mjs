import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {parseBackup} from '../frontend/backup.js';
const curriculum = JSON.parse(await readFile(new URL('../frontend/curriculum.json', import.meta.url)));
const fixture = () => ({version:1, exported_at:'2026-11-15T00:00:00.000Z',
  preferences:{name:'Learner',language:'en',minutes:90,role:'product',support:true,level:'starter',rate:0.85,timezone:'Asia/Taipei'},
  attempts:[{id:'test-attempt',lesson_id:'en-clarify',language:'en',created_at:'2026-11-14T00:00:00.000Z',seconds:60,confidence:4,bottleneck:'sound',transcript:'',followup:'',transfer:'Please clarify.',listening_correct:true,listening_checked:true,used_script:false,used_transfer_prompt:false}],
  reviews:[{lesson_id:'en-clarify',stage:0,due:'2026-11-16T00:00:00.000Z'}]});
const parse = data => parseBackup(JSON.stringify(data), curriculum.lessons, curriculum.version);

test('legacy exports restore all data; repeated restore has no extra records', () => {
  const data = fixture(); const result = parse(data);
  assert.deepEqual(result, {prefs:data.preferences,attempts:data.attempts,reviews:data.reviews});
  assert.deepEqual(parse(data), result);
  data.curriculum_version = curriculum.version;
  assert.deepEqual(parse(data), result);
});
test('empty backups and Japanese records are supported', () => {
  const data = fixture(); data.attempts[0].lesson_id='ja-order'; data.attempts[0].language='ja'; data.reviews=[];
  assert.equal(parse(data).attempts[0].language,'ja');
  data.attempts=[]; assert.deepEqual(parse(data).attempts,[]);
});
test('reject malformed or incompatible backups before restoring', () => {
  assert.throws(() => parseBackup('{', curriculum.lessons, 1), /JSON/);
  for (const mutate of [
    d=>d.version=2, d=>d.curriculum_version=999, d=>d.preferences=null,
    d=>d.preferences.timezone='invalid', d=>d.preferences.minutes=-1,
    d=>d.attempts=null, d=>d.attempts.push({...d.attempts[0]}),
    d=>d.attempts[0].lesson_id='en-missing', d=>d.attempts[0].language='ja',
    d=>d.attempts[0].created_at='invalid', d=>d.attempts[0].seconds=-1,
    d=>d.attempts[0].transfer=null, d=>d.attempts[0].listening_correct='true',
    d=>d.reviews[0].stage=5, d=>d.reviews[0].due='invalid',
    d=>d.reviews.push({...d.reviews[0]}),
  ]) { const data=fixture(); mutate(data); assert.throws(()=>parse(data)); }
});
test('unrecognized fields are discarded and HTML remains plain text', () => {
  const data=fixture(); data.preferences.name='<img src=x onerror=alert(1)>';
  data.preferences.extra='discard'; data.attempts[0].extra='discard';
  const result=parse(data);
  assert.equal(result.prefs.name,data.preferences.name);
  assert.equal(result.prefs.extra,undefined); assert.equal(result.attempts[0].extra,undefined);
});
