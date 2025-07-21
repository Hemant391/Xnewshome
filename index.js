const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('menu-close');
const navbar = document.getElementById('navbar');

menuButton.addEventListener('click', () => {
  navbar.classList.add('open');
});

closeButton.addEventListener('click', () => {
  navbar.classList.remove('open');
});
