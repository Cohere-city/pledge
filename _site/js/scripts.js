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