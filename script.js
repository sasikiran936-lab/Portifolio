const cards = document.querySelectorAll(".card");

function reveal() {
  let trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    let top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
const skills = document.querySelectorAll(".skill-card");

function revealSkills() {
  let trigger = window.innerHeight * 0.85;

  skills.forEach(card => {
    let top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSkills);
revealSkills();
