const hamburgerBtn = document.querySelector('.hamburger')! as HTMLButtonElement;
const closeBtn = document.querySelector('.closeBtn')! as HTMLButtonElement;
const menuBackdrop = document.querySelector('.menu-backdrop')! as HTMLDivElement;

hamburgerBtn.addEventListener('click', toggleMenu, false);
closeBtn.addEventListener('click', toggleMenu, false);

function toggleMenu() {
  if (menuBackdrop.classList.contains('showMenu')) {
    menuBackdrop.classList.remove('showMenu');
  } else {
    menuBackdrop.classList.add('showMenu');
  }
}
