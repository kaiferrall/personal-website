var sections = $('.section');
var menu = $('#menu-message');
var square = $('.square');

var initialPos = square.position().top;

$(window).scroll(throttler(findSectionInView, 30));
$(window).scroll(throttler(animateDot, 0));

function throttler(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

function animateDot() {
    var sT = $(window).scrollTop();
    var pos = initialPos + sT - 20;

    square.css({ top: `${pos}px` });
}

function findSectionInView() {
    sections.each((index, element) => {
        if (isInViewport(element)) {

            var className = element.className.split(' ')[0] + '-active';
            menu.toggleClass(className);

            if (!menu.hasClass(className) && (className != 'name-container' || className != 'links')) {
                menu.empty().append(element.getAttribute('title'));
            } 
        }
    });
}

function isInViewport(elem) {
    var isSkills = elem.className == "skills section row";
    var isLinks = elem.className == "links section row";
    var isProj = elem.className == "portfolio section";

    var bounding = elem.getBoundingClientRect();

    var shift = $(elem).height() > 100 ? $(elem).height() * 0.5 : $(elem).height() * -0.5;

    if ($(elem).height() > $(window).height()) {
        shift = $(elem).height() *  0.75;
    }

    var topCutOff = 0;
    

    if (isSkills && !isLinks) {
        topCutOff = 200;
    } else if (!isSkills && isLinks) {
        topCutOff = 300;
    }

    return (
        bounding.top >= topCutOff &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight + shift || document.documentElement.clientHeight + shift) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

};

/*
var dot = $('.dot');
var initialPos = dot.position();

$(window).scroll(throttler(animateDot, 1));

function throttler(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

function animateDot() {
    var top = $(window).scrollTop();

    var dotPos = initialPos.top + top;

    dot.css({ 'top': `${dotPos}px`});
}
*/