//BOAS VINDAS

let nomeUsuario = prompt('QUAL É O SEU NOME?');
let msgOla = document.querySelector('.boas-vindas');

if(nomeUsuario == null || undefined) {

    msgOla.innerHTML= `<span style="color: var(--cor-destaque);" class="material-symbols-outlined">emoji_people</span>Olá! Estou feliz que você tenha reservado um tempinho para visitar meu site. Seja muito bem vindo(a). Espero que goste!`;

} else {

    msgOla.innerHTML = `<span style="color: var(--cor-destaque);" class="material-symbols-outlined">emoji_people</span>Olá <span style="color: var(--cor-destaque);"><strong>${nomeUsuario.toUpperCase()}</strong></span>, estou feliz que você tenha reservado um tempinho para visitar meu site. Seja muito bem vindo(a). Espero que goste!`;
}

// OPEN/CLOSE MENU

let checkboxOpenClose = document.querySelector('#checkbox-open-close');
let header = document.querySelector('#header');
let iconBurguer = document.querySelector('#btn-burguer');
let iconX = document.querySelector('#btn-x');

checkboxOpenClose.addEventListener('click', () => {

    if(checkboxOpenClose.checked == false) {

        header.style.left = '0';
        iconX.style.display = 'block';
        iconBurguer.style.display = 'none';

    } else {

        header.style.left = '-999px';
        iconX.style.display = 'none';
        iconBurguer.style.display = 'block';
    }
});

// TEMA DARK/LIGHT

let checkboxTema = document.querySelector('#checkbox-tema');
let lua = document.querySelector('#btn-moon');
let lampada = document.querySelector('#btn-lampada');

checkboxTema.addEventListener('click', () => {

    if(checkboxTema.checked != true) {
        
        window.document.body.classList.toggle('light');
        lampada.style.display = 'none';
        lua.style.display = 'block';
        
    } else {
        
        window.document.body.classList.remove('light');
        lampada.style.display = 'block';
        lua.style.display = 'none';
    }
});