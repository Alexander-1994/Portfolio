// Добавление интерактивности нашему меню
const hamburgerElem = document.querySelector('.hamburger'),                   /* константы. В начале нужно получить элементы, с которыми будет взаимодействие */
    menuElem = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlayElem = document.querySelector('.menu__overlay');

hamburgerElem.addEventListener('click', () => {
    menuElem.classList.add('active')
});
closeElem.addEventListener('click', () => {
    menuElem.classList.remove('active')
});
overlayElem.addEventListener('click', () => {                                 /* +я еще добавил, что при клике на "затемнение" рядом с меню, оно так же скроется */
    menuElem.classList.remove('active')
});

// Добавление интерактивности индикаторам
const counters = document.querySelectorAll('.skills__ratings-indicator'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});



// .querySelector()-команда, позволяющая получать элемент по селектору;
// .addEventListener('click', () => -команда, отслеживающая все клики (в данном случае) и вызывающая после этого опред. функцию;
// .classList.add()-команда, добавляющая элементу определенный класс;
// .classList.remove()-команда, убирающая у элемента определенный класс;
// .forEach((item, i) => -метод, который проходится по "хранилищу" опред. элементов и что-то делает с каждым из них (вызов функции);
// .innerHTML-команда, позволяющая вытащить содержимое опред. элемента;