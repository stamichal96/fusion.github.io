import {loadProds} from "./loadProductsPage.js";
import {loadHome} from "./loadHomePage.js";
import {overlayHome, overlayPages} from "./changeOverlay.js";

const button = document.querySelector('.btn');

button.addEventListener("click", function() {
    if (button.innerHTML === "Get started") {
        loadProds();
        overlayPages();
    } else {
        loadHome();
        overlayHome();
    }
});

export {button};