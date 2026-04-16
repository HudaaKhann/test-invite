const openBtn = document.getElementById("openBtn");
const card = document.getElementById("card");

openBtn.addEventListener("click", () => {
  card.classList.add("show");
  openBtn.style.display = "none";
});
