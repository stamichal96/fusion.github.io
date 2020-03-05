import {overlayPages} from "./changeOverlay.js";
import {animateProds} from "./animations.js";

const productsBtn = document.querySelector('.products');

productsBtn.addEventListener("click", function() {
    loadProds();
    overlayPages();
});

const loadProds = () => {
    document.querySelector('.page').innerHTML = `<section id="products">
    <div class="fusion-desc">
        <h1>Fusion Energy</h1>
        <div class="bar energy"></div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque odio diam, pharetra a arcu interdum, convallis porta velit. 
            Phasellus mollis enim eros, vel posuere nibh pretium sed.
        </p>
    </div>
    <img id="energy-img" src="./img/fusion-energy-bottle.png" alt="fusion-energy">

    <div class="fusion-desc">
        <h1>Fusion Impact</h1>
        <div class="bar impact"></div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque odio diam, pharetra a arcu interdum, convallis porta velit. 
            Phasellus mollis enim eros, vel posuere nibh pretium sed.
        </p>
    </div>
    <img id="impact-img" src="./img/fusion-impact-bottle.png" alt="fusion-impact">
    </section>`;
    animateProds();
}

export {loadProds};