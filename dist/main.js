(()=>{"use strict";var e={791:(e,o,t)=>{t.d(o,{gz:()=>de,sS:()=>ye,rC:()=>ae,DH:()=>me,HT:()=>ne,m1:()=>ie,LK:()=>se,E5:()=>ue});const r=document.querySelector(".pomoBox"),c=document.querySelector(".pause"),l=document.querySelector(".start"),a=document.querySelector(".reset"),n=document.querySelector(".fa-adjust"),d=document.querySelector("body"),s=document.querySelector(".squareBox"),u=document.querySelector(".sessionBtns"),i=document.querySelector(".score"),y=document.querySelector(".settingsBtn"),E=document.querySelector(".settingsPage"),m=document.querySelector(".dracula"),k=document.querySelector(".nord"),C=document.querySelector(".gruvHard"),g=document.querySelector(".defaultDark"),b=document.querySelector(".defaultLight"),v=document.querySelector(".tomato"),f=document.querySelector(".brandLogo"),S=document.querySelector(".aboutPage"),h=document.querySelector(".aboutBtn"),q=document.querySelector(".menulink-toggle"),p=document.querySelector(".modesLink"),L=document.querySelector(".modesDiv"),D=document.querySelector(".modeCurrentTime"),F=document.querySelector(".increaseTimeArrow"),A=document.querySelector(".decreaseTimeArrow"),B=document.querySelector(".breakMode"),x=document.querySelector(".defaultMode"),T=document.querySelector(".automaticMode"),w=document.querySelector(".timerModes"),I=document.querySelector(".modeSettings"),$=document.querySelector(".increaseTimeChevron"),M=document.querySelector(".saveBtnFLex");let H=0;const P=e=>{ue=e,localStorage.savedTheme=e},j=(e,o)=>{d.style.backgroundColor=o,d.style.color=e},O=e=>{s.style.backgroundColor=e},z=(e,o,t)=>{r.style.color=e,r.style.backgroundColor=o,r.style.border=t},K=e=>{u.style.backgroundColor=e},N=(e,o,t)=>{[l,c].forEach((r=>{r.style.backgroundColor=o,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=t,r.style.color=o})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=o,r.style.color=e}))}))},G=(e,o,t)=>{a.style.backgroundColor=o,a.addEventListener("mouseover",(()=>{a.style.backgroundColor=t,a.style.color=e})),a.addEventListener("mouseout",(()=>{a.style.backgroundColor=o}))},J=(e,o,t,r,c,l)=>{w.style.backgroundColor=o,[x,B,T].forEach((t=>{t.style.color=e,t.style.backgroundColor=o,t.addEventListener("click",(()=>{}))})),x.addEventListener("click",(()=>{[B,T].forEach((e=>{e.style.backgroundColor=o})),x.style.backgroundColor=t})),B.addEventListener("click",(()=>{[x,T].forEach((e=>{e.style.backgroundColor=o})),B.style.backgroundColor=t})),T.addEventListener("click",(()=>{[x,B].forEach((e=>{e.style.backgroundColor=o})),T.style.backgroundColor=t})),I.style.backgroundColor=r,D.style.color=c,D.style.backgroundColor=l,[F,A,$].forEach((e=>{e.style.backgroundColor=l,e.style.color=c,e!=$&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=c,e.style.color=l})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=l,e.style.color=c})))})),x.style.backgroundColor=t,M.style.backgroundColor=o,M.style.color=e,M.addEventListener("mouseover",(()=>{M.style.backgroundColor=t,M.style.color=e})),M.addEventListener("mouseout",(()=>{M.style.backgroundColor=o,M.style.color=e}))},Q=e=>{document.querySelectorAll("li").forEach((o=>{o.style.color=e})),document.querySelectorAll("h2").forEach((o=>{o.style.borderColor=e}))},R=(e,o)=>{let t=document.querySelector(".timerProgressBar");document.querySelector(".bar").style.backgroundColor=o,t.style.backgroundColor=e},U=(e,o)=>{let t=document.querySelector(".score");t.style.color=e,t.style.backgroundColor=o},V=()=>{P("dracula"),j("#D8DEE9","#282a36"),O("#323440"),z("#D8DEE9","#323440","6px solid #bd93f9"),K("#464854"),N("#D8DEE9","#282a36","#bd93f9"),G("#282a36","#bd93f9","#D8DEE9"),J("#D8DEE9","#21232C","#282a36","#3C3E4A","#5AF78E","#282a36"),Q("#AEB4D5"),R("#323440","#5AF78E")},W=()=>{P("gruvHard"),j("#c8ccd4","#1D2021"),O("#242829"),z("c8ccd4","#242829","6px solid #83a598"),N("#c8ccd4","#1D2021","#83a598"),G("#242829","#83a598","#c8ccd4"),K("#2E3233"),R("#242829","#c8ccd4"),J("#83a598","#2E3233","#242829","#83a598","#83a598","#242829"),Q("#C3C7CF")},X=()=>{P("dark"),j("#f9fcfb","#222831"),O("#2C323B"),z("#f9fcfb","#2C323B","6px solid #B1CFF5"),K("#40464F"),N("#f9fcfb","#2C323B","#B1CFF5"),G("#2C323B","#B1CFF5","#f9fcfb"),R("#2C323B","#81A1C1"),J("#f9fcfb","#2C323B","#4a5460","#40464F","#f9fcfb","#2C323B"),Q("#C3C7CF")},Y=()=>{P("light"),j("#545E6A","white"),O("#B1CFF5"),z("white","#545E6A","0px solid #36404c"),K("white"),N("#545E6A","#B1CFF5","#36404c"),G("#545E6A","#B1CFF5","white"),R("#ecebeb","#B1CFF5"),J("white","#545E6A","#4a5460","#B1CFF5","#545E6A","white"),Q("#545e6a"),U("#494975","#D5D4F4")},Z=()=>{P("nord"),j("#D8DEE9","#2E3440"),O("#323846"),z("#D8DEE9","#323846","6px solid #81A1C1"),K("#40464F"),N("#D8DEE9","#2E3440","#81A1C1"),G("#2E3440","#81A1C1","#D8DEE9"),R("#323846"),J("#D8DEE9","#2C313D","#2E3440","#81A1C1","#D8DEE9","#2C313D"),Q("#c8ccd4")},_=()=>{P("tomato"),j("#623A3F","#e5707e"),O("#F98492"),z("#954952","#F98492","6px solid #D36774"),K("#D36774"),N("#954952","#FF8E9C","#623A3F"),G("#222831","#D36774","#f9fcfb"),R("#FF8E9C","#954952"),J("#623A3F","#D36774","#e5707e","#e5707e","#623A3F","#FF8E9C"),Q("#623A3F")};b.addEventListener("click",Y),g.addEventListener("click",X),k.addEventListener("click",Z),m.addEventListener("click",V),C.addEventListener("click",W),v.addEventListener("click",_);const ee=(e,o)=>{let t;e<10?t=`0${e} : ${o}`:o<10&&(t=`${e} : 0${o}`),t=`${e} : ${o}`,r.innerText=t},oe=()=>{r.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",r.innerText=">:("},te=e=>{D.textContent=e<10?`0${e} : 00`:`${e} : 00`};[l,a].forEach((e=>{e.addEventListener("click",(()=>(r.style.animation=" none",r.style.backgroundImage="none","reset"===e.className?(de="reset",clearInterval(ne),ye=60*ie,ee(ie,0),void(document.querySelector(".bar").style.width=0)):(de="start",new Audio("./assets/sounds/tick.mp3").play(),clearInterval(ne),void me()))))}));let re=0;c.addEventListener("click",(()=>{re++,de=re%2==0?"resume":"pause","pause"==de?(()=>{ye!==60*ie&&0!==ye||oe(),de="pause",ae=ye,clearInterval(ne);const e=Math.floor(ae/60);ee(e,ae%60)})():(ye!==60*ie&&0!==ye||oe(),de="pause",ye!=60*ie&&me())})),y.addEventListener("mouseover",(()=>{y.style.textDecoration="underline"})),y.addEventListener("mouseout",(()=>{y.style.textDecoration="none"})),y.addEventListener("click",(()=>{[s,r,u,a,S,L].forEach((e=>e.style.display="none")),E.style.display="grid"}));const ce=()=>{[s,r,u,a].forEach((e=>{e.style.display=""})),[E,S,L].forEach((e=>{e.style.display="none"}))};f.addEventListener("click",(()=>ce())),h.addEventListener("click",(()=>([s,r,u,a,E,L].forEach((e=>{e.style.display="none"})),void(S.style.display="block")))),p.addEventListener("click",(()=>([E,S,s,r,u,a].forEach((e=>{e.style.display="none"})),void(L.style.display="block")))),F.addEventListener("click",(()=>{ie++,te(ie),ee(ie,0)})),A.addEventListener("click",(()=>{ie>1&&(ie--,te(ie),ee(ie,0))})),x.addEventListener("click",(()=>{[B,T].forEach((e=>{e.style.backgroundColor="#36404c"})),ie=25,te(ie),x.style.backgroundColor="#4a5460"})),B.addEventListener("click",(()=>{[x,T].forEach((e=>{e.style.backgroundColor="#36404c"})),ie=5,te(ie),B.style.backgroundColor="#4a5460"})),T.addEventListener("click",(()=>{[B,x].forEach((e=>{e.style.backgroundColor="#36404c"})),ie=25,te(ie),T.style.backgroundColor="#4a5460"})),M.addEventListener("click",(()=>ce())),q.addEventListener("click",(()=>{}));const le=(e,o,t)=>{const r=document.querySelector("."+e);r.setAttribute("title",o);const c=document.createElement("i");c.classList.add("fas",t,"fa-lg"),r.appendChild(c)};let ae,ne,de,se=0,ue="lightTheme";(()=>{switch(se=localStorage.getItem("savedScore"),ue=localStorage.getItem("savedTheme"),0==localStorage.length&&(se=0),i.innerText=`score : ${se}`,ue){case"dark":X();break;case"light":Y();break;case"dracula":V();break;case"nord":Z();break;case"gruvHard":W();break;case"tomato":_()}})(),le("start","start","fa-play"),le("pause","pause","fa-stop"),r.innerText="25 : 00";let ie=25,ye=60*ie;const Ee=()=>{var e;e=ne,0==ye&&(clearInterval(e),document.getElementById("dingding").play(),se=parseInt(se),se+=100,i.innerText="Score : "+se,localStorage.setItem("savedScore",se),localStorage.setItem("savedTheme",ue));const o=Math.floor(ye/60);let t=ye%60;0!==ye?(ee(o,t),ye--,(()=>{let e=ye/60;document.querySelector(".bar").style.width=(ie-e)/ie*100+"%"})()):ee(o,t)},me=()=>{r.style.animation="shake 4s",ye="pause"==de?ae:60*ie,ne=setInterval(Ee,1e3)};n.addEventListener("click",(()=>{H++,H%2!=0?X():Y()}))}},o={};function t(r){if(o[r])return o[r].exports;var c=o[r]={exports:{}};return e[r](c,c.exports,t),c.exports}t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t(791)})();