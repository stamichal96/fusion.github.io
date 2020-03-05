import {overlayPages} from "./changeOverlay.js";
import {animateAbout} from "./animations.js";

const aboutBtn = document.querySelector('.about');

aboutBtn.addEventListener("click", function() {
    loadAbout();
    overlayPages();
    animateAbout();
})

const loadAbout = () => {
    document.querySelector('.page').innerHTML =
    `<section id="about-page">

        <section id="about">
            <div id="text-section">
                <div class="about-bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium nec elit non aliquam.<br><br>
                Aenean ultricies fermentum odio. Nunc sit amet odio finibus, tempor neque sed, viverra tortor. <br><br>
                Aliquam quis dui nulla. Duis maximus pretium nulla, eu vehicula nibh sodales ut.<br><br>
                Praesent purus nulla, commodo nec molestie sed, imperdiet ac mauris.</p>
                <div class="about-bar"></div>
            </div>
            <div id="slideshow">Place for a slideshow/image</div>
        </section>
    </section>`;
}