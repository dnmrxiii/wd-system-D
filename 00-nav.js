function toggleMenu() {
    const mainMenu = document.querySelector('.mainMenu');
    mainMenu.classList.toggle('active');
}

document.querySelector('.tootle-menu').addEventListener('click', toggleMenu);