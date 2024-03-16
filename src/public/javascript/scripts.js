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

const checkboxMenuBurguer = document.querySelector('#checkbox_menu_hamburguer');
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

// DARK/LIGHT MODE

const interruptorBtnTema = document.querySelector('.ball');
const iphone = document.querySelectorAll('.iphone');
const html = document.querySelector('html');
const checkboxDarkMode = document.querySelector('#checkbox_mode_dark_light');

checkboxDarkMode.addEventListener('change', () => {

    if(checkboxDarkMode.checked){
        interruptorBtnTema.classList.remove('anima-ball');
        html.classList.remove('light');
        iphone.forEach(iphone => {
            iphone.classList.remove('branco');
        });

        checkboxDarkMode.checked = true;
        localStorage.setItem('darkMode', JSON.stringify(true));
    } else {
        interruptorBtnTema.classList.add('anima-ball');
        html.classList.add('light');
        iphone.forEach(iphone => {
            iphone.classList.add('branco');
        });

        checkboxDarkMode.checked = false;
        localStorage.setItem('darkMode', JSON.stringify(false));
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const darkMode = JSON.parse(localStorage.getItem('darkMode'));

    if(darkMode || darkMode == null || darkMode == undefined){
        checkboxDarkMode.checked = true;

        interruptorBtnTema.classList.remove('anima-ball');
        html.classList.remove('light');
        iphone.forEach(iphone => {
            iphone.classList.remove('branco');
        });
    } else {
        interruptorBtnTema.classList.add('anima-ball');
        html.classList.add('light');
        iphone.forEach(iphone => {
            iphone.classList.add('branco');
        });
    }
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
const spanUserName = document.querySelectorAll('.user-name');

btnComoQuerSerChamado.addEventListener('click', () => {

    const userName = prompt('DIGITE SEU NOME...', "visitante");
    
    localStorage.setItem('userName', JSON.stringify(userName));

    spanUserName.forEach(name => {
        const userNameLocalStorage = JSON.parse(localStorage.getItem('userName'));
        name.innerText = ` ${userNameLocalStorage.toLocaleUpperCase()}`;
    });

    const data = new Date();
    let horaAtual = data.getHours();
    // let horaAtual = 6; // <<= TESTAR AS HORAS MANUALMENTE
    let cumprimentos;
    const bomDiaTardeNoite = document.querySelector('.bomDiaTardeNoite');

        if(horaAtual == 0 || horaAtual < 6){
            cumprimentos = 'Boa madrugada';
        }
        else if(horaAtual >= 6 && horaAtual < 12){
            cumprimentos = 'Bom dia';
        }
        else if(horaAtual >= 12 && horaAtual < 18){
            cumprimentos = 'Boa tarde';
        }
        else if(horaAtual >= 18 && horaAtual <= 23){
            cumprimentos = 'Boa noite';
        };
        
        if(userName == null || userName == "" || userName == undefined || userName == " "){

            alert(`[ERRO] \n Ops! Parece que você não digitou seu nome. \n Por favor tente novamente.`);
            
            openCloseMenu();
        }   
        else {
            bomDiaTardeNoite.innerText = cumprimentos;

            document.querySelector('.mensagemPraUsuarioForm').innerHTML = `Então <span class="user-name">${userName.toUpperCase()}</span>, gostou? Entre em contato através do formulário abaixo ou através das minhas redes sociais para contratar-me, dar dicas, sugestões de melhorias ou até mesmo relatar bugs. Estou à sua disposição ; )`

            openCloseMenu();
        };
});

document.addEventListener('DOMContentLoaded', () => {

    const userNameLocalStorage = JSON.parse(localStorage.getItem('userName'));

    let cumprimentos;
    const bomDiaTardeNoite = document.querySelector('.bomDiaTardeNoite');

    const data = new Date();
    let horaAtual = data.getHours();

    if(horaAtual == 0 || horaAtual < 6){
        cumprimentos = 'Boa madrugada';
    }
    else if(horaAtual >= 6 && horaAtual < 12){
        cumprimentos = 'Bom dia';
    }
    else if(horaAtual >= 12 && horaAtual < 18){
        cumprimentos = 'Boa tarde';
    }
    else if(horaAtual >= 18 && horaAtual <= 23){
        cumprimentos = 'Boa noite';
    };

    bomDiaTardeNoite.innerText = cumprimentos;

    if(!userNameLocalStorage){
        spanUserName.forEach(name => {
            name.innerText = "";
        });
        return;
    }
    spanUserName.forEach(name => {
        
        name.innerText = ` ${userNameLocalStorage.toLocaleUpperCase()}`;

        document.querySelector('.mensagemPraUsuarioForm').innerHTML = `Então <span class="user-name">${userNameLocalStorage.toUpperCase()}</span>, gostou? Entre em contato através do formulário abaixo ou através das minhas redes sociais para contratar-me, dar dicas, sugestões de melhorias ou até mesmo relatar bugs. Estou à sua disposição ; )`
    });
});

// ATUALIZAR ANO DE: "All rights reserved (ano atual)"

const data = new Date();
const anoAtual = data.getFullYear();
document.querySelector('.ano_atual').innerText = anoAtual;