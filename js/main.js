let carta = document.querySelector('#carta');
let navbar = document.querySelector('.navbar');

carta.onclick = () => {
    carta.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};