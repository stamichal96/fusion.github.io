import {overlayPages} from "./changeOverlay.js";
import {animateContact} from "./animations.js";

const contactBtn = document.querySelector('.contact');

contactBtn.addEventListener("click", function() {
    loadContact();
    overlayPages();
});

const loadContact = () => {
    document.querySelector('.page').innerHTML = 
        `<section id="contact-page">
        <div class="contact-sec">
            <div class="country">Poland</div>
            <div class="contact-bar"></div>

            <div class="address">
                <i class="fas fa-map-marker"></i>
                <p>Random Street XX/XX<br>
                    City name, XX-XXX</p>
            </div>

            <div class="phone">
                <i class="fas fa-phone"></i>
                <p>+48 999 999 999<br>
                    +48 111 111 111</p>
            </div>

            <div class="mail">
                <i class="fas fa-envelope"></i>
                <p>random.email@something.pl</p>
            </div>
        </div>
        <div class="contact-sec">
            <div class="country">UK</div>
            <div class="contact-bar"></div>

            <div class="address">
                <i class="fas fa-map-marker"></i>
                <p>Random Street XX/XX<br>
                    City name, XXX XXX</p>
            </div>

            <div class="phone">
                <i class="fas fa-phone"></i>
                <p>+44 999 999 999<br>
                    +44 111 111 111</p>
            </div>

            <div class="mail">
                <i class="fas fa-envelope"></i>
                <p>random.email@something.uk</p>
            </div>
        </div>

        <div id="social">
            <span>Be social with us</span>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </div>
    </section>`
    animateContact();
}