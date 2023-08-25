// ABRE/FECHA MENU, ANIMA BOTÃO MENU

const btnMenu = document.querySelector('#btn-burguer');
const menu = document.querySelector('.menu');
const span1 = document.querySelector('.span-1');
const span2 = document.querySelector('.span-2');
const span3 = document.querySelector('.span-3');

function openCloseMenu(){
    menu.classList.toggle('anima-menu');
    span1.classList.toggle('anima-span-1');
    span2.classList.toggle('anima-span-2');
    span3.classList.toggle('anima-span-3');
}

btnMenu.addEventListener('click', () => {

    openCloseMenu();
});

// FECHA MENU QUANDO CLICAR EM ITENS DO MENU 

let itensMenu = document.querySelector('.menu ul');

itensMenu.addEventListener('click', () => {

    openCloseMenu();
})

// DARK MODE

const btnTema = document.querySelector('.btn-tema');
const html = document.querySelector('html');
const ball = document.querySelector('.ball');

btnTema.addEventListener('click', () => {

    ball.classList.toggle('anima-ball');
    html.classList.toggle('dark');
});