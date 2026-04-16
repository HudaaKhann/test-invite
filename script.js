// Curtain animation
window.onload = () => {
  setTimeout(() => {
    document.querySelector('.left').style.transform = "translateX(-100%)";
    document.querySelector('.right').style.transform = "translateX(100%)";

    document.querySelectorAll('.curtain').forEach(el => {
      el.style.transition = "1.5s ease";
    });
  }, 500);

  // Fade animation
  setTimeout(() => {
    document.querySelectorAll('.fade').forEach(el => {
      el.classList.add('show');
    });
  }, 1500);
};

// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll('.section').forEach(sec => {
    let top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      sec.classList.add('show');
    }
  });
});

// Music
function toggleMusic() {
  const music = document.getElementById("music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
