(()=>{"use strict";var e={791:(e,o,t)=>{t.d(o,{gz:()=>ae,sS:()=>ue,rC:()=>ce,DH:()=>ye,HT:()=>le,m1:()=>se,LK:()=>ne,E5:()=>de});const r=document.querySelector(".pomoBox"),c=document.querySelector(".restart"),l=document.querySelector(".pause"),a=document.querySelector(".resume"),n=document.querySelector(".start"),d=document.querySelector(".reset"),s=document.querySelector(".fa-adjust"),u=document.querySelector("body"),i=document.querySelector(".squareBox"),y=document.querySelector(".sessionBtns"),m=document.querySelector(".score"),E=document.querySelector(".settingsBtn"),f=document.querySelector(".settingsPage"),b=document.querySelector(".dracula"),k=document.querySelector(".nord"),g=document.querySelector(".gruvHard"),C=document.querySelector(".defaultDark"),v=document.querySelector(".defaultLight"),S=document.querySelector(".tomato"),q=document.querySelector(".brandLogo"),L=document.querySelector(".aboutPage"),p=document.querySelector(".aboutBtn"),D=(document.querySelector(".menulink-toggle"),document.querySelector(".modesLink")),h=document.querySelector(".modesDiv"),x=document.querySelector(".modeCurrentTime"),A=document.querySelector(".increaseTimeArrow"),F=document.querySelector(".decreaseTimeArrow"),B=document.querySelector(".breakMode"),T=document.querySelector(".defaultMode"),I=document.querySelector(".automaticMode"),$=document.querySelector(".timerModes"),M=document.querySelector(".modeSettings"),w=document.querySelector(".increaseTimeChevron"),H=document.querySelector(".saveBtnFLex");let P=0;const j=e=>{de=e,localStorage.savedTheme=e},O=(e,o)=>{u.style.backgroundColor=o,u.style.color=e},N=e=>i.style.backgroundColor=e,z=(e,o,t)=>{r.style.color=e,r.style.backgroundColor=o,r.style.border=t},K=e=>{y.style.backgroundColor=e},G=(e,o,t)=>{[c,n,l,a].forEach((r=>{r.style.backgroundColor=o,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=t,r.style.color=o})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=o,r.style.color=e}))}))},J=(e,o,t)=>{d.style.backgroundColor=o,d.addEventListener("mouseover",(()=>{d.style.backgroundColor=t,d.style.color=e})),d.addEventListener("mouseout",(()=>{d.style.backgroundColor=o}))},Q=(e,o,t,r,c,l)=>{$.style.backgroundColor=o,[T,B,I].forEach((t=>{t.style.color=e,t.style.backgroundColor=o,t.addEventListener("click",(()=>{}))})),T.addEventListener("click",(()=>{[B,I].forEach((e=>{e.style.backgroundColor=o})),T.style.backgroundColor=t})),B.addEventListener("click",(()=>{[T,I].forEach((e=>{e.style.backgroundColor=o})),B.style.backgroundColor=t})),I.addEventListener("click",(()=>{[T,B].forEach((e=>{e.style.backgroundColor=o})),I.style.backgroundColor=t})),M.style.backgroundColor=r,x.style.color=c,x.style.backgroundColor=l,[A,F,w].forEach((e=>{e.style.backgroundColor=l,e.style.color=c,e!=w&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=c,e.style.color=l})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=l,e.style.color=c})))})),T.style.backgroundColor=t;let a=document.querySelector(".score");a.style.color=e,a.style.backgroundColor=o,H.style.backgroundColor=o,H.style.color=e,H.addEventListener("mouseover",(()=>{H.style.backgroundColor=t,H.style.color=e})),H.addEventListener("mouseout",(()=>{H.style.backgroundColor=o,H.style.color=e}))},R=e=>{document.querySelectorAll("li").forEach((o=>{o.style.color=e})),document.querySelectorAll("h2").forEach((o=>{o.style.borderColor=e}))},U=()=>{j("dracula"),O("#D8DEE9","#282a36"),N("#323440"),z("#D8DEE9","#323440","6px solid #bd93f9"),K("#464854"),G("#D8DEE9","#282a36","#bd93f9"),J("#282a36","#bd93f9","#D8DEE9"),Q("#D8DEE9","#21232C","#282a36","#3C3E4A","#5AF78E","#282a36"),R("#AEB4D5")},V=()=>{j("gruvHard"),O("#c8ccd4","#1D2021"),N("#242829"),z("c8ccd4","#242829","6px solid #83a598"),G("#c8ccd4","#1D2021","#83a598"),J("#242829","#83a598","#c8ccd4"),K("#2E3233"),Q("#83a598","#2E3233","#242829","#83a598","#83a598","#242829"),R("#C3C7CF")},W=()=>{j("dark"),O("#f9fcfb","#222831"),N("#2C323B"),z("#f9fcfb","#2C323B","6px solid #a7c5eb"),K("#40464F"),G("#f9fcfb","#2C323B","#a7c5eb"),J("#2C323B","#a7c5eb","#f9fcfb"),Q("#f9fcfb","#2C323B","#4a5460","#40464F","#f9fcfb","#2C323B"),R("#C3C7CF")},X=()=>{j("light"),O("#36404c","#fafafa"),N("#a7c5eb"),z("#f9fcfb","#36404c","0px solid #36404c"),K("#f9fcfb"),G("#f9fcfb","#36404c","#a7c5eb"),J("#36404c","#a7c5eb","#f9fcfb"),Q("#fafafa","#36404c","#4a5460","#a7c5eb","#36404c","#fafafa"),R("#545e6a")},Y=()=>{j("nord"),O("#D8DEE9","#2E3440"),N("#323846"),z("#D8DEE9","#323846","6px solid #81A1C1"),K("#40464F"),G("#D8DEE9","#2E3440","#81A1C1"),J("#2E3440","#81A1C1","#D8DEE9"),Q("#D8DEE9","#2C313D","#2E3440","#81A1C1","#D8DEE9","#2C313D"),R("#c8ccd4")},Z=()=>{j("tomato"),O("#623A3F","#e5707e"),N("#F98492"),z("#954952","#F98492","6px solid #D36774"),K("#D36774"),G("#954952","#FF8E9C","#623A3F"),J("#222831","#D36774","#f9fcfb"),Q("#623A3F","#D36774","#e5707e","#e5707e","#623A3F","#FF8E9C"),R("#623A3F")};v.addEventListener("click",X),C.addEventListener("click",W),k.addEventListener("click",Y),b.addEventListener("click",U),g.addEventListener("click",V),S.addEventListener("click",Z);const _=(e,o)=>{r.innerText=e<10?`0${e} : ${o}`:o<10?`${e} : 0${o}`:`${e} : ${o}`},ee=()=>{r.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",r.innerText=">:("},oe=e=>{x.textContent=e<10?`0${e} : 00`:`${e} : 00`},te=(e,o,t)=>{const r=document.querySelector("."+e);r.setAttribute("title",o);const c=document.createElement("i");c.classList.add("fas",t,"fa-lg"),r.appendChild(c)};[c,n,d].forEach((e=>{e.addEventListener("click",(()=>{r.style.animation=" none",r.style.backgroundImage="none","reset"===e.className?(ae="reset",clearInterval(le),ue=60*se,_(se,0)):(new Audio("./assets/sounds/tick.mp3").play(),ae="start"===e.className?"start":"restart",clearInterval(le),ye())}))})),l.addEventListener("click",(()=>{ue!==60*se&&0!==ue||ee(),ae="pause",ce=ue,clearInterval(le);const e=Math.floor(ce/60);_(e,ce%60)})),a.addEventListener("click",(()=>{ue===60*se||0===ue?ee():"pause"==ae&&ue>0&&ye(),ae="resume"})),E.addEventListener("mouseover",(()=>{E.style.textDecoration="underline"})),E.addEventListener("mouseout",(()=>{E.style.textDecoration="none"})),E.addEventListener("click",(()=>{[i,r,y,d,L,h].forEach((e=>{e.style.display="none"})),f.style.display="grid"}));const re=()=>{[i,r,y,d].forEach((e=>{e.style.display=""})),[f,L,h].forEach((e=>{e.style.display="none"}))};q.addEventListener("click",(()=>re())),p.addEventListener("click",(()=>([i,r,y,d,f,h].forEach((e=>{e.style.display="none"})),void(L.style.display="block")))),D.addEventListener("click",(()=>([f,L,i,r,y,d].forEach((e=>{e.style.display="none"})),void(h.style.display="block")))),A.addEventListener("click",(()=>{se++,oe(se),_(se,0)})),F.addEventListener("click",(()=>{se>1&&(se--,oe(se),_(se,0))})),T.addEventListener("click",(()=>{[B,I].forEach((e=>{e.style.backgroundColor="#36404c"})),se=25,oe(se),T.style.backgroundColor="#4a5460"})),B.addEventListener("click",(()=>{[T,I].forEach((e=>{e.style.backgroundColor="#36404c"})),se=5,oe(se),B.style.backgroundColor="#4a5460"})),I.addEventListener("click",(()=>{[B,T].forEach((e=>{e.style.backgroundColor="#36404c"})),se=25,oe(se),I.style.backgroundColor="#4a5460"})),H.addEventListener("click",(()=>{re()}));let ce,le,ae,ne=0,de="lightTheme";(()=>{if(localStorage.length>0)switch(ne=localStorage.getItem("savedScore"),de=localStorage.getItem("savedTheme"),m.innerText="Score : "+ne,de){case"dark":W();break;case"light":X();break;case"dracula":U();break;case"nord":Y();break;case"gruvHard":V();break;case"tomato":Z()}})(),te("start","start","fa-rocket"),te("restart","restart","fa-redo"),te("pause","pause","fa-stop"),te("resume","resume","fa-play"),r.innerText="25 : 00";let se=25,ue=60*se;const ie=()=>{var e;e=le,0==ue&&(clearInterval(e),document.getElementById("dingding").play(),ne=parseInt(ne),ne+=100,m.innerText="Score : "+ne,localStorage.setItem("savedScore",ne),localStorage.setItem("savedTheme",de));const o=Math.floor(ue/60);let t=ue%60;0!==ue?(_(o,t),ue--):_(o,t)},ye=()=>{r.style.animation="shake 4s",ue="pause"==ae?ce:60*se,le=setInterval(ie,1e3)};s.addEventListener("click",(()=>{P++,P%2!=0?W():X()}))}},o={};function t(r){if(o[r])return o[r].exports;var c=o[r]={exports:{}};return e[r](c,c.exports,t),c.exports}t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t(791)})();