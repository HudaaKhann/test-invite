function openInvite() {

  // Seal break
  gsap.to(".seal", {
    scale: 0,
    duration: 0.4
  });

  // Flap open
  gsap.to(".flap", {
    rotateX: -180,
    duration: 1,
    delay: 0.3,
    ease: "power2.inOut"
  });

  // Card slide
  gsap.to(".card", {
    top: "-40px",
    duration: 1.2,
    delay: 0.8,
    ease: "power3.out"
  });

}
