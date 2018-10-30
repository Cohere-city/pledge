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

function setParallax(yPos, el) {
    el.style.transform = `translateY(${yPos}px)`;
    console.log(yPos)
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

ScrollReveal().reveal('.comment-name', {
    interval: 100
})