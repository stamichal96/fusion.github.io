import {overlayHome} from "./changeOverlay.js";
import {animateHomeLoad, animateHomeBack} from "./animations.js";

document.addEventListener("DOMContentLoaded", function() {
    loadHome();
    animateHomeLoad();
});

const homeBtn = document.querySelector('.home');

homeBtn.addEventListener("click", function() {
    loadHome();
    overlayHome();
})

const logo = document.querySelector('#logo');

logo.addEventListener("click", function() {
    loadHome();
    overlayHome();
})

const loadHome = () => {
    document.querySelector('.page').innerHTML = `<section id="text-section">
    <h1 id="fusion-text">Fusion.</h1>
    <h2 id="power">Choose the power.</h2>
    <h3 id="champ">Be a champion.</h3>
    </section>`;
    animateHomeBack();
}

export {loadHome};