// use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    // Glide
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        focusAt: center,
    }).mount();

    // GSAP
    gsap.to(".cube", {
        duration: 10,
        rotationY: 360,
        rotationX: 360,
        repeat: -1,
        ease: "linear"
    });
 });