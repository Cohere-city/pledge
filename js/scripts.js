// SUBMIT TWO FORMS
let submitForms = function () {
    document.getElementById("sign").submit();
    document.getElementById("email").submit();
}

// OVERLAY
const openSign = document.getElementById('openSign')
const closeSign = document.getElementById('closeSign')
const overlay = document.querySelectorAll('#overlay')
openSign.onclick = function () {
    for (let x of overlay) {
        x.classList.toggle('closed')
    }
}
closeSign.onclick = function () {
    for (let x of overlay) {
        x.classList.toggle('closed')
    }
}

// PARALLAX
//const media = document.querySelector('.header-media');
const graphicTextWrap = document.querySelector('.graphic-text__wrap');
const graphicText = document.querySelector('.graphic-text');
function setParallax(yPos, xPos, el) {
    el.style.transform = `translateY(${yPos}px) translateX(${xPos}px)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false)

function scrollLoop() {
    let wrapRect = graphicTextWrap.getBoundingClientRect();
    let elemRect = graphicText.getBoundingClientRect();
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    let totalOffset = Math.floor((wrapRect.top / -(elemRect.width/h*1.5)) - h/1.33);
    let totalDist = wrapRect.top*2 - h + w;
    setParallax(totalOffset, totalDist, graphicText);

    requestAnimationFrame(scrollLoop);
}

// SCROLL ANIMATIONS
ScrollReveal().watch = function (target, onEnter, onExit) {

    onExit = onExit || function () {}

    if (typeof onEnter === 'function' && typeof onExit === 'function') {
        var noEffect = {
            delay:    0,
            distance: 0,
            duration: 0,
            scale:    1,
            opacity:  null,
            rotate:   { x: 0, y: 0, z: 0, },

            reset: true,
            beforeReset: onExit,
            beforeReveal: onEnter,
        }
        this.reveal(target, noEffect)
    } else {
        throw new Error('Watch received invalid arguments.')
    }
}

ScrollReveal().watch('.manifesto-body span',
    function onEnter (el) {
        el.classList.add('active')
    },
    function onExit (el) {
        el.classList.remove('active')
    }
)

ScrollReveal().reveal('.comment-name', {
    interval: 100
})