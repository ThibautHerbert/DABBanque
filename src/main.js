let containerHome = document.querySelector('.container-home');
let btnHome = document.querySelector('.btn-home');
let container = document.querySelector('.container-hidden');

const removeVeille = () => {
    btnHome.style.display = "none";
    console.log('cliqué');
};

btnHome.addEventListener('click', () => {
    //btnHome.removeVeille();
    btnHome.style.display = "none";
    container.style.display = "block";
});

