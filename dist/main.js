const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');
const menuBackdrop = document.querySelector('.menu-backdrop');
hamburgerBtn.addEventListener('click', toggleMenu, false);
closeBtn.addEventListener('click', toggleMenu, false);
function toggleMenu() {
    if (menuBackdrop.classList.contains('showMenu')) {
        menuBackdrop.classList.remove('showMenu');
    }
    else {
        menuBackdrop.classList.add('showMenu');
    }
}
