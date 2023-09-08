// FUNÇÃO PARA ABRIR/FECHAR MENU MOBILE E ANIMAR BOTÃO HAMBURGUER

const menuMobile = document.querySelector('.menu');
const firstBarBtnMenuBurguer = document.querySelector('.span-1');
const secondBarBtnMenuBurguer = document.querySelector('.span-2');
const thirdBarBtnMenuBurguer = document.querySelector('.span-3');

function openCloseMenu(){
    menuMobile.classList.toggle('anima-menu');
    firstBarBtnMenuBurguer.classList.toggle('anima-span-1');
    secondBarBtnMenuBurguer.classList.toggle('anima-span-2');
    thirdBarBtnMenuBurguer.classList.toggle('anima-span-3');
}

// ABRE/FECHA MENU MOBILE

const btnMenuBurguer = document.querySelector('#btn-burguer');

btnMenuBurguer.addEventListener('click', () => {

    openCloseMenu();
});

// FECHA MENU MOBILE QUANDO CLICAR EM ITENS DO MENU

let redesSociaisMenuMobile = document.querySelectorAll('.container-sociais .bx');
let itensMenuMobile = document.querySelectorAll('.itens-menu-mobile');

redesSociaisMenuMobile.forEach(sociais => {
    sociais.addEventListener('click', () => {
        
        openCloseMenu();
    });
});

itensMenuMobile.forEach(item => {
    
    item.addEventListener('click', () => {
        
        openCloseMenu();
    });
});

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

// BOTÃO "IR PARA O TOPO"

const btnIrParaTopo = document.querySelector('#btn-topo');

window.addEventListener('scroll', () => {

    if(scrollY >= 900) {
        btnIrParaTopo.style.display = 'block';
    } else{
        btnIrParaTopo.style.display = 'none';
    }
});