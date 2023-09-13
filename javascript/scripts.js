// FUNÇÃO PARA ABRIR/FECHAR MENU MOBILE E ANIMAR BOTÃO HAMBURGUER

const menuMobile = document.querySelector('.menu');
const firstBarBtnMenuBurguer = document.querySelector('.span-1');
const secondBarBtnMenuBurguer = document.querySelector('.span-2');
const thirdBarBtnMenuBurguer = document.querySelector('.span-3');
const overlay = document.querySelector('.overlay');

function openCloseMenu(){

    menuMobile.classList.toggle('anima-menu');
    firstBarBtnMenuBurguer.classList.toggle('anima-span-1');
    secondBarBtnMenuBurguer.classList.toggle('anima-span-2');
    thirdBarBtnMenuBurguer.classList.toggle('anima-span-3');
    overlay.classList.toggle('open-overlay');
};

// ABRE/FECHA MENU MOBILE

const btnMenuBurguer = document.querySelector('#btn-burguer');

btnMenuBurguer.addEventListener('click', () => {

    openCloseMenu();
});

overlay.addEventListener('click', () => {

    openCloseMenu();
});

// FECHA MENU MOBILE QUANDO CLICAR EM ITENS DO MENU

let redesSociaisMenuMobile = document.querySelectorAll('.container-sociais .bx');
let itensMenuMobile = document.querySelectorAll('.itens-menu-mobile');

itensMenuMobile.forEach(item => {
    
    item.addEventListener('click', () => {
        
        openCloseMenu();
    });
});
redesSociaisMenuMobile.forEach(sociais => {

    sociais.addEventListener('click', () => {
        
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

// NOTIFICAÇÃO PARA YOUTUBE E LINKEDIN

const linkLinkedin = document.querySelector('#linkedin');
const linkYoutube = document.querySelector('#yt');

linkLinkedin.addEventListener('click', () => {
    alert('EM BREVE...');
});

linkYoutube.addEventListener('click', () => {
    alert('EM BREVE...');
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

// SLIDE PROJETOS

const arrowLeft = document.querySelector('.bxs-left-arrow-circle');
const arrowRight = document.querySelector('.bxs-right-arrow-circle');
const containerProjetos = document.querySelector('.container-projetos');

let pixelsMoverX = 360;

arrowLeft.addEventListener('click', () => {
    
    pixelsMoverX += 360;
    containerProjetos.style.transform = `translateX(${pixelsMoverX}px)`;
});

arrowRight.addEventListener('click', () => {

    pixelsMoverX -= 360;
    containerProjetos.style.transform = `translateX(${pixelsMoverX}px)`;
});