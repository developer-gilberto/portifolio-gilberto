// FUNÇÃO PARA ABRIR/FECHAR MENU MOBILE E ANIMAR BOTÃO HAMBURGUER

const btnMenuBurguer = document.querySelector('#btn-burguer');
const menuMobile = document.querySelector('.menu');
const barra1BtnMenuBurguer = document.querySelector('.span-1');
const barra2BtnMenuBurguer = document.querySelector('.span-2');
const barra3BtnMenuBurguer = document.querySelector('.span-3');

function openCloseMenu(){
    menuMobile.classList.toggle('anima-menu');
    barra1BtnMenuBurguer.classList.toggle('anima-span-1');
    barra2BtnMenuBurguer.classList.toggle('anima-span-2');
    barra3BtnMenuBurguer.classList.toggle('anima-span-3');
}

// ABRE/FECHA MENU MOBILE

btnMenuBurguer.addEventListener('click', () => {

    openCloseMenu();
});

// FECHA MENU MOBILE QUANDO CLICAR EM ITENS DO MENU

let itensMenuMobile = document.querySelector('.menu ul');

itensMenuMobile.addEventListener('click', () => {

    openCloseMenu();
})

// DARK MODE

const btnTema = document.querySelector('#btn-tema');
const html = document.querySelector('html');
const interruptorBtnTema = document.querySelector('.ball');

btnTema.addEventListener('click', () => {

    interruptorBtnTema.classList.toggle('anima-ball');
    html.classList.toggle('dark');
});

// ALERT "EM BREVE"

const linkLinkedin = document.querySelector('#linkedin');
const linkYoutube = document.querySelector('#yt');

linkLinkedin.addEventListener('click', () => {
    alert('EM BREVE!!!');
});

linkYoutube.addEventListener('click', () => {
    alert('EM BREVE!!!');
});