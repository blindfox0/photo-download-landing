gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: true,
      pin: true,
      markers: false,
      start: "10% top",
      end: "100% 50%;",
      toggleClass: "active",
      ease: "power2"
    },
    scale: 1.5,
    y: "10%"
    
  });