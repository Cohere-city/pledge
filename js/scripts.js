// OVERLAY
let openSign = document.getElementById('openSign')
let closeSign = document.getElementById('closeSign')
let overlay = document.querySelectorAll('#overlay')

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
var manifesto = document.querySelector('.manifesto');

function setParallax(yPos, el) {
    el.style.transform = `translateY(${yPos}px)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false)

function scrollLoop() {
    var elem = document.querySelector('.manifesto-body')
    var distanceScrolled = document.body.scrollTop
    var elemRect = elem.getBoundingClientRect()
    var elemViewportOffset = elemRect.top

    var totalOffset = Math.floor(distanceScrolled + elemViewportOffset)

    setParallax(totalOffset * -0.2, manifesto)

    requestAnimationFrame(scrollLoop)
}

// SCROLL ANIMATIONS

ScrollReveal().reveal('.comment-name', {
    interval: 100,

})

ScrollReveal().reveal('.manifesto-body h1', {
    delay: 600,
})

ScrollReveal().reveal('.manifesto-body p', {
    delay: 300,
    distance: '30px',
    duration: 800
})

ScrollReveal().reveal('.manifesto-quote', {
    delay: 1000,
    distance: '60px'
})

ScrollReveal().reveal('.manifesto-meta', {
    delay: 600,
    duration: 1000
})