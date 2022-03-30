// Создание интерактивности нашему меню
const hamburgerElem = document.querySelector('.hamburger'),     /* константы */
    menuElem = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlayElem = document.querySelector('.menu__overlay');

hamburgerElem.addEventListener('click', () => {
    menuElem.classList.add('active')
});
closeElem.addEventListener('click', () => {
    menuElem.classList.remove('active')
});
overlayElem.addEventListener('click', () => {                   /* +я еще добавил, что при клике на "затемнение" рядом с меню, оно так же скроется */
    menuElem.classList.remove('active')
});
// .querySelector-команда, позволяющая получать элемент по селектору; .addEventListener-команда, отслеживающая(все клики в данном случае); .classList.add-команда, добавляющая элементу определенный класс; .classList.remove-команда, убирающая у элемента определенный класс.