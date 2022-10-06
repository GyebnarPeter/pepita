const navBtn = document.querySelectorAll(".nav-btn");
navBtn.forEach((btn) => {
    btn.onclick = () => {

        // if you click on any navigation button, the menu floats in and shifts the content of the page
        document.querySelector(".nav").classList.toggle("nav-open");
        document.querySelector(".content").classList.toggle("content-offset");

        // the logo disappears and a button to close navigation appears instead
        document.querySelector(".header__logo").classList.toggle("display");
        document.querySelector(".nav-btn--hide").classList.toggle("display");
    };
});
