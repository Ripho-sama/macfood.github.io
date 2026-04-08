const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const scrollAmount = 300;

next?.addEventListener("click", () => {
carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prev?.addEventListener("click", () => {
carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
