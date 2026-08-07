
import header from './modules/header'
import services from './modules/services'
import works from './modules/works'
import reviews from './modules/reviews'
import process from './modules/process'
import date from './modules/date'
import accordion from './modules/accordion'
import categories from './modules/categories'
import indicators from './modules/indicators'
import helper from './modules/helper'
import animation from './modules/animation'
import cta from './modules/cta'
import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function () {
	header()
    animation()
	cta()
	accordion()
	indicators()
    helper()
})
date()


function main () {

    works()
    process()
    services()
    reviews()
    categories()
}

function lazyLoadLibs () {
    const script = document.createElement('script');
    script.src = 'js/libs.js?v=3.0.6';
    document.body.appendChild(script);

    script.onload = function () {
        main()
    }
}

if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll',
        function () {
            return setTimeout(function () {
                lazyLoadLibs()
            }, 1000)
        }, {
        once: true,
        passive: true
    });
} else {
    lazyLoadLibs()
};
