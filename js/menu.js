const menuText = document.getElementsByClassName(`menu__text`)[0];
const menu = document.querySelector(`nav ul`);
const socials = document.querySelector(`aside`);

menuText.addEventListener(`click`, () => {
    (menu.classList.contains(`--visible`)) ? menu.classList.remove(`--visible`) : menu.classList.add(`--visible`);
    (socials.classList.contains(`--visible`)) ? socials.classList.remove(`--visible`) : socials.classList.add(`--visible`);
});