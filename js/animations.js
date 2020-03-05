const animateHomeLoad = () => {
    const tlHL = new TimelineMax();

    const btn = document.querySelector('button');
    const burger = document.querySelector('#hamburger');

    tlHL.fromTo(btn, 0.2, {transform: 'translateY(900%)', opacity: '0'}, {transform: 'translateY(0)', opacity: '1'})
    .fromTo(logo, 0.2, {transform: 'translateY(500%)', opacity: '0'}, {transform: 'translateY(0)', opacity: '1'}, "-=0.1")
    .fromTo(burger, 0.2, {transform: 'translateY(500%)', opacity: '0'}, {transform: 'translateY(0)', opacity: '1'}, "-=0.1");
}

let pageLoaded = false;

const animateHomeBack = () => {
    const tlHB = new TimelineMax();

    const dude = document.querySelector('#dude');
    const water = document.querySelector('#water');
    const textSec = document.querySelector('#text-section');
    const body = document.querySelector('body');

    if (!pageLoaded) {
        dude.style.filter = "brightness(0.4)";
        pageLoaded = true;
    }

    if (dude.style.filter === "brightness(0.4)") {
        tlHB.fromTo(dude, 0.7, {filter: 'brightness(0.4)'}, {filter: 'brightness(1)'})
        .fromTo(water, 1, {filter: 'brightness(0.3)'}, {filter: 'brightness(1)'}, "-=0.6")
        .fromTo(textSec, 1, {transform: 'translateX(-10%)'}, {transform: 'translateX(0)'}, '-=0.8')
        .fromTo(textSec, 1.1, {opacity: '0'}, {opacity: '1'}, "-=0.7");
    }
    else {
        tlHB.fromTo(textSec, 1, {transform: 'translateX(-10%)'}, {transform: 'translateX(0)'})
        .fromTo(textSec, 1.1, {opacity: '0'}, {opacity: '1'}, "-=0.7");
    }

    tlHB.fromTo(body, 0.1, {pointerEvents: 'none'}, {pointerEvents: 'all'}, "-=0.6");
}

const animateOverlay = () => {

    const dude = document.querySelector('#dude');

    if(dude.style.filter === "brightness(1)") {
        const tlOL = new TimelineMax();

        const water = document.querySelector('#water');
        const body = document.querySelector('body');

        tlOL.fromTo(dude, 0.5, {filter: 'brightness(1)'}, {filter: 'brightness(0.4)'})
        .fromTo(water, 0.7, {filter: 'brightness(1)'}, {filter: 'brightness(0.3)'}, "-=0.5")
        .fromTo(body, 0.1, {pointerEvents: 'none'}, {pointerEvents: 'all'});
    }
}

const animateProds = () => {
    const tlP = new TimelineMax();

    const desc = document.querySelectorAll(".fusion-desc");
    const energy = document.querySelector("#energy-img");
    const impact = document.querySelector("#impact-img");
    
    tlP.fromTo(desc[0], 0.7, {transform: 'translateX(-20%)'}, {transform: 'translateX(0%)'})
    .fromTo(desc[0], 1.1, {opacity: '0'}, {opacity: '1'}, '-=0.4')

    .fromTo(energy, 0.7, {transform: 'translateX(-50%)'}, {transform: 'translateX(0%)'}, '-=1.3')
    .fromTo(energy, 1.1, {opacity: '0'}, {opacity: '1'}, '-=1.1')

    .fromTo(desc[1], 0.7, {transform: 'translateX(20%)'}, {transform: 'translateX(0%)'}, '-=1.3')
    .fromTo(desc[1], 1.1, {opacity: '0'}, {opacity: '1'}, '-=1.1')

    .fromTo(impact, 0.7, {transform: 'translateX(50%)'}, {transform: 'translateX(0%)'}, '-=1.3')
    .fromTo(impact, 1.1, {opacity: '0'}, {opacity: '1'}, '-=1.1');

    animateOverlay();
}

const animateContact = () => {
    const tlC = new TimelineMax();

    const contact = document.querySelectorAll('.contact-sec');
    const social = document.querySelector('#social');

    tlC.fromTo(contact[0], 0.7, {transform: 'translateX(-8%)'}, {transform: 'translateX(0%)'})
    .fromTo(contact[0], 1.1, {opacity: '0'}, {opacity: '1'}, '-=0.4')
    .fromTo(contact[1], 0.7, {transform: 'translateX(8%)'}, {transform: 'translateX(0%)'}, '-=1.3')
    .fromTo(contact[1], 1.1, {opacity: '0'}, {opacity: '1'}, '-=1.1')
    .fromTo(social, 0.7, {transform: 'translateY(60%)'}, {transform: 'translateX(0%)'}, '-=1.3')
    .fromTo(social, 1.1, {opacity: '0'}, {opacity: '1'}, '-=1.1');

    animateOverlay();
}

const animateAbout = () => {
    const tlA = new TimelineMax();

    const textAbout = document.querySelector('#text-section');
    const slideshow = document.querySelector('#slideshow');
    const credits = document.querySelector('#credits');

    tlA.fromTo(textAbout, 0.7, {transform: 'translateX(-20%)'}, {transform: 'translateX(0%)'})
    .fromTo(textAbout, 1.1, {opacity: '0'}, {opacity: '1'}, '-=0.4')
    .fromTo(slideshow, 0.7, {transform: 'translateX(20%)'}, {transform: 'translateX(0%)'}, '-=1.3')
    .fromTo(slideshow, 1.1, {opacity: '0'}, {opacity: '1'}, '-=1.1')
    .fromTo(credits, 0.7, {transform: 'translateY(60%)'}, {transform: 'translateX(0%)'}, '-=1.3')
    .fromTo(credits, 1.1, {opacity: '0'}, {opacity: '1'}, '-=1.1');

    animateOverlay();
}

export {animateHomeLoad, animateHomeBack, animateProds, animateContact, animateAbout};