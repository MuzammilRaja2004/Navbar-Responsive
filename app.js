const menu = document.querySelector('#mobile__menu')
const menulinks = document.querySelector('.navbar__menu')
const navlogo = document.querySelector('.navbar__logo')
const body = document.querySelector('body')

// Display Mobile Menu
const mobilemenu = () =>{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
    body.classList.toggle('active')
};

menu.addEventListener('click',mobilemenu);