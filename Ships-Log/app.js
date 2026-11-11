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
const minutesText=ms=>{const m=ms/60000;return m<1?Math.round(ms/1000)+' sec':m<60?m.toFixed(1)+' min':(m/60).toFixed(1)+' hr'};
function barChart(values,total){const width=680,left=150,bar=28,gap=20,rows=Object.entries(values).sort((a,b)=>b[1]-a[1]);const body=rows.length?rows.map(([label,value],i)=>{const y=24+i*(bar+gap),pct=total?value/total*100:0;return '<text x="'+(left-12)+'" y="'+(y+20)+'" text-anchor="end">'+esc(label)+'</text><rect x="'+left+'" y="'+y+'" width="'+(500*pct/100)+'" height="'+bar+'" rx="5"/><text x="'+(left+500*pct/100+8)+'" y="'+(y+20)+'">'+pct.toFixed(0)+'%</text>'}).join(''):'<text x="20" y="40">No saved visits yet.</text>';return '<svg class="chart" viewBox="0 0 680 '+Math.max(260,24+rows.length*48)+'" role="img" aria-label="Time spent by topic">'+body+'</svg>'}
function lineChart(values){const entries=Object.entries(values),width=760,height=300,left=58,right=20,top=22,bottom=50,max=Math.max(...entries.map(([,v])=>v),1),step=entries.length>1?(width-left-right)/(entries.length-1):0,points=entries.map(([,v],i)=>(left+i*step)+','+(top+(height-top-bottom)*(1-v/max))).join(' '),dots=entries.map(([label,v],i)=>{const x=left+i*step,y=top+(height-top-bottom)*(1-v/max);return '<circle cx="'+x+'" cy="'+y+'" r="4"/><text x="'+x+'" y="'+(height-18)+'" text-anchor="middle">'+esc(label)+'</text>'}).join('');return '<svg class="chart" viewBox="0 0 '+width+' '+height+'" role="img" aria-label="Saved time over time"><line class="axis" x1="'+left+'" y1="'+top+'" x2="'+left+'" y2="'+(height-bottom)+'"/><line class="axis" x1="'+left+'" y1="'+(height-bottom)+'" x2="'+(width-right)+'" y2="'+(height-bottom)+'"/><polyline points="'+points+'" fill="none"/> '+dots+'</svg>'}
function localDay(timestamp) {
 const date = new Date(timestamp);
 return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0');
}
function dailyTime(record) {
 const segments = Array.isArray(record.focusedIntervals) && record.focusedIntervals.length
  ? record.focusedIntervals : [{at:record.at,ms:record.ms}];
 const days = {};
 for (const segment of segments) {
  let at = Number(segment.at), end = at + Number(segment.ms);
  if (!Number.isFinite(at) || !Number.isFinite(end) || end < at) continue;
  if (end === at) days[localDay(at)] = (days[localDay(at)] || 0);
  while (at < end) {
   const date = new Date(at);
   const midnight = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1).getTime();
   const next = Math.min(end,midnight);
   const day = localDay(at);
   days[day] = (days[day] || 0) + next - at;
   at = next;
  }
 }
 return days;
}
function groupedDays(days, period) {
 const grouped = {};
 for (const [day,ms] of Object.entries(days)) {
  const date = new Date(day+'T12:00:00');
  if (period === 'week') date.setDate(date.getDate()-date.getDay());
  const key = period === 'year' ? day.slice(0,4) : period === 'month' ? day.slice(0,7) : localDay(date);
  grouped[key] = (grouped[key] || 0) + ms;
 }
 return Object.fromEntries(Object.entries(grouped).sort((a,b)=>a[0].localeCompare(b[0])));
}
function activityCalendars(days) {
 const months = [...new Set(Object.keys(days).map(day=>day.slice(0,7)))].sort();
 if (!months.length) return '<p>No saved visits yet.</p>';
 const weekdays = [['日','SUN'],['月','MON'],['火','TUE'],['水','WED'],['木','THU'],['金','FRI'],['土','SAT']];
 return '<div class="calendar-list">'+months.map(month=>{
  const [year,number] = month.split('-').map(Number);
  const first = new Date(year,number-1,1);
  const count = new Date(year,number,0).getDate();
  const name = first.toLocaleDateString('en-US',{month:'short'}).toUpperCase();
  const cells = Array.from({length:first.getDay()},()=>'<span class="calendar-day empty" aria-hidden="true"></span>');
  for (let day=1;day<=count;day++) {
   const key = year+'-'+String(number).padStart(2,'0')+'-'+String(day).padStart(2,'0');
   const ms = days[key] || 0;
   cells.push('<span class="calendar-day '+(ms?'active':'')+'"><span class="day-number">'+day+'</span>'+(ms?'<small>'+minutesText(ms)+'</small>':'')+'</span>');
  }
  return '<section class="month-calendar"><header><strong>'+name+'</strong><span>'+year+'</span></header><div class="calendar-weekdays">'+weekdays.map(([kanji,english])=>'<span><b lang="ja">'+kanji+'</b><small>'+english+'</small></span>').join('')+'</div><div class="calendar-grid">'+cells.join('')+'</div></section>';
 }).join('')+'</div>';
}
function dataPage(log) {
 const byTopic = {}, byDay = {};
 for (const record of log) {
  const ms = Math.max(0,Number(record.ms) || 0);
  const topic = record.topic || lessons.find(lesson=>lesson.id===record.id)?.topic || 'Unknown topic';
  byTopic[topic] = (byTopic[topic] || 0) + ms;
  for (const [day,time] of Object.entries(dailyTime(record))) byDay[day] = (byDay[day] || 0) + time;
 }
 const days = Object.entries(byDay).sort((a,b)=>a[0].localeCompare(b[0]));
 const total = Object.values(byTopic).reduce((sum,time)=>sum+time,0);
 main.innerHTML='<h1>Data</h1><p>Saved visits only. Timing is foreground time attached to an attempt.</p><section class="data-card"><h2>Topic share</h2><p>'+minutesText(total)+' across '+Object.keys(byTopic).length+' topics.</p>'+barChart(byTopic,total)+'</section><section class="data-card"><h2>Usage over time</h2><label>Group by <select id="trend-period"><option value="day">Day</option><option value="week">Week</option><option value="month">Month</option><option value="year">Year</option></select></label><div id="trend">'+lineChart(groupedDays(byDay,'day'))+'</div></section><section class="data-card"><h2>Active days</h2>'+activityCalendars(byDay)+'</section>';
 $('#trend-period').onchange = event => {$('#trend').innerHTML = lineChart(groupedDays(byDay,event.target.value))};
}
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
