const $=q=>document.querySelector(q);
const main=$('main'), lessons=initialLessons;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const states={blacklist:"Blacklist",tools:"I'm certain I don't yet have the tools to understand",remember:"I won't forget this material"};
const labels=['No insight','Some insight','Decent insight','Good insight','Strong insight'];
const days=[1,3,7,14,30];
const state=l=>localStorage.getItem('ship.state.'+l.id)||'';
const entries=()=>Object.keys(localStorage).filter(k=>k.startsWith('fieldnotes.entry.')).flatMap(k=>{try{return [JSON.parse(localStorage[k])]}catch{return []}}).sort((a,b)=>b.at-a.at);
const title=id=>lessons.find(l=>l.id===id)?.title||id;
const duration=n=>n<60?n+' min':Math.floor(n/60)+' hr'+(n%60?' '+n%60+' min':'');
function theme(dark){document.documentElement.dataset.theme=dark?'dark':'light';$('#theme').textContent=dark?'Light mode':'Dark mode';$('#theme').setAttribute('aria-pressed',String(dark))}
theme((localStorage.getItem('ship.theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'))==='dark');
$('#theme').onclick=()=>{const dark=document.documentElement.dataset.theme!=='dark';theme(dark);localStorage.setItem('ship.theme',dark?'dark':'light')};
function card(l){
 const {alt,minutes}=voyages[l.id];
 return '<a class="card" href="#lesson/'+l.id+'"><div class="thumb"><span class="badge">Est. '+duration(minutes)+'</span><img alt="'+esc(alt)+'" src="images/'+l.id+'.jpg"></div><small>'+esc(l.topic)+'</small><h2>'+esc(l.title)+'</h2><p>'+esc(l.subtitle)+'</p></a>';
}
const grid=list=>'<div class="grid">'+list.map(card).join('')+'</div>';
// Lessons are appended in introduction order. Use the full catalog so pausing
// the first lesson in a topic cannot change when that topic was introduced.
const newestTopics = [...new Set(lessons.map(lesson => lesson.topic))].reverse();

function catalog(list) {
 const grouped = localStorage.getItem('ship.catalogSort') === 'topics';
 const sortControl = '<label class="catalog-sort">Sort by <select id="catalog-sort"><option value="default">Lesson order</option><option value="topics" '+(grouped?'selected':'')+'>Topic · newest introduced first</option></select></label>';
 if (!grouped) return sortControl + grid(list);
 const groups = newestTopics.map(topic => {
  const members = list.filter(lesson => lesson.topic === topic).reverse();
  return members.length ? '<section class="topic-group"><h2>'+esc(topic)+'</h2>'+grid(members)+'</section>' : '';
 });
 return sortControl + groups.join('');
}
const history=r=>'<p><small>'+new Date(r.at).toLocaleDateString()+' · '+esc(r.rating||'Unrated')+'</small><br>'+esc(r.note||'')+'</p>';
const minutesText=ms=>{const m=ms/60000;return m<1?Math.round(ms/1000)+' sec':m<60?m.toFixed(1)+' min':(m/3600000).toFixed(1)+' hr'};
function barChart(values,total){const width=680,left=150,bar=28,gap=20,rows=Object.entries(values).sort((a,b)=>b[1]-a[1]);const body=rows.length?rows.map(([label,value],i)=>{const y=24+i*(bar+gap),pct=total?value/total*100:0;return '<text x="'+(left-12)+'" y="'+(y+20)+'" text-anchor="end">'+esc(label)+'</text><rect x="'+left+'" y="'+y+'" width="'+(500*pct/100)+'" height="'+bar+'" rx="5"/><text x="'+(left+500*pct/100+8)+'" y="'+(y+20)+'">'+pct.toFixed(0)+'%</text>'}).join(''):'<text x="20" y="40">No saved visits yet.</text>';return '<svg class="chart" viewBox="0 0 680 '+Math.max(260,24+rows.length*48)+'" role="img" aria-label="Time spent by topic">'+body+'</svg>'}
function lineChart(values){const entries=Object.entries(values),width=760,height=300,left=58,right=20,top=22,bottom=50,max=Math.max(...entries.map(([,v])=>v),1),step=entries.length>1?(width-left-right)/(entries.length-1):0,points=entries.map(([,v],i)=>(left+i*step)+','+(top+(height-top-bottom)*(1-v/max))).join(' '),dots=entries.map(([label,v],i)=>{const x=left+i*step,y=top+(height-top-bottom)*(1-v/max);return '<circle cx="'+x+'" cy="'+y+'" r="4"/><text x="'+x+'" y="'+(height-18)+'" text-anchor="middle">'+esc(label)+'</text>'}).join('');return '<svg class="chart" viewBox="0 0 '+width+' '+height+'" role="img" aria-label="Saved time over time"><line class="axis" x1="'+left+'" y1="'+top+'" x2="'+left+'" y2="'+(height-bottom)+'"/><line class="axis" x1="'+left+'" y1="'+(height-bottom)+'" x2="'+(width-right)+'" y2="'+(height-bottom)+'"/><polyline points="'+points+'" fill="none"/> '+dots+'</svg>'}
function dataPage(log){const byTopic={},byDay={};log.forEach(r=>{const ms=Number(r.ms)||0,topic=r.topic||lessons.find(l=>l.id===r.id)?.topic||'Unknown topic',day=new Date(r.at).toISOString().slice(0,10);byTopic[topic]=(byTopic[topic]||0)+ms;byDay[day]=(byDay[day]||0)+ms});const days=Object.entries(byDay).sort((a,b)=>a[0].localeCompare(b[0])),total=Object.values(byTopic).reduce((a,b)=>a+b,0),activity=days.map(([d,ms])=>'<li><time datetime="'+d+'">'+new Date(d+'T12:00:00').toLocaleDateString(undefined,{weekday:'short',year:'numeric',month:'short',day:'numeric'})+'</time> · '+minutesText(ms)+'</li>').join('');main.innerHTML='<h1>Data</h1><p>Saved visits only. Timing is foreground time attached to an attempt.</p><section class="data-card"><h2>Topic share</h2><p>'+minutesText(total)+' across '+Object.keys(byTopic).length+' topics.</p>'+barChart(byTopic,total)+'</section><section class="data-card"><h2>Usage over time</h2><label>Group by <select id="trend-period"><option value="day">Day</option><option value="week">Week</option><option value="month">Month</option><option value="year">Year</option></select></label><div id="trend">'+lineChart(byDay)+'</div></section><section class="data-card"><h2>Active days</h2>'+(activity?'<ul class="activity-days">'+activity+'</ul>':'<p>No saved visits yet.</p>')+'</section>';const period=$('#trend-period');period.onchange=()=>{const grouped={};log.forEach(r=>{const d=new Date(r.at),key=period.value==='year'?String(d.getFullYear()):period.value==='month'?d.toISOString().slice(0,7):period.value==='week'?(()=>{const x=new Date(d);x.setDate(x.getDate()-x.getDay());return x.toISOString().slice(0,10)})():d.toISOString().slice(0,10);grouped[key]=(grouped[key]||0)+(Number(r.ms)||0)});$('#trend').innerHTML=lineChart(grouped)}}
function request(active,paused){
 const btn=$('#copy'), box=$('#request');
 box.value='Choose my next lesson for familiarity and breadth. Give it a fixed scope and estimate my completion time from the reading and activities, taking my background into account. Active lessons: '+active.map(l=>l.title).join(', ')+'. Paused pending prerequisites: '+paused.map(l=>l.id+' ('+l.title+')').join(', ')+'. If my history shows I now have the tools, explain why and give me a return code in the form resume:LESSON-ID. Otherwise leave it paused. My eligible learning history: '+JSON.stringify(entries().filter(r=>[...active,...paused].some(l=>l.id===r.id)).map(({id,at,rating,note,due})=>({id,at,rating,note,due})));
 btn.onclick=async()=>{try{await navigator.clipboard.writeText(box.value);btn.textContent='Copied'}catch{box.select();btn.textContent='Text selected — copy to continue'}};
}
let current = null;
let intervals = [];
let activeSince = null;
let saved = false;

function pauseTiming() {
 if (activeSince === null) return;
 const ms = Math.round(performance.now() - activeSince.tick);
 if (ms > 0) intervals.push({at: activeSince.at, ms});
 activeSince = null;
}

function resumeTiming() {
 if (current && !saved && !document.hidden && document.hasFocus() && activeSince === null) {
  activeSince = {at: Date.now(), tick: performance.now()};
 }
}

function discardTiming() {
 intervals = [];
 activeSince = null;
 saved = false;
}

window.addEventListener('focus', resumeTiming);
window.addEventListener('blur', pauseTiming);
document.addEventListener('visibilitychange', () => {
 if (document.hidden) pauseTiming();
 else resumeTiming();
});
window.addEventListener('pagehide', discardTiming);
window.addEventListener('pageshow', resumeTiming);
function lessonPage(l,log){
 const {minutes,activities}=voyages[l.id];
 main.innerHTML='<small>'+esc(l.topic)+'</small><h1>'+esc(l.title)+'</h1><small>Reading and activities · Est. '+duration(minutes)+'</small><p class="lead">'+esc(l.subtitle)+'</p><aside>'+esc(l.anchor)+'</aside>'+l.sections.map(([h,p])=>'<h2>'+esc(h)+'</h2><p>'+esc(p)+'</p>').join('')+'<blockquote>'+esc(l.question)+'</blockquote><h2>Explore the idea</h2><ol>'+activities.map(task=>'<li>'+esc(task)+'</li>').join('')+'</ol><h2>Connections</h2>'+l.links.filter(([id])=>!state(lessons.find(x=>x.id===id))).map(([id,h])=>'<p><a href="#lesson/'+id+'">'+esc(title(id))+'</a> · '+esc(h)+'</p>').join('')+'<h2>Log this visit</h2><form><label for="insight">Insight from this visit</label><input type="range" id="insight" min="1" max="5" step="1" value="3"><output id="value" for="insight"></output><label>What stayed with you?<textarea id="note"></textarea></label><button>Save visit</button></form><details><summary>Previous notes</summary>'+log.filter(r=>r.id===l.id).map(history).join('')+'</details><details><summary>Lesson options</summary><label>Rotation<select id="rotation"><option value="">In rotation</option>'+Object.entries(states).map(([v,s])=>'<option value="'+v+'">'+esc(s)+'</option>').join('')+'</select></label><button id="apply">Apply rotation choice</button></details>';
 const insight=$('#insight');
 function score(){const i=insight.value-1;const text=insight.value+' · '+labels[i]+' · review in '+days[i]+' day'+(days[i]===1?'':'s');$('#value').textContent=text;insight.setAttribute('aria-valuetext',text)}
 score();insight.oninput=score;
 $('#rotation').value=state(l);
 $('#apply').onclick=()=>{localStorage.setItem('ship.state.'+l.id,$('#rotation').value);location.hash='library'};
 $('form').onsubmit = event => {
  event.preventDefault();
  if (saved) return;
  pauseTiming();
  const i = insight.value - 1;
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days[i]);
  const record = {
   id: l.id, topic: l.topic, at: Date.now(),
   timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
   ms: intervals.reduce((sum, interval) => sum + interval.ms, 0),
   focusedIntervals: intervals,
   rating: labels[i], insight: i + 1, note: $('#note').value, due: +date
  };
  try {
   localStorage.setItem('fieldnotes.entry.' + crypto.randomUUID(), JSON.stringify(record));
  } catch {
   resumeTiming();
   alert('Saving failed. Your note is still in the form.');
   return;
  }
  saved = true;
  location.hash = 'desk';
 };

}
function render(){
 const [page,id]=location.hash.slice(1).split('/'),log=entries(),active=lessons.filter(l=>!state(l)),paused=lessons.filter(l=>state(l));
 discardTiming();
 current = page === 'lesson' && lessons.find(l => l.id === id);
 resumeTiming();
 if(current)lessonPage(current,log);
 else if(page==='library'){
 main.innerHTML='<h1>Lesson library</h1>'+catalog(active)+'<h2>Out of rotation</h2>'+(paused.map(l=>'<article><strong>'+esc(l.title)+'</strong><p>'+esc(states[state(l)])+'</p><button data-restore="'+l.id+'">Return to rotation</button></article>').join('')||'<p>All lessons are in rotation.</p>')+'<details><summary>Use a return code from ChatGPT</summary><label>Prerequisite return code<input id="code" placeholder="resume:lesson-id"></label><button id="redeem">Use code</button><output id="message"></output></details>';
 document.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>{localStorage.removeItem('ship.state.'+b.dataset.restore);render()});
 $('#redeem').onclick=()=>{const l=paused.find(x=>state(x)==='tools'&&$('#code').value.trim()==='resume:'+x.id);if(l){localStorage.removeItem('ship.state.'+l.id);render()}else $('#message').textContent='This code does not match a lesson waiting on prerequisites.'};
 }else if(page==='reviews'){
 const scheduled=active.map(l=>({l,r:log.find(e=>e.id===l.id)})).filter(x=>x.r?.due).sort((a,b)=>a.r.due-b.r.due);main.innerHTML='<h1>Reviews</h1>'+['Due now','Upcoming'].map((h,i)=>'<h2>'+h+'</h2>'+(scheduled.filter(x=>Number(x.r.due>Date.now())===i).map(x=>'<article><small>'+new Date(x.r.due).toLocaleDateString()+'</small><br><a href="#lesson/'+x.l.id+'">'+esc(x.l.title)+'</a></article>').join('')||'<p>No lessons here yet.</p>')).join('');
 }else if(page==='journal')main.innerHTML='<h1>Journal</h1><p>'+log.length+' saved visits · '+new Set(log.map(r=>lessons.find(l=>l.id===r.id)?.topic)).size+' topics explored</p>'+log.map(r=>'<article><a href="#lesson/'+esc(r.id)+'">'+esc(title(r.id))+'</a>'+history(r)+'</article>').join('');
 else if(page==='data')dataPage(log);
 else if(page==='credits')main.innerHTML='<h1>Image credits</h1><a href="https://lucide.dev/icons/tree-pine">Tree Pine · Lucide</a>'+lessons.map(l=>'<p><a href="https://www.pexels.com/photo/'+voyages[l.id].photo+'/">'+esc(voyages[l.id].alt)+' · Pexels</a></p>').join('');
 else{main.innerHTML='<h1>Explore</h1>'+catalog(active)+(active.length?'':'<p>All lessons are out of rotation. Visit the library to return one.</p>')+'<details><summary>Request a next lesson</summary><p>Copy this request into our conversation.</p><textarea id="request" aria-label="Lesson request"></textarea><button id="copy">Copy request</button></details>';request(active,paused.filter(l=>state(l)==='tools'))}
 const sortControl = $('#catalog-sort');
 if (sortControl) sortControl.onchange = () => {
  localStorage.setItem('ship.catalogSort', sortControl.value);
  render();
  $('#catalog-sort').focus();
 };
 window.scrollTo(0,0);
}
window.addEventListener('hashchange',render);render();
