const THUMBNAILS = document.querySelectorAll('[class^="thumbnail"] img');
const POPUP = document.querySelector(".popup");
const IMG_POPUP = document.querySelector(".popup img");

THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
    IMG_POPUP.setAttribute("src", thumbnail.getAttribute("src"));
        if(POPUP.classList.contains("hidden")) {
            POPUP.classList.remove("hidden");
        } 
        else {
            POPUP.classList.add("hidden");
        }
    });
});
POPUP.addEventListener("click", () => {
    if(POPUP.classList.contains("hidden")) {
        POPUP.classList.remove("hidden");
    } 
    else {
        POPUP.classList.add("hidden");
    }
});