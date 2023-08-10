function firstPageTextAnimation() {
    var tl = gsap.timeline();

       tl.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration :3,
        stagger:.2
    });
}

firstPageTextAnimation();