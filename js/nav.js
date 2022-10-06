const toggleNav = () => {
    // if you click on any navigation button, the menu floats in and shifts the content of the page
    document.querySelector(".nav").classList.toggle("nav-open");
    document.querySelector(".content").classList.toggle("content-offset");

    // the logo disappears and a button to close navigation appears instead
    document.querySelectorAll(".toggle-item").forEach( item => {
        item.classList.toggle("display");
    })
}

const navButtons = document.querySelectorAll(".nav-btn");

for(const btn of navButtons) {
    btn.addEventListener("click", toggleNav)
};
