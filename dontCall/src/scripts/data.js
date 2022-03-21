const dom = document.querySelector('.js-body')
import anime from 'animejs/lib/anime.es.js'

import WOW from './wow';


new WOW().init();



let currentData = new Date();
const month = currentData.getMonth() + 1
let data = currentData.getDate() + '0' + month + '22'


dom.innerHTML = dom.innerHTML.replace(/curData/gi, data)



// Функция для анимации элемента
// anime({
//     // Получаем элемент
//     targets: '.benefits__title',
//     // Перемешаем его по X
//     translateX: 250
// });

anime({
    targets: '.lines-d',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
});


