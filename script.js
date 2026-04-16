const tl = gsap.timeline({ paused: true });

tl.to(".seal", {
  scale: 0,
  duration: 0.4,
})

.to(".flap", {
  rotateX: -180,
  duration: 1,
  ease: "power2.inOut"
}, "-=0.2")

.to(".card", {
  top: "-60px",
  duration: 1.2,
  ease: "power3.out"
}, "-=0.3");


document.getElementById("envelope").addEventListener("click", () => {
  tl.play();
});
