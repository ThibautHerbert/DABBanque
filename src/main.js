let containerHome = document.querySelector('.container-home');
let btnHome = document.querySelector('.btn-home');
let logoHome = document.querySelector('.logo-home');
let container = document.querySelector('.container-hidden');
let btnOut = document.querySelector('.btn-out');
let test = document.querySelector('.test');

let withdraw = document.querySelector('.withdraw');
let deposit = document.querySelector('.deposit');
let solde = document.querySelector('.solde');
let transfer = document.querySelector('.transfer');

/*
const removeVeille = () => {
    btnHome.style.display = "none";
    console.log('cliqué');
};
*/
btnHome.addEventListener('click', () => {
    //btnHome.removeVeille();
    btnHome.style.display = "none";
    containerHome.style.zIndex = -200;
    logoHome.style.display = "none";
    container.style.display = "block";
    //container.style.zIndex = +300;
    if (container.style.display = "block") {
        btnOut.addEventListener('click', () => {
            container.style.display = "none";
            btnHome.style.display = "block";
            logoHome.style.display = "block";
            containerHome.style.zIndex = 200;
            //console.log('quitté');
        });
    }
});
withdraw.addEventListener('click', () => {
    console.log('retrait');
});
deposit.addEventListener('click', () => {
    console.log('dépôt');
});
solde.addEventListener('click', () => {
    console.log('solde');
});
transfer.addEventListener('click', () => {
    console.log('virement');
});


