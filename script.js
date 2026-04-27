const cards = document.querySelectorAll(".card");
const skills = document.querySelectorAll(".skill");

function reveal() {
  let trigger = window.innerHeight * 0.85;

  cards.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });

  skills.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
