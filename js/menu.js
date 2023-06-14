const menuText = document.getElementsByClassName(`menu__text`)[0];
const menu = document.querySelector(`nav ul`);

menuText.addEventListener(`click`, () => {
    (menu.classList.contains(`--visible`)) ? menu.classList.remove(`--visible`) : menu.classList.add(`--visible`);
});