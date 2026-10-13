import {state, $, escape, toast, persistGuest, render, bottlenecks} from './app.js';

const steps=['先聽懂','留意用法','換成自己','回應追問','陌生情境','反思與重用'];
let session=null;
let stream=null;
let recorder=null;
let recognition=null;
let audioUrl=null;
let activeTimer=null;
let recordingStep=null;
let speaking=false;
const dialog=document.querySelector('#practice');

export function stopMedia(){
  if('speechSynthesis' in window)window.speechSynthesis.cancel();
  speaking=false;
  recognition?.abort();recognition=null;
  if(recorder && recorder.state!=='inactive')recorder.stop();
  stream?.getTracks().forEach(track=>track.stop());stream=null;
  clearInterval(activeTimer);activeTimer=null;
  if(audioUrl){URL.revokeObjectURL(audioUrl);audioUrl=null;}
}
function closePractice(){stopMedia();session=null;dialog.close();render();}
dialog.addEventListener('cancel',e=>{e.preventDefault();requestClose();});

function requestClose(){
  stash();
  if(session && !session.saved && (session.transcript||session.followup||session.transfer) && !confirm('這次回答尚未儲存。確定離開練習？'))return;
  closePractice();
}

export function openPractice(lesson){
  if(!lesson)return;
  stopMedia();
  const previous=state.attempts.filter(a=>a.lesson_id===lesson.id).length;
  session={lesson,step:0,seconds:0,quiz:null,checked:false,listened:false,showScript:false,transcript:'',followup:'',transfer:'',confidence:3,bottleneck:'retrieval',questionIndex:previous%lesson.followups.length,challengePlayed:false,challengeVisible:false,recorded:false,saved:false,id:crypto.randomUUID()};
  draw();dialog.showModal();
  let last=Date.now();
  activeTimer=setInterval(()=>{const now=Date.now();if(session && !session.saved && !document.hidden && dialog.open)session.seconds+=Math.min((now-last)/1000,2);last=now;},1000);
}
function help(){return state.prefs.support?`<div class="support"><strong>繁中支架 · 熟悉後可到設定關閉</strong>${escape(session.lesson.chinese)}</div>`:'';}
function target(text, className='script'){return `<div lang="${session.lesson.language}" class="${className}">${escape(text)}</div>`;}
function answerField(key,label){return `<label class="form-field"><span>${label}</span><textarea id="${key}" maxlength="3000" placeholder="說出聲後記下重點，或輸入你剛才說的內容…">${escape(session[key])}</textarea></label>${recordControls()}`;}
function recordControls(){return `<div class="record-controls"><button class="secondary" id="record">● 錄音回聽</button><button class="secondary" id="stop-record" disabled>■ 停止</button><button class="secondary" id="recognize">語音轉文字</button></div><label class="check-field"><input id="speech-consent" type="checkbox"> 允許瀏覽器語音辨識；音訊可能送到瀏覽器供應商的外部服務。</label><audio id="playback" controls ${audioUrl?'':'hidden'} ${audioUrl?`src="${escape(audioUrl)}"`:''}></audio><p class="muted" id="record-note">錄音只在本次練習回聽，不會上傳。轉文字需支援的瀏覽器，辨識結果可手動修正。</p>`;}
function listen(){const l=session.lesson;return `<span class="eyebrow">01 / LISTEN FOR MEANING</span><h3>先用耳朵抓住意思。</h3><p>先聽完整情境，抓人物、需求與重點。初階短句可幫助理解；聽力題依完整情境作答。</p><div class="audio-card"><div class="audio-controls"><button class="primary" id="listen-full">▶ 聽完整情境</button><button class="secondary" id="listen-short">▶ 初階短句</button><button class="secondary" id="stop-speech">停止播放</button></div><small>瀏覽器合成語音 · ${state.prefs.rate} 倍 · 聲音依装置而異。不是真人聽力測驗。</small></div><button class="text" id="toggle-script">${session.showScript?'收起文字稿':'需要支援？顯示文字稿'} ↗</button>${session.showScript?target(l.scene):''}<h4 lang="${l.language}">${escape(l.question)}</h4><fieldset class="quiz"><legend class="sr-only">聽力理解題</legend>${l.choices.map((c,i)=>`<label lang="${l.language}"><input type="radio" name="quiz" value="${i}" ${session.quiz===i?'checked':''}>${escape(c)}</label>`).join('')}</fieldset><button class="secondary" id="check-quiz">確認理解</button><div id="quiz-feedback" class="note" ${session.checked?'':'hidden'}>${session.quiz===l.correct?'這一題答對了。試著用自己的話說明原因。':'這一題尚未答對，請重聽並核對文字。'}</div>${help()}`;}
function notice(){const l=session.lesson;return `<span class="eyebrow">02 / NOTICE IN CONTEXT</span><h3>不是背這個字，是會用這一段。</h3><p>先理解目標語言的解釋，讀出例句，再換成自己的工作。一次只抓兩個片語。</p>${l.vocab.map(v=>`<div class="word" lang="${l.language}"><strong>${escape(v.term)}</strong><p>${escape(v.definition)}</p><div class="example">${escape(v.example)}</div></div>`).join('')}<div class="sub-card" lang="${l.language}"><h4>GRAMMAR IN USE</h4><p>${escape(l.grammar.rule)}</p><div class="example">${escape(l.grammar.example)}</div></div><div class="sub-card" lang="${l.language}"><h4>THE OTHER PERSON'S PERSPECTIVE</h4><p>${escape(l.culture.insight)}</p><p><strong>Try:</strong> ${escape(l.culture.action)}</p></div>${help()}`;}
function speak(){const l=session.lesson;return `<span class="eyebrow">03 / MAKE IT YOURS</span><h3>從模仿，走到自己的內容。</h3><p>先跟讀一次，再用真實經歷換掉範例。最後只留幾個關鍵字，說出声、錄下來聽。</p><div class="audio-controls"><button class="primary" id="model-speech">▶ 跟讀示範</button><button class="secondary" id="stop-speech">停止播放</button></div>${target(state.prefs.level==='starter'?l.simple:l.sample)}${state.prefs.level==='starter'?`<details><summary>需要更多句型？</summary>${target(l.sample)}</details>`:''}${answerField('transcript','你自己的版本（文字／逐字稿，可修正辨識錯誤）')}${help()}`;}
function followup(){const l=session.lesson;return `<span class="eyebrow">04 / KEEP THE CONVERSATION GOING</span><h3>對方不一定照你的稿問。</h3><p>這是預先設計的情境追問，沒有 AI 評分。回答後用下方檢查提示調整，再換一題。</p>${target(l.followups[session.questionIndex])}<div class="audio-controls"><button class="primary" id="question-speech">▶ 聽追問</button><button class="secondary" id="next-question">換個問法 ↺</button></div>${answerField('followup','你的追問回答')}<details><summary>回答後，用這段提示自己檢查</summary>${target(l.feedback,'followup-answer')}</details>${help()}`;}
function transfer(){const l=session.lesson;return `<span class="eyebrow">05 / TRANSFER TO A NEW SITUATION</span><h3>換一個情境，還能說嗎？</h3><p>先聽新任務，再不看範本回應。需要時可以澄清；如果你只是背出舊稿，回到前一環節。</p><div class="audio-card"><div class="audio-controls"><button class="primary" id="challenge-speech">▶ 聽新任務</button><button class="secondary" id="challenge-toggle">${session.challengeVisible?'收起文字':'顯示文字提示'}</button></div><small>這是遷移練習，不是能力認證。點「顯示文字提示」就改為有支援的練習。</small></div>${session.challengeVisible?target(l.transfer):''}${answerField('transfer','你的新情境回答（儲存前必填）')}<div class="notice">請用與範例不同的真實內容；聽不清楚時，先練本語言的澄清句，再重新回應。</div>`;}
function reflect(){return `<span class="eyebrow">06 / REFLECT & RETURN</span><h3>把下一次，安排得更有效。</h3><p>回聽自己的錄音：有答到問題嗎？能換個說法嗎？這是你的觀察，系统不會替你判定流利或發音正確。</p><span class="form-field">這次能完成任務嗎？（自評）</span><div class="rating">${['1 · 還無法','2 · 需要很多提示','3 · 有提示能說','4 · 可獨立回應','5 · 也能接受追問'].map((v,i)=>`<button data-rating="${i+1}" class="${session.confidence===i+1?'active':''}">${v}</button>`).join('')}</div><label class="form-field"><span>這次最卡的地方</span><select id="bottleneck">${Object.entries(bottlenecks).map(([k,v])=>`<option value="${k}" ${session.bottleneck===k?'selected':''}>${v}</option>`).join('')}</select></label><div class="note">儲存後安排下一次重用。聽力答錯或自評不足時，隔天重練；後續可依表現延長。資料只保存在這個瀏覽器，可到設定匯出。</div><div class="error" id="save-error" role="alert"></div><button class="primary" id="save-attempt">完成並儲存練習 ↗</button>`;}
function draw(){
  const l=session.lesson;
  const content=[listen,notice,speak,followup,transfer,reflect][session.step]();
  dialog.innerHTML=`<div class="practice-top"><div><span class="eyebrow">CONTEXT SESSION · ${l.language==='en'?'ENGLISH':'日本語'}</span><h2 id="practice-title">${escape(l.title)}</h2><p>${escape(l.goal)}</p></div><button class="dialog-close" id="close-practice" aria-label="關閉練習（未儲存的內容將離開）">×</button></div><div class="practice-layout"><nav class="practice-nav" aria-label="練習環節">${steps.map((v,i)=>`<button data-step="${i}" class="${session.step===i?'active':''}" ${session.step===i?'aria-current="step"':''}><span>${i+1}</span>${v}</button>`).join('')}<div class="note">可以回到前一步。<br>先求清楚，再求順暢。</div></nav><section class="practice-content">${content}${session.step<5?`<div class="practice-bottom"><small>POC · ${session.step+1}/6 · 自己試用，不趕進度</small><button class="primary" id="next-step">下一步 →</button></div>`:''}</section></div>`;
  bind();
}
function stash(){if(!session)return;for(const key of ['transcript','followup','transfer']){const el=$('#'+key,dialog);if(el)session[key]=el.value;}const b=$('#bottleneck',dialog);if(b)session.bottleneck=b.value;}
function go(step){
  if(recorder?.state==='recording' || recognition){toast('請先停止錄音或辨識，再切換環節。');return;}
  stash();window.speechSynthesis?.cancel();session.step=step;draw();$('.practice-content',dialog).scrollIntoView({block:'nearest'});
}
async function say(text){
  if(!('speechSynthesis' in window)){toast('此瀏覽器不支援合成語音。請使用文字稿或外部真人音訊。');return false;}
  window.speechSynthesis.cancel();
  let voices=window.speechSynthesis.getVoices();
  if(!voices.length){await new Promise(resolve=>{const done=()=>{window.speechSynthesis.removeEventListener('voiceschanged',done);resolve();};window.speechSynthesis.addEventListener('voiceschanged',done,{once:true});setTimeout(done,1200);});voices=window.speechSynthesis.getVoices();}
  if(!session)return false;
  const lang=session.lesson.language;
  const voice=voices.find(v=>v.lang.toLowerCase().startsWith(lang));
  if(!voice){toast(`裝置尚無${lang==='en'?'英語':'日語'}聲音。請安裝對應語音或先使用文字提示。`);return false;}
  const utterance=new SpeechSynthesisUtterance(text);utterance.lang=lang==='en'?'en-US':'ja-JP';utterance.voice=voice;utterance.rate=state.prefs.rate;
  utterance.onerror=e=>{speaking=false;if(e.error!=='interrupted'&&e.error!=='canceled')toast('語音播放失敗，請重試或使用文字提示。');};
  utterance.onend=()=>{speaking=false;};speaking=true;window.speechSynthesis.speak(utterance);return true;
}
function mediaReady(){if(!window.isSecureContext){toast('麥克風需要 HTTPS 或 localhost。Vercel 會提供 HTTPS。');return false;}return true;}
async function startRecording(){
  if(!mediaReady())return;
  if(!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder){toast('此瀏覽器不支援錄音。請改用自己的錄音工具，再輸入回答。');return;}
  if(recognition || recorder?.state==='recording')return;
  const originalSession=session;
  const button=$('#record',dialog);button.disabled=true;
  try{
    const newStream=await navigator.mediaDevices.getUserMedia({audio:true});
    if(session!==originalSession || !dialog.open){newStream.getTracks().forEach(t=>t.stop());return;}
    stream=newStream;recordingStep=session.step;
    recorder=new MediaRecorder(stream);const chunks=[];
    recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
    recorder.onstop=()=>{
      stream?.getTracks().forEach(track=>track.stop());stream=null;
      if(session!==originalSession || !dialog.open)return;
      if(audioUrl)URL.revokeObjectURL(audioUrl);
      audioUrl=URL.createObjectURL(new Blob(chunks,{type:recorder.mimeType||'audio/webm'}));
      session.recorded=true;const audio=$('#playback',dialog);if(audio){audio.src=audioUrl;audio.hidden=false;}
      $('#record',dialog).disabled=false;$('#stop-record',dialog).disabled=true;$('#recognize',dialog).disabled=false;
      $('#record-note',dialog).textContent='錄音已完成。請回聽是否回答到問題；這份音訊只保留到關閉本次練習。';
    };
    recorder.start();$('#stop-record',dialog).disabled=false;$('#recognize',dialog).disabled=true;
    $('#record-note',dialog).textContent='正在錄音…請說完後按停止，再回聽。';
  }catch(error){button.disabled=false;toast(error.name==='NotAllowedError'?'麥克風權限未開啟。可在瀏覽器設定允許，或輸入回答。':'無法啟動麥克風，請檢查設備或改用文字回答。');}
}
function startRecognition(){
  if(!mediaReady())return;
  if(!$('#speech-consent',dialog).checked){toast('啟用辨識前，請先勾選外部語音服務的說明。');return;}
  const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!Speech){toast('此瀏覽器不支援語音辨識。仍可錄音回聽或輸入文字。');return;}
  if(recorder?.state==='recording'||recognition)return;
  const key={2:'transcript',3:'followup',4:'transfer'}[session.step];const textarea=$('#'+key,dialog);
  const originalSession=session;const base=textarea.value;
  recognition=new Speech();recognition.lang=session.lesson.language==='en'?'en-US':'ja-JP';recognition.continuous=false;recognition.interimResults=false;
  recognition.onresult=e=>{if(session!==originalSession)return;const text=Array.from(e.results).map(r=>r[0].transcript).join(' ');textarea.value=(base+(base?'\n':'')+text).slice(0,3000);session[key]=textarea.value;};
  recognition.onerror=e=>toast(e.error==='not-allowed'?'語音辨識未獲允許。請檢查麥克風權限。':'這次辨識沒有完成，可重試或輸入文字。');
  recognition.onend=()=>{recognition=null;if(session!==originalSession)return;const b=$('#recognize',dialog);if(b)b.disabled=false;const r=$('#record',dialog);if(r)r.disabled=false;const s=$('#stop-record',dialog);if(s)s.disabled=true;const n=$('#record-note',dialog);if(n)n.textContent='辨識已結束。請檢查並修正文字；逐字稿不代表發音正確。';};
  try{recognition.start();$('#recognize',dialog).disabled=true;$('#record',dialog).disabled=true;$('#stop-record',dialog).disabled=false;$('#record-note',dialog).textContent='正在辨識…停頓後會自動結束，也可按停止。';}catch{recognition=null;toast('暫時無法啟動辨識，請重試。');}
}
function save(){
  stash();
  if(!session.transfer.trim()){const error=$('#save-error',dialog);error.textContent='請先到「陌生情境」留下你的回答，再完成練習。';return;}
  const previous=state.reviews.find(r=>r.lesson_id===session.lesson.id);
  const correct=session.checked && session.quiz===session.lesson.correct;
  const readyToAdvance=previous && new Date(previous.due)<=new Date();
  const successful=correct && session.confidence>=3;
  const stage=successful && previous ? (readyToAdvance?Math.min(previous.stage+1,4):previous.stage) : 0;
  const due=successful && previous && !readyToAdvance ? previous.due : new Date(Date.now()+[1,3,7,14,30][stage]*86400000).toISOString();
  const attempt={id:session.id,lesson_id:session.lesson.id,language:session.lesson.language,created_at:new Date().toISOString(),seconds:Math.min(7200,Math.round(session.seconds)),confidence:session.confidence,bottleneck:session.bottleneck,transcript:session.transcript,followup:session.followup,transfer:session.transfer,listening_correct:correct,listening_checked:session.checked,used_script:session.showScript,used_transfer_prompt:session.challengeVisible};
  const old={attempts:state.attempts,reviews:state.reviews};
  state.attempts=[attempt,...state.attempts];state.reviews=[...state.reviews.filter(r=>r.lesson_id!==session.lesson.id),{lesson_id:session.lesson.id,stage,due}];
  try{persistGuest();}catch(error){Object.assign(state,old);$('#save-error',dialog).textContent=error.message;return;}
  session.saved=true;stopMedia();render();
  $('.practice-content',dialog).innerHTML=`<div class="save-success"><div class="success-icon">✓</div><span class="eyebrow">ONE STEP FORWARD</span><h3>練習已保存在這個瀏覽器。</h3><p>下次重用：${escape(new Date(due).toLocaleString('zh-TW',{timeZone:state.prefs.timezone}))}</p><p class="muted">保存紀錄代表你完成一次練習，並非系統認定你已熟練。</p><button class="primary" id="finish-session">回到工作室 ↗</button></div>`;
  dialog.querySelectorAll('[data-step]').forEach(b=>b.disabled=true);$('#finish-session',dialog).onclick=closePractice;
}
function bind(){
  $('#close-practice',dialog).onclick=requestClose;
  dialog.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>go(Number(b.dataset.step)));
  const next=$('#next-step',dialog);if(next)next.onclick=()=>go(session.step+1);
  const stop=$('#stop-speech',dialog);if(stop)stop.onclick=()=>window.speechSynthesis?.cancel();
  if(session.step===0){
    $('#listen-full',dialog).onclick=async()=>{session.listened=await say(session.lesson.scene);};
    $('#listen-short',dialog).onclick=()=>say(session.lesson.simple);
    $('#toggle-script',dialog).onclick=()=>{session.showScript=!session.showScript;draw();};
    dialog.querySelectorAll('[name="quiz"]').forEach(r=>r.onchange=()=>{session.quiz=Number(r.value);session.checked=false;$('#quiz-feedback',dialog).hidden=true;});
    $('#check-quiz',dialog).onclick=()=>{if(session.quiz===null){toast('先選一個你聽到的重點。');return;}session.checked=true;draw();};
  }
  if(session.step===2)$('#model-speech',dialog).onclick=()=>say(state.prefs.level==='starter'?session.lesson.simple:session.lesson.scene);
  if(session.step===3){$('#question-speech',dialog).onclick=()=>say(session.lesson.followups[session.questionIndex]);$('#next-question',dialog).onclick=()=>{if(recorder?.state==='recording'||recognition){toast('請先停止錄音或辨識。');return;}stash();session.questionIndex=(session.questionIndex+1)%session.lesson.followups.length;draw();};}
  if(session.step===4){$('#challenge-speech',dialog).onclick=async()=>{session.challengePlayed=await say(session.lesson.transfer);};$('#challenge-toggle',dialog).onclick=()=>{stash();session.challengeVisible=!session.challengeVisible;draw();};}
  if([2,3,4].includes(session.step)){
    const key={2:'transcript',3:'followup',4:'transfer'}[session.step];$('#'+key,dialog).oninput=e=>{session[key]=e.target.value;};
    $('#record',dialog).onclick=startRecording;$('#recognize',dialog).onclick=startRecognition;
    $('#stop-record',dialog).onclick=()=>{if(recorder?.state==='recording')recorder.stop();if(recognition)recognition.stop();};
  }
  if(session.step===5){dialog.querySelectorAll('[data-rating]').forEach(b=>b.onclick=()=>{stash();session.confidence=Number(b.dataset.rating);draw();});$('#save-attempt',dialog).onclick=save;}
}
