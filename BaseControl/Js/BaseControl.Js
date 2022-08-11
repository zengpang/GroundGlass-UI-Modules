let $controlContainers=document.querySelectorAll(`.container`);
let isSupport=CSS.supports("backdrop-filter","blur(12px)");
let $=s=>document.querySelector(s);
let $$=s=>document.querySelectorAll(s);
let in$=(f,s)=>f.querySelector(s);
let in$$=(f,s)=>f.querySelectorAll(s);