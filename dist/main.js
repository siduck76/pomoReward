(()=>{"use strict";var e={791:(e,o,t)=>{t.d(o,{gz:()=>ae,sS:()=>ue,rC:()=>ce,DH:()=>ye,HT:()=>le,m1:()=>se,LK:()=>ne,E5:()=>de});const r=document.querySelector(".pomoBox"),c=document.querySelector(".pause"),l=document.querySelector(".start"),a=document.querySelector(".reset"),n=document.querySelector(".fa-adjust"),d=document.querySelector("body"),s=document.querySelector(".squareBox"),u=document.querySelector(".sessionBtns"),i=document.querySelector(".score"),y=document.querySelector(".settingsBtn"),m=document.querySelector(".settingsPage"),E=document.querySelector(".dracula"),b=document.querySelector(".nord"),f=document.querySelector(".gruvHard"),k=document.querySelector(".defaultDark"),g=document.querySelector(".defaultLight"),C=document.querySelector(".tomato"),v=document.querySelector(".brandLogo"),S=document.querySelector(".aboutPage"),p=document.querySelector(".aboutBtn"),q=(document.querySelector(".menulink-toggle"),document.querySelector(".modesLink")),L=document.querySelector(".modesDiv"),D=document.querySelector(".modeCurrentTime"),h=document.querySelector(".increaseTimeArrow"),x=document.querySelector(".decreaseTimeArrow"),F=document.querySelector(".breakMode"),A=document.querySelector(".defaultMode"),B=document.querySelector(".automaticMode"),T=document.querySelector(".timerModes"),I=document.querySelector(".modeSettings"),$=document.querySelector(".increaseTimeChevron"),M=document.querySelector(".saveBtnFLex");let w=0;const H=e=>{de=e,localStorage.savedTheme=e},P=(e,o)=>{d.style.backgroundColor=o,d.style.color=e},j=e=>{s.style.backgroundColor=e},O=(e,o,t)=>{r.style.color=e,r.style.backgroundColor=o,r.style.border=t},z=e=>{u.style.backgroundColor=e},K=(e,o,t)=>{[l,c].forEach((r=>{r.style.backgroundColor=o,r.style.color=e,r.addEventListener("mouseover",(()=>{r.style.backgroundColor=t,r.style.color=o})),r.addEventListener("mouseout",(()=>{r.style.backgroundColor=o,r.style.color=e}))}))},N=(e,o,t)=>{a.style.backgroundColor=o,a.addEventListener("mouseover",(()=>{a.style.backgroundColor=t,a.style.color=e})),a.addEventListener("mouseout",(()=>{a.style.backgroundColor=o}))},G=(e,o,t,r,c,l)=>{T.style.backgroundColor=o,[A,F,B].forEach((t=>{t.style.color=e,t.style.backgroundColor=o,t.addEventListener("click",(()=>{}))})),A.addEventListener("click",(()=>{[F,B].forEach((e=>{e.style.backgroundColor=o})),A.style.backgroundColor=t})),F.addEventListener("click",(()=>{[A,B].forEach((e=>{e.style.backgroundColor=o})),F.style.backgroundColor=t})),B.addEventListener("click",(()=>{[A,F].forEach((e=>{e.style.backgroundColor=o})),B.style.backgroundColor=t})),I.style.backgroundColor=r,D.style.color=c,D.style.backgroundColor=l,[h,x,$].forEach((e=>{e.style.backgroundColor=l,e.style.color=c,e!=$&&(e.addEventListener("mouseover",(()=>{e.style.backgroundColor=c,e.style.color=l})),e.addEventListener("mouseout",(()=>{e.style.backgroundColor=l,e.style.color=c})))})),A.style.backgroundColor=t;let a=document.querySelector(".score");a.style.color=e,a.style.backgroundColor=o,M.style.backgroundColor=o,M.style.color=e,M.addEventListener("mouseover",(()=>{M.style.backgroundColor=t,M.style.color=e})),M.addEventListener("mouseout",(()=>{M.style.backgroundColor=o,M.style.color=e}))},J=e=>{document.querySelectorAll("li").forEach((o=>{o.style.color=e})),document.querySelectorAll("h2").forEach((o=>{o.style.borderColor=e}))},Q=(e,o)=>{document.querySelector(".timerProgressBar").style.backgroundColor=e},R=()=>{H("dracula"),P("#D8DEE9","#282a36"),j("#323440"),O("#D8DEE9","#323440","6px solid #bd93f9"),z("#464854"),K("#D8DEE9","#282a36","#bd93f9"),N("#282a36","#bd93f9","#D8DEE9"),G("#D8DEE9","#21232C","#282a36","#3C3E4A","#5AF78E","#282a36"),J("#AEB4D5"),Q("#323440")},U=()=>{H("gruvHard"),P("#c8ccd4","#1D2021"),j("#242829"),O("c8ccd4","#242829","6px solid #83a598"),K("#c8ccd4","#1D2021","#83a598"),N("#242829","#83a598","#c8ccd4"),z("#2E3233"),Q("#242829"),G("#83a598","#2E3233","#242829","#83a598","#83a598","#242829"),J("#C3C7CF")},V=()=>{H("dark"),P("#f9fcfb","#222831"),j("#2C323B"),O("#f9fcfb","#2C323B","6px solid #a7c5eb"),z("#40464F"),K("#f9fcfb","#2C323B","#a7c5eb"),N("#2C323B","#a7c5eb","#f9fcfb"),Q("#2C323B"),G("#f9fcfb","#2C323B","#4a5460","#40464F","#f9fcfb","#2C323B"),J("#C3C7CF")},W=()=>{H("light"),P("#36404c","#fafafa"),j("#a7c5eb"),O("#f9fcfb","#36404c","0px solid #36404c"),z("#f9fcfb"),K("#36404c","#a7c5eb","#36404c"),N("#36404c","#a7c5eb","#f9fcfb"),Q("#ecebeb"),G("#fafafa","#36404c","#4a5460","#a7c5eb","#36404c","#fafafa"),J("#545e6a")},X=()=>{H("nord"),P("#D8DEE9","#2E3440"),j("#323846"),O("#D8DEE9","#323846","6px solid #81A1C1"),z("#40464F"),K("#D8DEE9","#2E3440","#81A1C1"),N("#2E3440","#81A1C1","#D8DEE9"),Q("#323846"),G("#D8DEE9","#2C313D","#2E3440","#81A1C1","#D8DEE9","#2C313D"),J("#c8ccd4")},Y=()=>{H("tomato"),P("#623A3F","#e5707e"),j("#F98492"),O("#954952","#F98492","6px solid #D36774"),z("#D36774"),K("#954952","#FF8E9C","#623A3F"),N("#222831","#D36774","#f9fcfb"),Q("#FF8E9C"),G("#623A3F","#D36774","#e5707e","#e5707e","#623A3F","#FF8E9C"),J("#623A3F")};g.addEventListener("click",W),k.addEventListener("click",V),b.addEventListener("click",X),E.addEventListener("click",R),f.addEventListener("click",U),C.addEventListener("click",Y);const Z=(e,o)=>{let t;e<10?t=`0${e} : ${o}`:o<10&&(t=`${e} : 0${o}`),t=`${e} : ${o}`,r.innerText=t},_=()=>{r.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",r.innerText=">:("},ee=e=>{D.textContent=e<10?`0${e} : 00`:`${e} : 00`},oe=(e,o,t)=>{const r=document.querySelector("."+e);r.setAttribute("title",o);const c=document.createElement("i");c.classList.add("fas",t,"fa-lg"),r.appendChild(c)};[l,a].forEach((e=>{e.addEventListener("click",(()=>{if(r.style.animation=" none",r.style.backgroundImage="none","reset"===e.className)return ae="reset",clearInterval(le),ue=60*se,void Z(se,0);new Audio("./assets/sounds/tick.mp3").play(),ae="start",clearInterval(le),ye()}))}));let te=0;c.addEventListener("click",(()=>{te++,ae=te%2==0?"resume":"pause","pause"==ae?(()=>{ue!==60*se&&0!==ue||_(),ae="pause",ce=ue,clearInterval(le);const e=Math.floor(ce/60);Z(e,ce%60)})():(ue!==60*se&&0!==ue||_(),ae="pause",ue!=60*se&&ye())})),y.addEventListener("mouseover",(()=>{y.style.textDecoration="underline"})),y.addEventListener("mouseout",(()=>{y.style.textDecoration="none"})),y.addEventListener("click",(()=>{[s,r,u,a,S,L].forEach((e=>e.style.display="none")),m.style.display="grid"}));const re=()=>{[s,r,u,a].forEach((e=>{e.style.display=""})),[m,S,L].forEach((e=>{e.style.display="none"}))};v.addEventListener("click",(()=>re())),p.addEventListener("click",(()=>([s,r,u,a,m,L].forEach((e=>{e.style.display="none"})),void(S.style.display="block")))),q.addEventListener("click",(()=>([m,S,s,r,u,a].forEach((e=>{e.style.display="none"})),void(L.style.display="block")))),h.addEventListener("click",(()=>{se++,ee(se),Z(se,0)})),x.addEventListener("click",(()=>{se>1&&(se--,ee(se),Z(se,0))})),A.addEventListener("click",(()=>{[F,B].forEach((e=>{e.style.backgroundColor="#36404c"})),se=25,ee(se),A.style.backgroundColor="#4a5460"})),F.addEventListener("click",(()=>{[A,B].forEach((e=>{e.style.backgroundColor="#36404c"})),se=5,ee(se),F.style.backgroundColor="#4a5460"})),B.addEventListener("click",(()=>{[F,A].forEach((e=>{e.style.backgroundColor="#36404c"})),se=25,ee(se),B.style.backgroundColor="#4a5460"})),M.addEventListener("click",(()=>{re()}));let ce,le,ae,ne=0,de="lightTheme";(()=>{if(localStorage.length>0)switch(ne=localStorage.getItem("savedScore"),de=localStorage.getItem("savedTheme"),i.innerText="Score : "+ne,de){case"dark":V();break;case"light":W();break;case"dracula":R();break;case"nord":X();break;case"gruvHard":U();break;case"tomato":Y()}})(),oe("start","start","fa-play"),oe("pause","pause","fa-stop"),r.innerText="25 : 00";let se=25,ue=60*se;const ie=()=>{var e;e=le,0==ue&&(clearInterval(e),document.getElementById("dingding").play(),ne=parseInt(ne),ne+=100,i.innerText="Score : "+ne,localStorage.setItem("savedScore",ne),localStorage.setItem("savedTheme",de));const o=Math.floor(ue/60);let t=ue%60;0!==ue?(Z(o,t),ue--):Z(o,t)},ye=()=>{r.style.animation="shake 4s",ue="pause"==ae?ce:60*se,le=setInterval(ie,0)};n.addEventListener("click",(()=>{w++,w%2!=0?V():W()}))}},o={};function t(r){if(o[r])return o[r].exports;var c=o[r]={exports:{}};return e[r](c,c.exports,t),c.exports}t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t(791)})();