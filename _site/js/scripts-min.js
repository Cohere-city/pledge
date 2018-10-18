'use strict';

// OVERLAY
var openSign = document.getElementById('openSign');
var closeSign = document.getElementById('closeSign');
var overlay = document.querySelectorAll('#overlay');

openSign.onclick = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = overlay[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var x = _step.value;

            x.classList.toggle('closed');
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
closeSign.onclick = function () {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = overlay[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var x = _step2.value;

            x.classList.toggle('closed');
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
};

// PARALLAX
var manifesto = document.querySelector('.manifesto');

function setParallax(yPos, el) {
    el.style.transform = 'translateY(' + yPos + 'px)';
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

function scrollLoop() {
    var elem = document.querySelector('.manifesto-body');
    var distanceScrolled = document.body.scrollTop;
    var elemRect = elem.getBoundingClientRect();
    var elemViewportOffset = elemRect.top;

    var totalOffset = Math.floor(distanceScrolled + elemViewportOffset);

    setParallax(totalOffset * -0.2, manifesto);

    requestAnimationFrame(scrollLoop);
}
