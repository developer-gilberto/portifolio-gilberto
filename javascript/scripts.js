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

// FECHA MENU MOBILE AO CLICAR NO OVERLAY

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

// NOTIFICAÇÃO PARA YOUTUBE E LINKEDIN

const linkLinkedin = document.querySelector('#linkedin');
const linkYoutube = document.querySelector('#yt');

linkLinkedin.addEventListener('click', () => {
    alert('EM BREVE...');
});
linkYoutube.addEventListener('click', () => {
    alert('EM BREVE...');
});

// DARK MODE

const btnTema = document.querySelector('#btn-tema');
const html = document.querySelector('html');
const interruptorBtnTema = document.querySelector('.ball');

btnTema.addEventListener('click', () => {
    interruptorBtnTema.classList.toggle('anima-ball');
    html.classList.toggle('dark');
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

// BOAS VINDAS AO USUÁRIO

const btnComoQuerSerChamado = document.querySelector('.btn-como-quer-ser-chamado');

btnComoQuerSerChamado.addEventListener('click', () => {
    let userName = prompt('DIGITE SEU NOME...');
    let data = new Date();
    let horaAtual = data.getHours();
    // let horaAtual = 6; TESTAR HORAS MANUALMENTE
    let bomDiaTardeNoite;
    const boasVindas = document.querySelector('.boas-vindas');
    const olaUser = document.querySelector('.ola-fulano');
    const entaoFulano = document.querySelector('.entao');
    const contatoUser = document.querySelector('.contato-user');

        if(horaAtual == 0 || horaAtual < 6){
            bomDiaTardeNoite = 'Boa madrugada';
        }
        else if(horaAtual >= 6 && horaAtual < 12){
            bomDiaTardeNoite = 'Bom dia';
        }
        else if(horaAtual >= 12 && horaAtual < 18){
            bomDiaTardeNoite = 'Boa tarde';
        }
        else if(horaAtual >= 18 && horaAtual <= 23){
            bomDiaTardeNoite = 'Boa noite';
        };
        
        if(userName == null || userName == "" || userName == undefined){
            alert(`[ERRO] \n Ops! Parece que você não digitou seu nome. \n Por favor tente novamente.`);
            
            openCloseMenu();
        }   
        else {
            boasVindas.innerHTML = 
            `
                <span id="acenando" class="material-symbols-outlined">emoji_people</span>
                ${bomDiaTardeNoite} <span id="user-name">${userName.toUpperCase()}</span>.<br>
                É um prazer receber sua agradável visita ao meu site. Seja muito bem vindo(a)! Espero que goste.
            `
            olaUser.innerHTML =
            `
            👋 Olá <span id="user-name">${userName.toUpperCase()}</span>, prazer em te conhecer, meu nome é Gilberto Lopes.
            `
            entaoFulano.innerHTML =
            `
            Então <span id="user-name">${userName.toUpperCase()}</span>, aqui você encontra alguns dos projetos que fiz com o objetivo de praticar os conhecimentos que estou adquirindo. Clique em "Visitar projeto" para acessar o deploy do projeto ou, caso queira analisar o código e saber como o projeto foi feito, clique em "Código fonte". Observação: Todos os projetos são responsivos.
            `
            contatoUser.innerHTML =
            `
            Eai <span id="user-name">${userName.toUpperCase()}</span>, gostou? Então entre em contato para contratar-me, dar dicas, sugestões de melhorias ou até mesmo relatar bugs.
            `
            openCloseMenu();
        };
});