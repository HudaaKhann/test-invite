function openInvite() {

  // break seal
  gsap.to(".seal", {
    scale: 0,
    duration: 0.5
  });

  // open flap
  gsap.to(".flap", {
    rotateX: -180,
    duration: 1,
    delay: 0.3
  });

  // slide card up
  gsap.to(".card", {
    top: "10%",
    duration: 1,
    delay: 0.8,
    ease: "power2.out"
  });

}
