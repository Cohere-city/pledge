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
const media = document.querySelector('.header-media');
const graphicText = document.querySelector('.graphic-text');
function setParallax(yPos, xPos, el) {
    el.style.transform = `translateY(${yPos}px)`;
    graphicText.style.transform = `translateY(${yPos * 2}px) translateX(${xPos}vw)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false)

function scrollLoop() {
    let elemRect = media.getBoundingClientRect()
    let elemViewportOffset = elemRect.top

    let totalOffset = Math.floor(elemViewportOffset)
    setParallax(totalOffset * -0.2, totalOffset * 0.3 / 2 + 150, media)

    requestAnimationFrame(scrollLoop)
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