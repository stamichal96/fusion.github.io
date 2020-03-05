document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('#hamburger');

    hamburger.addEventListener('click', () => {
        document.querySelector('#logo').style.right = "17%";
        document.querySelector('main').style.right = "17%";
        document.querySelector('.page').style.right = "17%";
        hamburger.style.right = "15%";
        hamburger.style.opacity = "0";
        hamburger.style.pointerEvents = "none";

        document.querySelector('menu').style.right = "0";
    });

    const close = document.querySelector('.fa-times');

    close.addEventListener('click', () => {
        document.querySelector('#logo').style.right = "0";
        document.querySelector('main').style.right = "0";
        document.querySelector('.page').style.right = "0";
        hamburger.style.right = "10%";
        hamburger.style.opacity = "1";
        hamburger.style.pointerEvents = "all";

        document.querySelector('menu').style.right = "-17%";
    });
})