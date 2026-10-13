import {cp, mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
await import('./check.mjs');
const root=fileURLToPath(new URL('../',import.meta.url));
await mkdir(`${root}/dist`,{recursive:true});
for(const name of ['index.html','styles.css','app.js','practice.js','curriculum.json']){
  await cp(`${root}/frontend/${name}`,`${root}/dist/${name}`);
}
console.log('Built: dist/ — static frontend, no backend or secrets.');
