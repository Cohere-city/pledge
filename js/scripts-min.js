"use strict";
// OVERLAY
function setParallax(e,o){o.style.transform="translateY(".concat(e,"px)")}function scrollLoop(){var e=document.querySelector(".manifesto-body"),o=document.body.scrollTop,l,t=e.getBoundingClientRect().top,a;setParallax(-.2*Math.floor(o+t),manifesto),requestAnimationFrame(scrollLoop)}// SCROLL ANIMATIONS
var openSign=document.getElementById("openSign"),closeSign=document.getElementById("closeSign"),overlay=document.querySelectorAll("#overlay");openSign.onclick=function(){var e=!0,o=!1,l=void 0;try{for(var t=overlay[Symbol.iterator](),a;!(e=(a=t.next()).done);e=!0){var n;a.value.classList.toggle("closed")}}catch(e){o=!0,l=e}finally{try{e||null==t.return||t.return()}finally{if(o)throw l}}},closeSign.onclick=function(){var e=!0,o=!1,l=void 0;try{for(var t=overlay[Symbol.iterator](),a;!(e=(a=t.next()).done);e=!0){var n;a.value.classList.toggle("closed")}}catch(e){o=!0,l=e}finally{try{e||null==t.return||t.return()}finally{if(o)throw l}}};// PARALLAX
var manifesto=document.querySelector(".manifesto");window.addEventListener("DOMContentLoaded",scrollLoop,!1),ScrollReveal().reveal(".comment-name",{interval:100}),ScrollReveal().reveal(".manifesto-body h1",{delay:600}),ScrollReveal().reveal(".manifesto-body p",{delay:300,distance:"30px",duration:800}),ScrollReveal().reveal(".manifesto-quote",{delay:1e3,distance:"60px"}),ScrollReveal().reveal(".manifesto-meta",{delay:600,duration:1e3});
//# sourceMappingURL=scripts-min.js.map