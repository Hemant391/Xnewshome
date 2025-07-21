const hamburger = document.getElementById('hamburger-icon');
const closeMenu = document.getElementById('menu-close');
const nav = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  nav.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  nav.classList.remove('open');
});
