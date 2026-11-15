const $=q=>document.querySelector(q);
const main=$('main'), lessons=initialLessons;
const channel=id=>topicRegistry.find(topic=>topic.id===id);
const topicName=lesson=>channel(lesson.topicId)?.name||lesson.topic||lesson.topicId||'Unassigned';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const states={defer:'Defer from suggestions',hide:'Hide from suggestions',tools:'Wait for prerequisite tools'};
const measures={intrigue:'How much does this question keep you thinking?',interpretability:'How familiar are the terms and individual parts?',cohesiveness:'How well can you explain the connections?',engagement:'How much did the presentation hold your attention?',worth:'How much weight does this encounter have for you?'};
const state=l=>localStorage.getItem('ship.state.'+l.id)||'';
const isLegacy=l=>legacyLessonIds.has(l.id);
const entries=()=>Object.keys(localStorage).filter(k=>k.startsWith('fieldnotes.entry.')).flatMap(k=>{try{return [JSON.parse(localStorage[k])]}catch{return []}}).sort((a,b)=>b.at-a.at);
const title=id=>lessons.find(l=>l.id===id)?.title||id;
const duration=n=>n<60?n+' min':Math.floor(n/60)+' hr'+(n%60?' '+n%60+' min':'');
function theme(dark){document.documentElement.dataset.theme=dark?'dark':'light';$('#theme').textContent=dark?'Light mode':'Dark mode';$('#theme').setAttribute('aria-pressed',String(dark))}
theme((localStorage.getItem('ship.theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'))==='dark');
$('#theme').onclick=()=>{const dark=document.documentElement.dataset.theme!=='dark';theme(dark);localStorage.setItem('ship.theme',dark?'dark':'light')};
function card(l){
 const session=voyages[l.id],thumbnail=session.thumbnail||{alt:session.alt,file:'images/'+l.id+'.jpg'};
 return '<a class="card" href="#lesson/'+l.id+'"><div class="thumb"><span class="badge">Est. '+duration(session.minutes)+'</span><img alt="'+esc(thumbnail.alt)+'" src="'+esc(thumbnail.file)+'"></div><small>'+esc(topicName(l))+'</small><h2>'+esc(l.title)+'</h2><p>'+esc(l.subtitle)+'</p></a>';
}
const grid=list=>'<div class="grid">'+list.map(card).join('')+'</div>';
// Saved visits provide the only ranking signal. Keep the published order inside
// each topic, then rotate topics so one prolific channel cannot fill the desk.
function deskSelection(active,log){
 const latest=new Map();
 for(const record of log)if(!latest.has(record.id))latest.set(record.id,record);
 const due=active.filter(l=>{const r=latest.get(l.id);return r&&Number.isFinite(Number(r.due))&&Number(r.due)<=Date.now()}).sort((a,b)=>Number(latest.get(a.id).due)-Number(latest.get(b.id).due));
 const topics=[...new Set(active.map(l=>l.topicId))];
 const queues=topics.map(id=>active.filter(l=>l.topicId===id&&!latest.has(l.id)));
 const next=[];
 while(queues.some(q=>q.length))for(const q of queues)if(q.length)next.push(q.shift());
 return {due,next,latest};
}
function continuation(l,active,log){
 const visited=new Set(log.map(r=>r.id));
 const linked=(l.connections||[]).map(c=>active.find(target=>target.id===(Array.isArray(c)?c[0]:c.lessonId))).find(target=>target&&!visited.has(target.id));
 return linked||active.find(target=>target.topicId===l.topicId&&!visited.has(target.id))||null;
}
function channelCard(topic){
 const count=lessons.filter(lesson=>lesson.topicId===topic.id&&!isLegacy(lesson)).length;
 return '<a class="channel-card" href="#topic/'+topic.id+'"><span class="channel-logo"><img src="'+esc(topic.logo)+'" alt=""></span><span><small>'+(topic.scale==='larger'?'Continuing channel':'Focused channel')+' · '+count+' lesson'+(count===1?'':'s')+'</small><strong>'+esc(topic.name)+'</strong><span>'+esc(topic.purpose)+'</span></span></a>';
}
const channelGrid=list=>'<div class="channel-grid">'+list.map(channelCard).join('')+'</div>';
// Lessons are appended in introduction order. Use the full catalog so pausing
// the first lesson in a topic cannot change when that topic was introduced.
const newestTopics = [...new Set(lessons.map(lesson => lesson.topicId||lesson.topic))].reverse();

function catalog(list) {
 const grouped = localStorage.getItem('ship.catalogSort') === 'topics';
 const sortControl = '<label class="catalog-sort">Sort by <select id="catalog-sort"><option value="default">Lesson order</option><option value="topics" '+(grouped?'selected':'')+'>Topic · newest introduced first</option></select></label>';
 if (!grouped) return sortControl + grid(list);
 const groups = newestTopics.map(topicId => {
  const members = list.filter(lesson => (lesson.topicId||lesson.topic) === topicId).reverse();
  return members.length ? '<section class="topic-group"><h2>'+esc(channel(topicId)?.name||topicId)+'</h2>'+grid(members)+'</section>' : '';
 });
 return sortControl + groups.join('');
}
const history=r=>'<p><small>'+new Date(r.at).toLocaleDateString()+' · '+esc(r.rating||Object.entries(r.ratings||{}).map(([key,value])=>key+' '+value).join(' · ')||'Unrated')+'</small><br>'+esc(r.note||r.reasoning||'')+(r.theory?'<br>Current theory: '+esc(r.theory):'')+(r.question?'<br>Open question: '+esc(r.question):'')+'</p>';
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
  const matchingLesson=lessons.find(lesson=>lesson.id===record.id);
  const topic = record.topic || channel(record.topicId)?.name || (matchingLesson?topicName(matchingLesson):'Unknown topic');
  byTopic[topic] = (byTopic[topic] || 0) + ms;
  for (const [day,time] of Object.entries(dailyTime(record))) byDay[day] = (byDay[day] || 0) + time;
 }
 const days = Object.entries(byDay).sort((a,b)=>a[0].localeCompare(b[0]));
 const total = Object.values(byTopic).reduce((sum,time)=>sum+time,0);
 const recentFeedback=log.filter(r=>r.feedbackVersion===2&&r.ratings);
 const feedbackRows=recentFeedback.map(r=>'<tr><th scope="row">'+esc(title(r.id))+'<small>'+new Date(r.at).toLocaleDateString()+'</small></th>'+Object.keys(measures).map(key=>'<td>'+esc(r.ratings[key]??'—')+'</td>').join('')+'</tr>').join('');
 main.innerHTML='<h1>Data</h1><p>Saved visits only. Timing includes earlier lessons; new feedback measures apply only to new visits.</p>'+(recentFeedback.length?'<section class="data-card"><h2>How your model changes</h2><div class="feedback-scroll"><table class="feedback-table"><thead><tr><th>Lesson</th>'+Object.keys(measures).map(key=>'<th>'+esc(key)+'</th>').join('')+'</tr></thead><tbody>'+feedbackRows+'</tbody></table></div></section>':'')+'<section class="data-card"><h2>Topic share</h2><p>'+minutesText(total)+' across '+Object.keys(byTopic).length+' topics.</p>'+barChart(byTopic,total)+'</section><section class="data-card"><h2>Usage over time</h2><label>Group by <select id="trend-period"><option value="day">Day</option><option value="week">Week</option><option value="month">Month</option><option value="year">Year</option></select></label><div id="trend">'+lineChart(groupedDays(byDay,'day'))+'</div></section><section class="data-card"><h2>Active days</h2>'+activityCalendars(byDay)+'</section>';
 $('#trend-period').onchange = event => {$('#trend').innerHTML = lineChart(groupedDays(byDay,event.target.value))};
}
function request(active,paused){
 const btn=$('#copy'), box=$('#request');
 box.value='Choose my next lesson for familiarity, depth, and useful connections. Use the repository coordination files and give it one fixed scope with a completion estimate covering reading and activities. Available channels: '+topicRegistry.map(topic=>topic.id+' ('+topic.name+')').join(', ')+'. Active lessons: '+active.map(l=>l.id+' ('+l.title+')').join(', ')+'. Paused pending prerequisites: '+paused.map(l=>l.id+' ('+l.title+')').join(', ')+'. If my history shows I now have the tools, explain why and give me a return code in the form resume:LESSON-ID. Otherwise leave it paused. My eligible learning history: '+JSON.stringify(entries().filter(r=>[...active,...paused].some(l=>l.id===r.id)).map(({id,topicId,at,rating,note,due})=>({id,topicId,at,rating,note,due})));
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
function investigationFigure(visual){
 if(!visual)return '';
 if(visual.type==='forces'){
  const labels=visual.labels;
  const arrows='<path d="M300 145V65 M294 75L300 65L306 75 M300 175V255 M294 245L300 255L306 245 M320 160H485 M475 154L485 160L475 166"/>'+(visual.resistance?'<path d="M280 160H115 M125 154L115 160L125 166"/>':'');
  return '<svg class="model-diagram" viewBox="0 0 600 310" role="img" aria-label="Free-body diagram: upward normal force, downward weight, rightward applied force'+(visual.resistance?', and leftward resistance.':'. No horizontal resistance in this ideal model.')+'"><rect x="280" y="145" width="40" height="30"/>'+arrows+'<text x="315" y="65">'+esc(labels[0])+'</text><text x="315" y="260">'+esc(labels[1])+'</text><text x="390" y="140">'+esc(labels[2])+'</text>'+(visual.resistance?'<text x="110" y="140">'+esc(labels[3])+'</text>':'')+'</svg>';
 }
 if(visual.type==='circle')return '<svg class="model-diagram" viewBox="0 0 600 310" role="img" aria-label="Circular path with a point at its right edge. Velocity is tangent upward; acceleration points left toward the center."><circle class="orbit-path" cx="260" cy="160" r="100"/><circle cx="260" cy="160" r="3"/><circle cx="360" cy="160" r="5"/><path d="M360 160V35 M354 45L360 35L366 45 M360 160H275 M285 154L275 160L285 166"/><text x="375" y="50">Velocity</text><text x="270" y="190">Acceleration</text><text x="195" y="290">Motion vectors, not forces</text></svg>';
 if(visual.type!=='plot')return '';
 const points=visual.points;
 const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
 const xmin=Math.min(0,...xs),xmax=Math.max(1,...xs),ymin=Math.min(0,...ys),ymax=Math.max(1,...ys);
 const X=x=>80+(x-xmin)/(xmax-xmin)*540,Y=y=>260-(y-ymin)/(ymax-ymin)*210;
 const poly=points.map(([x,y])=>X(x)+','+Y(y)).join(' ');
 const ticks=points.map(([x,y])=>'<circle cx="'+X(x)+'" cy="'+Y(y)+'" r="4"/><text x="'+X(x)+'" y="285" text-anchor="middle">'+esc(x)+'</text>').join('');
 return '<div class="investigation-figure"><svg viewBox="0 0 680 330" role="img" aria-label="'+esc(visual.xLabel+' against '+visual.yLabel)+'"><line class="axis" x1="80" y1="'+Y(0)+'" x2="620" y2="'+Y(0)+'"/><line class="axis" x1="80" y1="40" x2="80" y2="260"/><polyline points="'+poly+'"/>'+ticks+'<text x="350" y="320" text-anchor="middle">'+esc(visual.xLabel)+'</text><text x="85" y="25">'+esc(visual.yLabel)+'</text><text x="70" y="'+(Y(ymax)+5)+'" text-anchor="end">'+esc(ymax)+'</text>'+(ymin<0?'<text x="70" y="265" text-anchor="end">'+esc(ymin)+'</text>':'')+'</svg><details><summary>Read the plotted values</summary><table><thead><tr><th>'+esc(visual.xLabel)+'</th><th>'+esc(visual.yLabel)+'</th></tr></thead><tbody>'+points.map(([x,y])=>'<tr><td>'+esc(x)+'</td><td>'+esc(y)+'</td></tr>').join('')+'</tbody></table></details></div>';
}
function sectionHtml(section){
 if(Array.isArray(section))return '<section class="lesson-section"><h2>'+esc(section[0])+'</h2><p>'+esc(section[1])+'</p></section>';
 const body=Array.isArray(section.body)?section.body:[section.body];
 const paragraphs=body.filter(Boolean).map(paragraph=>{
  const line=String(paragraph),speaker=section.kind==='dialogue'&&line.match(/^([A-Z]+): (.*)$/s);
  return speaker?'<p class="dialogue-turn"><strong>'+esc(speaker[1])+'</strong><span>'+esc(speaker[2])+'</span></p>':'<p>'+esc(paragraph)+'</p>';
 }).join('');
 return '<section class="lesson-section '+esc(section.kind||'')+'"><h2>'+esc(section.heading)+'</h2>'+paragraphs+investigationFigure(section.visual)+'</section>';
}
function feedbackHtml(feedback){
 if(!feedback?.length)return '';
 return '<details class="investigation-feedback"><summary>Compare your reasoning · open after the activities</summary><p>These checks are available whenever you choose. A matching answer is useful evidence; explain the assumptions and intermediate reasoning as well.</p><ol>'+feedback.map(answer=>'<li>'+esc(answer)+'</li>').join('')+'</ol></details>';
}
function activityHtml(activity){
 if(typeof activity==='string')return '<li>'+esc(activity)+'</li>';
 return '<li><strong>'+esc(activity.prompt)+'</strong>'+(activity.evidence?'<small>What this should make visible: '+esc(activity.evidence)+'</small>':'')+'</li>';
}
function connectionHtml(connection){
 const lessonId=Array.isArray(connection)?connection[0]:connection.lessonId;
 const relationship=Array.isArray(connection)?connection[1]:connection.relationship;
 const target=lessons.find(lesson=>lesson.id===lessonId);
 if(!target||state(target))return '';
 return '<p><a href="#lesson/'+esc(lessonId)+'">'+esc(target.title)+'</a> · '+esc(relationship)+'</p>';
}
function newVisitForm(log,l){
 const prior=log.filter(r=>r.id===l.id);
 const ratings=Object.entries(measures).map(([key,description])=>'<label for="rate-'+key+'">'+key[0].toUpperCase()+key.slice(1)+' · '+esc(description)+'</label><select id="rate-'+key+'" required><option value="">Choose 1–5</option>'+[1,2,3,4,5].map(n=>'<option value="'+n+'">'+n+'</option>').join('')+'</select>').join('');
 return '<h2>Log this visit</h2>'+(prior.length?'<p>Before opening your earlier notes, write what you can explain now and what remains uncertain.</p>':'')+'<form id="visit-form"><label for="theory">Your current theory<textarea id="theory" placeholder="What do you think is happening?"></textarea></label><label for="question">An open question<textarea id="question" placeholder="What would you investigate next?"></textarea></label><p><small>For each measure, 1 means very little and 5 means very much.</small></p>'+ratings+'<label for="reasoning">What led you to these ratings?<textarea id="reasoning" placeholder="An observation, a gap, or something that changed your mind"></textarea></label><label for="review-date">Suggested return date · change or clear it if you prefer<input id="review-date" type="date"></label><p id="review-reason" aria-live="polite"></p><button>Save visit</button></form>'+(prior.length?'<details><summary>Earlier theories and notes</summary>'+prior.map(history).join('')+'</details>':'');
}
function suggestedReturn(){
 const terms=Number($('#rate-interpretability').value),connections=Number($('#rate-cohesiveness').value);
 if(!terms||!connections)return null;
 const days=terms<=2?3:connections<=2?5:terms<=3||connections<=3?10:28;
 const reason=terms<=2?'Return to the unfamiliar parts.':connections<=2?'Revisit how the parts relate.':days===10?'Test the model again after some distance.':'Reconstruct the model from memory.';
 const date=new Date();date.setHours(12,0,0,0);date.setDate(date.getDate()+days);
 return {date:localDay(date),reason};
}
function lessonPage(l,log){
 const {minutes,activities}=voyages[l.id];
 const connections=l.connections||l.links||[];
 const sources=l.sources||[];
 const old=isLegacy(l);
 main.innerHTML='<small><a href="#topic/'+esc(l.topicId||'')+'">'+esc(topicName(l))+'</a></small><h1>'+esc(l.title)+'</h1><small>Reading and activities · Est. '+duration(minutes)+'</small>'+(old?'<p class="legacy-notice">Earlier lesson · available to read with your past notes. It is outside current recommendations and reviews.</p>':'')+'<p class="lead">'+esc(l.subtitle)+'</p>'+(l.anchor?'<aside>'+esc(l.anchor)+'</aside>':'')+l.sections.map(sectionHtml).join('')+'<blockquote>'+esc(l.centralQuestion||l.question)+'</blockquote><h2>Explore the idea</h2><ol class="activities">'+activities.map(activityHtml).join('')+'</ol>'+feedbackHtml(voyages[l.id].feedback)+(connections.length?'<h2>Connections</h2>'+connections.map(connectionHtml).join(''):'')+(sources.length?'<details class="sources"><summary>Sources and further reading</summary>'+sources.map(source=>'<p><a href="'+esc(source.url)+'">'+esc(source.label)+'</a> · accessed '+esc(source.accessed)+(source.note?'<br><small>'+esc(source.note)+'</small>':'')+'</p>').join('')+'</details>':'')+(old?'<details><summary>Previous notes</summary>'+log.filter(r=>r.id===l.id).map(history).join('')+'</details>':newVisitForm(log,l)+'<details><summary>Lesson options</summary><label>Rotation<select id="rotation"><option value="">In rotation</option>'+Object.entries(states).map(([v,s])=>'<option value="'+v+'">'+esc(s)+'</option>').join('')+'</select></label><button id="apply">Apply rotation choice</button></details>');
 if(old)return;
 function updateSuggestion(){const suggestion=suggestedReturn();if(suggestion){$('#review-date').value=suggestion.date;$('#review-reason').textContent=suggestion.reason}}
 $('#rate-interpretability').onchange=updateSuggestion;
 $('#rate-cohesiveness').onchange=updateSuggestion;
 $('#rotation').value=state(l);
 $('#apply').onclick=()=>{localStorage.setItem('ship.state.'+l.id,$('#rotation').value);location.hash='library'};
 $('#visit-form').onsubmit = event => {
  event.preventDefault();
  if (saved) return;
  pauseTiming();
  const dateValue=$('#review-date').value;
  const due=dateValue?new Date(dateValue+'T12:00:00').getTime():null;
  const ratings=Object.fromEntries(Object.keys(measures).map(key=>[key,Number($('#rate-'+key).value)]));
  const record = {
   id: l.id, topicId: l.topicId||'', topic: topicName(l), at: Date.now(),
   timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
   ms: intervals.reduce((sum, interval) => sum + interval.ms, 0),
   focusedIntervals: intervals,
   feedbackVersion: 2, ratings, reasoning: $('#reasoning').value,
   theory: $('#theory').value, question: $('#question').value, due
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
function topicPage(topic,active){
 const members=active.filter(lesson=>lesson.topicId===topic.id);
 const earlier=lessons.filter(lesson=>lesson.topicId===topic.id&&isLegacy(lesson));
 main.innerHTML='<div class="channel-heading"><span class="channel-logo large"><img src="'+esc(topic.logo)+'" alt=""></span><div><small>'+(topic.scale==='larger'?'Continuing channel':'Focused channel')+'</small><h1>'+esc(topic.name)+'</h1></div></div><p class="lead">'+esc(topic.purpose)+'</p>'+(members.length?grid(members):'<p class="empty-channel">No new lessons have been published in this channel yet.</p>')+(earlier.length?'<details><summary>Earlier lessons ('+earlier.length+')</summary><p>Available to read and revisit; outside the current lesson path.</p>'+grid(earlier)+'</details>':'')+'<p><a href="#desk">Return to all channels</a></p>';
}
function render(){
 const [page,id]=location.hash.slice(1).split('/'),log=entries(),active=lessons.filter(l=>!isLegacy(l)&&!state(l)),paused=lessons.filter(l=>!isLegacy(l)&&state(l)),earlier=lessons.filter(isLegacy);
 discardTiming();
 current = page === 'lesson' && lessons.find(l => l.id === id && !isLegacy(l));
 resumeTiming();
 if(page==='lesson'&&lessons.some(l=>l.id===id))lessonPage(lessons.find(l=>l.id===id),log);
 else if(page==='topic'&&channel(id))topicPage(channel(id),active);
 else if(page==='library'){
 main.innerHTML='<h1>Lesson library</h1>'+(active.length?catalog(active):'<p>No new lessons have been published yet.</p>')+'<h2>Out of rotation</h2>'+(paused.map(l=>'<article><strong>'+esc(l.title)+'</strong><p>'+esc(states[state(l)])+'</p><button data-restore="'+l.id+'">Return to rotation</button></article>').join('')||'<p>All current lessons are in rotation.</p>')+'<details><summary>Earlier lessons ('+earlier.length+')</summary><p>Previous lessons remain available to read. Their saved visits remain in Journal and Data, but they do not enter current recommendations or scheduled reviews.</p>'+grid(earlier)+'</details><details><summary>Use a return code from ChatGPT</summary><label>Prerequisite return code<input id="code" placeholder="resume:lesson-id"></label><button id="redeem">Use code</button><output id="message"></output></details>';
 document.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>{localStorage.removeItem('ship.state.'+b.dataset.restore);render()});
 $('#redeem').onclick=()=>{const l=paused.find(x=>state(x)==='tools'&&$('#code').value.trim()==='resume:'+x.id);if(l){localStorage.removeItem('ship.state.'+l.id);render()}else $('#message').textContent='This code does not match a lesson waiting on prerequisites.'};
 }else if(page==='reviews'){
 const scheduled=active.map(l=>({l,r:log.find(e=>e.id===l.id)})).filter(x=>x.r?.due).sort((a,b)=>a.r.due-b.r.due);main.innerHTML='<h1>Reviews</h1>'+['Due now','Upcoming'].map((h,i)=>'<h2>'+h+'</h2>'+(scheduled.filter(x=>Number(x.r.due>Date.now())===i).map(x=>'<article><small>'+new Date(x.r.due).toLocaleDateString()+'</small><br><a href="#lesson/'+x.l.id+'">'+esc(x.l.title)+'</a></article>').join('')||'<p>No lessons here yet.</p>')).join('');
 }else if(page==='journal')main.innerHTML='<h1>Journal</h1><p>'+log.length+' saved visits · '+new Set(log.map(r=>r.topicId||r.topic||lessons.find(l=>l.id===r.id)?.topicId).filter(Boolean)).size+' topics explored</p>'+log.map(r=>'<article><a href="#lesson/'+esc(r.id)+'">'+esc(title(r.id))+'</a>'+history(r)+'</article>').join('');
 else if(page==='data')dataPage(log);
 else if(page==='credits')main.innerHTML='<h1>Image credits</h1><p><a href="https://lucide.dev/">Ship’s Log and channel symbols · Lucide Icons</a> · ISC License</p>'+lessons.map(l=>{const thumbnail=voyages[l.id].thumbnail;return thumbnail?'<p><a href="'+esc(thumbnail.sourceUrl)+'">'+esc(thumbnail.alt)+'</a> · '+esc(thumbnail.creator)+' · '+esc(thumbnail.license)+'</p>':''}).join('');
 else{
 const continuing=topicRegistry.filter(topic=>topic.scale==='larger'),focused=topicRegistry.filter(topic=>topic.scale==='smaller');
 const {due,next}=deskSelection(active,log);
 const recent=log.map(r=>active.find(l=>l.id===r.id)).find(Boolean);
 const follow=recent&&continuation(recent,active,log);
 const visibleNext=next.filter(l=>l.id!==follow?.id);
 main.innerHTML='<h1>Explore</h1><p class="lead">Return to an idea, then follow a question into another channel. Each visit is a place to read, test, and make a connection.</p>'+
 (due.length?'<section class="desk-section"><h2>Due for review</h2><p>Return to the same lesson and see what you can explain now.</p>'+grid(due)+'</section>':'')+
 (follow?'<section class="desk-section"><h2>Continue your thread</h2><p>From '+esc(recent.title)+' → '+esc(follow.title)+'</p>'+grid([follow])+'</section>':'')+
 (visibleNext.length?'<section class="desk-section"><h2>Next steps across topics</h2><p>One next unread lesson from each channel comes first; keep exploring as long as the questions carry you.</p>'+grid(visibleNext)+'</section>':'')+
 '<h2>Continuing channels</h2>'+channelGrid(continuing)+'<h2>Focused channels</h2>'+channelGrid(focused)+(!active.length?'<p class="empty-catalog">New lessons will appear here as they are published. <a href="#library">Earlier lessons are in the library.</a></p>':'')+'<details><summary>Request a next lesson</summary><p>Copy this request into our conversation.</p><textarea id="request" aria-label="Lesson request"></textarea><button id="copy">Copy request</button></details>';
 request(active,paused.filter(l=>state(l)==='tools'));
 }
 const sortControl = $('#catalog-sort');
 if (sortControl) sortControl.onchange = () => {
  localStorage.setItem('ship.catalogSort', sortControl.value);
  render();
  $('#catalog-sort').focus();
 };
 window.scrollTo(0,0);
}
window.addEventListener('hashchange',render);render();
