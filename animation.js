const tl = gsap.timeline({defaults: { ease: "back"}});

tl.to(".intro-text", { y: "0%", duration: 0.7 });
tl.to(".intro-main", { y: "-100%", duration: 0.7, delay: 2.2});
tl.fromTo(".intro-text", { opacity: 1 }, { opacity: 0, duration: 0.5 }, "-=.8" );
tl.fromTo(".nav-animation", { y: "-100%" }, {y: "0%", duration: 0.4, delay: 0.1 });
tl.fromTo(".hero-text", { y: "-20%", opacity: 0 }, {y: "0%", opacity: 1, duration: 0.4 }, "-=.1");

const tlIconHero = gsap.timeline({repeat: -1, defaults: { ease: "power0"}});

tlIconHero.to(".hero-icon", { y: "10px", duration: 0.6});
tlIconHero.to(".hero-icon", { y: "0", duration: 0.6});