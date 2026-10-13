import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../frontend/',import.meta.url));
const allowed=new Set(['index.html','styles.css','app.js','practice.js','curriculum.json']);
const mime={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',json:'application/json; charset=utf-8'};
const port=Number(process.env.PORT||8000);
createServer(async(req,res)=>{
  const url=new URL(req.url,'http://localhost');const name=url.pathname==='/'?'index.html':url.pathname.slice(1);
  if(!allowed.has(name)){res.writeHead(404);res.end('Not found');return;}
  try{const data=await readFile(root+name);res.writeHead(200,{'Content-Type':mime[name.split('.').pop()],'Cache-Control':'no-store','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; media-src 'self' blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"});res.end(data);}catch{res.writeHead(500);res.end('Unable to serve file');}
}).listen(port,'127.0.0.1',()=>console.log(`Local: http://localhost:${port}`));
