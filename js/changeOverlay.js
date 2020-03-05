import {button} from "./button.js";

const overlayPages = () => {
    let fas = document.createElement('i');
    fas.classList.add('fas');
    fas.classList.add('fa-backward');

    button.innerHTML = "";
    button.appendChild(fas);
    button.append("Back");
}

const overlayHome = () => {
    button.innerHTML = "Get started";
}

export {overlayPages, overlayHome};