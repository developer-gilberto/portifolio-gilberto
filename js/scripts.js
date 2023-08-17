// OPEN / CLOSE MENU

let checkboxOpenClose = document.querySelector('#checkbox-open-close');
let header = document.querySelector('#header');
let iconBurguer = document.querySelector('#btn-burguer');
let iconX = document.querySelector('#btn-x');

checkboxOpenClose.addEventListener('click', () => {

    if(checkboxOpenClose.checked == false) {

        header.style.left = '0';
        iconX.style.display = 'block'
        iconBurguer.style.display = 'none'
    } else {

        header.style.left = '-999px';
        iconX.style.display = 'none'
        iconBurguer.style.display = 'block'
    }
});

// TEMA DARK/LIGHT

