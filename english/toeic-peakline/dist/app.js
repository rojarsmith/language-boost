const stageInfo = [
  {key:'a', title:'基礎起步', range:'10–250', aim:'聽出時間、地點與人物，讀懂一行職場訊息。', tip:'先圈出疑問詞。Where 問地點，When 問時間，Who 問人物。', example:'Where is the meeting? — In Room Two.（會議在哪裡？在二號會議室。）', read:'先找主詞，再找動作。單數主詞搭配現在簡單式時，動詞通常加 s。', phrase:'The store opens at ten.（商店十點開門。）'},
  {key:'b', title:'核心養成', range:'250–550', aim:'掌握常見詞性、請求句與通知中的關鍵細節。', tip:'聽到變更通知時，分別記下原安排與新安排。now、instead 常引出新資訊。', example:'We planned to meet at three. Let’s meet at four instead.（原訂三點，改為四點。）', read:'從空格前後判斷詞性。形容詞後常接名詞，修飾動作時常用副詞。', phrase:'Please provide accurate information.（請提供正確資訊。）'},
  {key:'c', title:'進階突破', range:'550–785', aim:'辨認同義改寫，整合條件句與兩份文件。', tip:'把原因與結果各用一句話重述，再找語意相同的選項。', example:'The road is blocked, so we’ll go around.（道路封閉，因此得繞道。）go around 和 take a detour 語意相近。', read:'遇到兩份資料，先從第一份列出規則，再用第二份的金額、日期或對象逐項核對。', phrase:'Meals are covered; taxis are excluded.（餐費可核銷，計程車費除外。）'},
  {key:'e', title:'滿分衝刺', range:'785–990', aim:'在接近考場的節奏下，核對例外條款、期限與說話者意圖。', tip:'留意保留語氣。expects、might 表示仍有變數；until 後面的事件是改變做法的條件。', example:'Keep the old price until the deal is signed.（簽約前請維持原價。）', read:'遇到 provided、unless、except，用自己的話列出全部必要條件，再排除只符合其中一項的選項。', phrase:'The offer is valid provided payment is made today.（優惠以今天付款為條件。）'}
];
const icons = {
  mountain:'<path d="m2 19 7.5-13 5.3 9.1L18 10l5 9H2Z"/><path d="m7.1 10.3 2.3 1.8 2-1.8"/>',
  dashboard:'<rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/>',
  route:'<path d="m3 5 6-2 6 3 6-2v15l-6 2-6-3-6 2V5Z"/><path d="M9 3v15m6-12v15"/>',
  bookmark:'<path d="M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4-6 4Z"/>',
  flag:'<path d="M5 21V3m0 1c5-4 9 4 15 0v10c-6 4-10-4-15 0"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v5m10-5v5M3 11h18"/>',
  play:'<path d="m8 4 12 8-12 8Z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  fire:'<path d="M13 2c1 5 7 7 6.5 13.1a7.5 7.5 0 0 1-15-.5c0-3.1 1.8-5.9 4-7.8 0 2.4.7 3.4 1.6 4.3C12 8.6 13 6 13 2Z"/>',
  chart:'<path d="M4 20h17M7 16v-4m5 4V8m5 8V4"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
  headphones:'<path d="M4 14v-3a8 8 0 1 1 16 0v3"/><rect x="3" y="12" width="4.5" height="8" rx="2"/><rect x="16.5" y="12" width="4.5" height="8" rx="2"/>',
  book:'<path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v15"/>',
  check:'<path d="m4 12 5 5L20 6"/>', chevron:'<path d="m9 5 7 7-7 7"/>', close:'<path d="m6 6 12 12M18 6 6 18"/>'
};
function icon(name){return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icons[name]+'</svg>'}
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
const byId=new Map(questions.map(q=>[q.id,q]));
const main=document.querySelector('#main'), dialog=document.querySelector('#quiz');
const key='peakline-toeic-v1';
const defaults=()=>({stage:0, history:[], review:{}, drafts:{}});
function readState(){
  try {
    const s=JSON.parse(localStorage.getItem(key));
    if(s && stageInfo[s.stage] && Array.isArray(s.history) && s.review && s.drafts) return s;
  } catch {}
  return defaults();
}
let state=readState(), active='', screen='home';
const save=()=>{try{localStorage.setItem(key,JSON.stringify(state))}catch{document.querySelector('#storage-note').hidden=false;document.querySelector('#storage-note').textContent='此瀏覽器無法保存進度。這次練習仍可繼續。'}};
function day(offset=0){const d=new Date();d.setDate(d.getDate()+offset);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function answers(){return state.history.flatMap(h=>h.responses)}
function diagnosed(){return state.history.some(h=>h.type==='diagnosis')}
function items(stage,mode){return questions.filter(q=>q.id.startsWith(stageInfo[stage].key)&&(!mode||q.mode===mode))}
function mastery(stage){const last=new Map(answers().map(r=>[r.id,r.correct]));return items(stage).filter(q=>last.get(q.id)).length}
function reviewIds(){return Object.keys(state.review).filter(id=>byId.has(id)).sort((a,b)=>state.review[a].due.localeCompare(state.review[b].due))}
function dateLabel(){return new Intl.DateTimeFormat('zh-TW',{month:'long',day:'numeric',weekday:'long'}).format(new Date())}
function accuracy(rs){return rs.length?Math.round(100*rs.filter(r=>r.correct).length/rs.length)+'%':'—'}
function streak(){const days=new Set(state.history.map(h=>h.day));let offset=days.has(day())?0:-1,count=0;while(days.has(day(offset--)))count++;return count}
const trainingNames={diagnosis:'起點診斷',L:'聽力訓練',R:'閱讀訓練',review:'錯題複習',mix:'聽讀綜合練習'};
function btn(label,act,cls='action'){return '<button class="'+cls+'" data-act="'+act+'">'+label+'</button>'}
function heading(title){return '<div class="section-top"><h1>'+title+'</h1><span class="date">'+icon('calendar')+dateLabel()+'</span></div>'}
function taskRow(type,title,meta,symbol,color,done){
  return '<button class="row" data-act="start-'+type+'"><span class="row-icon '+color+'">'+icon(symbol)+'</span><span><span class="row-head">'+title+'</span><span class="meta">'+meta+'</span></span><span class="go">'+icon(done?'check':'chevron')+'</span></button>';
}
function recommended(){
  if(!diagnosed())return 'diagnosis';
  if(reviewIds().some(id=>state.review[id].due<=day()))return 'review';
  const stats=items(state.stage).map(q=>({q,r:answers().filter(r=>r.id===q.id).at(-1)}));
  const mastered=mode=>stats.filter(({q,r})=>q.mode===mode&&r?.correct).length;
  if(mastered('L')===4&&mastered('R')===4)return state.stage<3?'advance':'route';
  if(mastered('L')===mastered('R')){
    const diag=state.history.filter(h=>h.type==='diagnosis').at(-1);
    const score=m=>diag.responses.filter(r=>byId.get(r.id).mode===m&&r.correct).length;
    return score('R')<score('L')?'R':'L';
  }
  return mastered('L')<mastered('R')?'L':'R';
}
function week(){
  return '<section class="panel week-panel"><div class="card-title"><h2>近七天練習</h2><span class="meta">已完成的題數</span></div><div class="week">'+Array.from({length:7},(_,i)=>{
    const when=day(i-6),n=state.history.filter(h=>h.day===when).reduce((s,h)=>s+h.responses.length,0);
    return '<div class="weekday '+(i===6?'today':'')+'">'+(i===6?'今天':when.slice(5).replace('-','/'))+'<b>'+n+' 題</b></div>';
  }).join('')+'</div></section>';
}
function home(){
  const stage=stageInfo[state.stage],hist=state.history.filter(h=>h.day===day()),done=t=>hist.some(h=>h.type===t&&(t!=='L'&&t!=='R'||h.stage===state.stage));
  const first=(!diagnosed()||done('diagnosis'))?'diagnosis':reviewIds().length||done('review')?'review':'mix';
  const next=recommended(),cta=next==='advance'?'前往下一階段':next==='route'?'查看衝刺路線':(state.drafts[next]?'繼續':'開始')+trainingNames[next];
  const act=next==='advance'||next==='route'?'route':'start-'+next;
  return heading('學習總覽')+'<section class="hero"><div class="hero-content"><span class="tag">'+icon('flag')+' TOEIC LISTENING &amp; READING</span><h2 lang="en">Road to <em>990</em></h2><p>從 10 分起步，走出你的多益滿分路線。</p>'+btn(icon('play')+cta,act)+'</div></section>'+
  '<section class="stats" aria-label="個人學習統計">'+[
    ['flag','mint','990','分','多益目標'],['fire','peach',streak(),'天','連續練習'],['chart','blue',answers().length,'題','累計完成']
  ].map(([ic,c,n,u,l])=>'<div class="stat"><span class="stat-icon '+c+'">'+icon(ic)+'</span><div><strong>'+n+'<small>'+u+'</small></strong><p>'+l+'</p></div></div>').join('')+'</section>'+
  '<div class="grid"><section class="panel"><div class="card-title"><h2>今日訓練</h2><span class="count">'+[first,'L','R'].filter(done).length+' / 3 完成</span></div>'+
  taskRow(first,trainingNames[first],first==='diagnosis'?'聽讀定位 · 6 題':first==='review'?'重新練習錯題 · 最多 6 題':'聽力與閱讀 · 4 題','compass','peach',done(first))+
  taskRow('L','聽力訓練',stage.title+' · 4 題','headphones','mint',done('L'))+
  taskRow('R','閱讀訓練',stage.title+' · 4 題','book','blue',done('R'))+'</section>'+
  '<section class="panel"><div class="card-title"><h2>登峰路線</h2><a class="text-btn" href="#route">查看路線</a></div><ol class="route-mini">'+
  stageInfo.map((s,i)=>'<li class="'+(i===state.stage?'current':'')+'"><span class="node"></span><strong>'+s.title+(i===state.stage?' · 目前':'')+'</strong><span>'+s.range+' 分</span></li>').join('')+'</ol></section></div>'+week();
}
function scoreLog(){
  const records=[...(state.scores||[])].sort((a,b)=>b.date.localeCompare(a.date));
  const latest=records[0];
  const summary=latest?'最近一次為 '+(latest.l+latest.r)+' 分，距離 990 分還有 '+(990-latest.l-latest.r)+' 分。':'完成完整模考或收到正式成績後，在這裡記下聽力與閱讀分數。';
  const field=(name,label)=>'<label>'+label+'<input name="'+name+'" type="number" min="5" max="495" step="5" placeholder="5–495" required></label>';
  return '<section class="panel resource"><h2>我的成績紀錄</h2><p class="sub">'+summary+'</p><form id="score-form"><div class="score-fields"><label>測驗日期<input name="date" type="date" max="'+day()+'" value="'+day()+'" required></label><label>成績來源<select name="kind"><option value="mock">完整模考</option><option value="official">正式測驗</option></select></label>'+field('l','聽力分數')+field('r','閱讀分數')+'</div><div class="result-buttons"><button class="action">儲存成績</button><span class="meta">同日期、同來源可重新輸入修正。</span></div></form>'+
    (records.length?'<ul class="score-list">'+records.map(r=>'<li><span>'+r.date+' · '+(r.kind==='mock'?'完整模考':'正式測驗')+'</span><span>聽 '+r.l+' ／ 讀 '+r.r+'　<strong>'+(r.l+r.r)+' 分</strong></span></li>').join('')+'</ul>':'')+'</section>';
}
function route(){
  return heading('學習路線')+'<p class="sub">分數區間是備考目標。每站練習 4 題聽力與 4 題閱讀，全數答對後可前進下一站。</p><div class="stage-grid">'+stageInfo.map((s,i)=>{
    const n=mastery(i),curr=i===state.stage;
    return '<section class="panel stage"><span class="tile-icon '+(curr?'peach':'mint')+'">'+icon(i===3?'flag':'mountain')+'</span><span class="tag">'+s.range+' 分目標'+(curr?' · 目前階段':'')+'</span><h2>'+s.title+'</h2><p>'+s.aim+'</p><p class="meta">最近一次答對 '+n+' / 8 題</p>'+btn(curr?'練習目前階段':'選擇此階段','stage-'+i,curr?'action':'action light')+'</section>';
  }).join('')+'</div><section class="panel resource"><h2>用完整測驗檢查進度</h2><p class="sub">聽力 100 題約 45 分鐘，閱讀 100 題 75 分鐘。完成一個階段後，用未做過的完整模考檢查速度，再把失分題型帶回練習。本站小題組使用合成語音與中文解析，只記錄答對率。</p><a href="https://www.toeic.com.tw/sample-test/toeic-listening-reading/sample01.html" target="_blank" rel="noopener">練習官方題型範例（含照片描述）</a></section>'+scoreLog();
}
function reviewPage(){
  const ids=reviewIds(),due=ids.filter(id=>state.review[id].due<=day());
  if(!ids.length)return heading('錯題本')+'<section class="panel empty"><span class="tile-icon mint">'+icon('bookmark')+'</span><h2>目前沒有待複習的錯題</h2><p class="muted">完成一組練習後，答錯的題目會出現在這裡。</p>'+btn('開始'+trainingNames[diagnosed()?'mix':'diagnosis'],'start-'+(diagnosed()?'mix':'diagnosis'))+'</section>';
  return heading('錯題本')+'<section class="panel review-list"><div class="card-title"><div><h2>'+ids.length+' 題待複習</h2><p class="meta">今天到期 '+due.length+' 題，每組最多 6 題。</p></div>'+btn(due.length?'複習到期題目':'提前練習','start-review')+'</div>'+ids.map(id=>{const q=byId.get(id),r=state.review[id];return '<div class="row"><span class="row-icon '+(q.mode==='L'?'mint':'blue')+'">'+icon(q.mode==='L'?'headphones':'book')+'</span><div><span class="row-head">'+q.skill+'</span><span class="meta">Part '+q.part+' · '+(r.due<=day()?'已到期':r.due+' 複習')+'</span></div></div>'}).join('')+'</section>';
}
function render(){
  screen=location.hash.slice(1);if(!['home','route','review','mock'].includes(screen))screen='home';
  document.querySelectorAll('nav a').forEach(a=>{if(a.dataset.page===screen)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  const pages={home,route,review:reviewPage,mock:timedMock.page};
  main.innerHTML=pages[screen]();
}
function go(routeName){if(location.hash==='#'+routeName)render();else location.hash=routeName}
window.addEventListener('hashchange',()=>{render();window.scrollTo(0,0);main.focus({preventScroll:true})});
function idsFor(type){
  if(type==='diagnosis')return questions.filter(q=>q.id.startsWith('d')).map(q=>q.id);
  if(type==='review'){
    const all=reviewIds(),due=all.filter(id=>state.review[id].due<=day());return (due.length?due:all).slice(0,6);
  }
  if(type==='mix'){
    const times=new Map();for(const r of answers())times.set(r.id,(times.get(r.id)||0)+1);
    return ['L','R'].flatMap(m=>items(state.stage,m).sort((a,b)=>(times.get(a.id)||0)-(times.get(b.id)||0)).slice(0,2).map(q=>q.id));
  }
  return items(state.stage,type).map(q=>q.id);
}
function modal(html){
  dialog.innerHTML=html;
  if(!dialog.open)dialog.showModal();else{dialog.scrollTop=0;dialog.querySelector('#quiz-title')?.focus()}
}
function quizHeading(title,tag){return '<div class="quiz-top"><span class="quiz-tag">'+tag+'</span>'+btn(icon('close')+'<span hidden>關閉</span>','close','dismiss').replace('data-act="close"','aria-label="關閉" data-act="close"')+'</div><h2 id="quiz-title" tabindex="-1" class="quiz-prompt">'+title+'</h2>'}
function start(type){
  if(!Object.hasOwn(trainingNames,type))return;
  const ids=idsFor(type);
  if(!ids.length){go('review');return}
  active=type;
  const draft=state.drafts[type];
  if(!draft||(type!=='diagnosis'&&type!=='review'&&draft.stage!==state.stage)){
    state.drafts[type]={stage:state.stage,ids,responses:[],index:0,intro:type==='L'||type==='R'};save();
  }
  const s=state.drafts[type];
  if(s.intro){
    const st=stageInfo[s.stage],listen=type==='L';
    modal(quizHeading(st.title+' · '+trainingNames[type],'練習前導讀')+'<p class="sub">'+(listen?st.tip:st.read)+'</p><div class="lesson"><b>先看一個例子</b>'+(listen?st.example:st.phrase)+'</div><div class="result-buttons">'+btn('開始 4 題練習','begin')+'</div>');return;
  }
  showQuestion();
}
function showQuestion(){
  const s=state.drafts[active],q=byId.get(s.ids[s.index]),r=s.responses[s.index],listen=q.mode==='L';
  const passage=q.material.replaceAll('||','\n');
  const context=listen?'<audio class="audio" controls preload="metadata" aria-label="英文題目錄音" src="audio/'+q.id+'.mp3"></audio>':passage?'<div class="passage" lang="en">'+passage+'</div>':'';
  modal(quizHeading(trainingNames[active],(s.index+1)+' / '+s.ids.length+' 題 · '+(listen?'聽力':'閱讀')+' Part '+q.part)+'<progress class="progress" aria-label="本組進度" value="'+s.index+'" max="'+s.ids.length+'"></progress>'+context+
  '<h3 class="quiz-prompt">'+q.prompt+'</h3><div class="answer-grid">'+q.choices.map((c,i)=>'<button class="choice '+(r?(i===q.right?'correct':i===r.choice?'wrong':''):'')+'" data-act="answer-'+i+'" '+(r?'disabled':'')+'><span class="letter">'+String.fromCharCode(65+i)+'</span><span lang="en">'+c+'</span></button>').join('')+'</div>'+
  (r?'<div class="feedback"><b>'+(r.correct?'答對了':'正解是 '+String.fromCharCode(65+q.right))+' · '+q.skill+'</b><p>'+q.why+'</p>'+(listen?'<details><summary>查看聽力原文</summary><p class="passage" lang="en">'+passage+'</p></details>':'')+btn(s.index===s.ids.length-1?'查看練習結果':'下一題','next')+'</div>':''));
  if(r)dialog.querySelector('.feedback .action').focus({preventScroll:true});
}
function record(s){
  const type=active;
  for(const r of s.responses){
    if(!r.correct)state.review[r.id]={due:day(1),step:0};
    else if(type==='review'&&state.review[r.id]?.due<=day()){
      if(state.review[r.id].step===1)delete state.review[r.id];
      else state.review[r.id]={due:day(3),step:1};
    }
  }
  const entry={day:day(),type,stage:s.stage,responses:s.responses};
  if(type==='diagnosis'&&!diagnosed()){
    const passedPair=(a,b)=>s.responses.find(r=>r.id===a)?.correct&&s.responses.find(r=>r.id===b)?.correct;
    state.stage=passedPair('d1','d2')?(passedPair('d3','d4')?(passedPair('d5','d6')?3:2):1):0;
  }
  state.history.push(entry);delete state.drafts[type];save();render();
  const num=s.responses.filter(r=>r.correct).length;
  const summary=['L','R'].map(m=>{const group=s.responses.filter(r=>byId.get(r.id).mode===m);return group.length?(m==='L'?'聽力':'閱讀')+' '+accuracy(group):''}).filter(Boolean).join('　／　');
  const next=recommended(),label=trainingNames[next];
  const advice=type==='diagnosis'?'建議從「'+stageInfo[state.stage].title+'」開始。你可以在學習路線中調整起點。':next==='advance'?'本階段八題皆已答對，可以選擇下一階段。':next==='route'?'本階段已完成，接著用未見過的完整模考檢查時間分配。':'下一組建議練習「'+label+'」。';
  modal(quizHeading('練習結果',trainingNames[type])+'<div class="result-number">'+num+' <small>/ '+s.ids.length+' 題答對</small></div><p class="meta">'+summary+'</p><div class="lesson">'+advice+(num<s.ids.length?' 答錯的題目已排入明天的錯題複習。':'')+'</div><div class="result-buttons">'+btn(label?'開始'+label:'查看學習路線',label?'start-'+next:'route')+btn('回到總覽','home','action light')+'</div>');
}
document.addEventListener('click',e=>{
  const button=e.target.closest('[data-act]');if(!button)return;
  const a=button.dataset.act;
  if(a==='close'){dialog.close();return}
  if(a==='home'||a==='route'){if(dialog.open)dialog.close();go(a);return}
  if(a.startsWith('stage-')){state.stage=Number(a.slice(6));save();render();const next=recommended();start(next==='R'?'R':'L');return}
  if(a.startsWith('start-')){start(a.slice(6));return}
  const s=state.drafts[active];if(!s)return;
  if(a==='begin'){s.intro=false;save();showQuestion();return}
  if(a.startsWith('answer-')&&!s.responses[s.index]){
    const id=s.ids[s.index],choice=Number(a.slice(7));
    s.responses.push({id,choice,correct:choice===byId.get(id).right});save();showQuestion();return;
  }
  if(a==='next'&&s.responses[s.index]){
    if(s.index===s.ids.length-1)record(s);else{s.index++;save();showQuestion()}
  }
});
dialog.addEventListener('close',()=>{dialog.querySelectorAll('audio').forEach(a=>a.pause());render()});
document.addEventListener('submit',e=>{
  if(e.target.id!=='score-form')return;
  e.preventDefault();
  const values=new FormData(e.target);
  const date=values.get('date'),kind=values.get('kind'),l=Number(values.get('l')),r=Number(values.get('r'));
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||date>day()||!['mock','official'].includes(kind)||![l,r].every(n=>n>=5&&n<=495&&n%5===0))return;
  state.scores=[{date,kind,l,r},...(state.scores||[]).filter(s=>s.date!==date||s.kind!==kind)];
  save();render();main.querySelector('.score-list').setAttribute('tabindex','-1');main.querySelector('.score-list').focus();
});
render();
