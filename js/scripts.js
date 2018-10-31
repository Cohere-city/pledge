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


// WARP IMAGE
const svg = document.getElementById('svg-element')
const warp = new Warp(svg)

warp.interpolate(4)
warp.transform(([ x, y ]) => [ x, y + 4 * Math.sin(x / 16) ])


// PARALLAX
const media = document.querySelector('.header-media');
const graphicText = document.querySelector('.graphic-text');
function setParallax(yPos, el) {
    let xPos = - yPos/2 + 100
    el.style.transform = `translateY(${yPos}px)`;
    graphicText.style.transform = `translateY(${yPos * 2}px) translateX(${xPos}vw)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false)

function scrollLoop() {
    var distanceScrolled = document.body.scrollTop
    var elemRect = media.getBoundingClientRect()
    var elemViewportOffset = elemRect.top

    var totalOffset = Math.floor(distanceScrolled + elemViewportOffset)

    setParallax(totalOffset * -0.2, media)

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