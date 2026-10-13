import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const curriculum=JSON.parse(await readFile(new URL('../frontend/curriculum.json',import.meta.url),'utf8'));
const ids=new Set();
for(const lesson of curriculum.lessons){
  assert(!ids.has(lesson.id),`Duplicate: ${lesson.id}`);ids.add(lesson.id);
  assert(['en','ja'].includes(lesson.language));
  for(const key of ['goal','scene','question','simple','sample','chinese','transfer','feedback'])assert(lesson[key]?.trim(),`${lesson.id}: ${key}`);
  assert(lesson.choices[lesson.correct]);assert.equal(lesson.choices.length,3);assert(lesson.followups.length>=3);assert(lesson.vocab.length>=2);
  assert(lesson.grammar.rule && lesson.grammar.example && lesson.culture.insight && lesson.culture.action);
}
assert.equal(curriculum.lessons.filter(l=>l.language==='en').length,10);
assert.equal(curriculum.lessons.filter(l=>l.language==='ja').length,10);
console.log('Curriculum checked: 20 complete, unique scenarios.');
