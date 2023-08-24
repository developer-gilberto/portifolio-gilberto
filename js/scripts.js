// TEMA DARK/LIGHT

// DESKTOP

let html = document.querySelector('html');
let checkboxDesktop = document.querySelector('#checkbox-tema-desktop');
let labelTemaDesktop = document.querySelector('#label-tema-desktop');
let interruptor = document.querySelector('.interruptor');

labelTemaDesktop.addEventListener('click', () => {

    if(checkboxDesktop.checked == true){

        interruptor.style.transform = 'translateX(30px)';
        html.classList.add('light');
    } else {

        interruptor.style.transform = 'translateX(0px)';
        html.classList.remove('light');
    }
});


// MOBILE
let checkboxMobile = document.querySelector('#checkbox-tema-mobile');
let labelTemaMobile = document.querySelector('.label-tema-mobile');
let interruptorMobile = document.querySelector('.div-ball-mobile');

labelTemaMobile.addEventListener('click', () => {

    if(checkboxMobile.checked == true){

        interruptorMobile.style.transform = 'translateX(30px)';
        html.classList.add('light');
    } else {

        interruptorMobile.style.transform = 'translateX(0px)';
        html.classList.remove('light');
    }
});


// ÍCONE MENU ANIMADO

let iconMenuMobile = document.querySelector('#checkbox-menu-mobile');
let menuMobile = document.querySelector('.nav-mobile');

let span1 = document.querySelector('.span-1');
let span2 = document.querySelector('.span-2');
let span3 = document.querySelector('.span-3');


iconMenuMobile.addEventListener('click', () => {

    if(iconMenuMobile.checked != true){

        menuMobile.style.transform = 'translateX(0)'
        span1.classList.add('span-1-animado');
        span2.classList.add('span-2-animado');
        span3.classList.add('span-3-animado');
    } else {

        menuMobile.style.transform = 'translateX(320px)'
        span1.classList.remove('span-1-animado');
        span2.classList.remove('span-2-animado');
        span3.classList.remove('span-3-animado');
    }
});

