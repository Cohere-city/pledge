"use strict";function setParallax(e,o){o.style.transform="translateY("+e+"px)"}function scrollLoop(){var e=document.querySelector(".manifesto-body"),o=document.body.scrollTop,t=e.getBoundingClientRect(),n=t.top;setParallax(-.2*Math.floor(o+n),manifesto),requestAnimationFrame(scrollLoop)}var openSign=document.getElementById("openSign"),closeSign=document.getElementById("closeSign"),overlay=document.querySelectorAll("#overlay");openSign.onclick=function(){var e=!0,o=!1,t=void 0;try{for(var n=overlay[Symbol.iterator](),r;!(e=(r=n.next()).done);e=!0){r.value.classList.toggle("closed")}}catch(e){o=!0,t=e}finally{try{!e&&n.return&&n.return()}finally{if(o)throw t}}},closeSign.onclick=function(){var e=!0,o=!1,t=void 0;try{for(var n=overlay[Symbol.iterator](),r;!(e=(r=n.next()).done);e=!0){r.value.classList.toggle("closed")}}catch(e){o=!0,t=e}finally{try{!e&&n.return&&n.return()}finally{if(o)throw t}}};var manifesto=document.querySelector(".manifesto");window.addEventListener("DOMContentLoaded",scrollLoop,!1);