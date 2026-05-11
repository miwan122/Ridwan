/* =========================
   TYPING EFFECT
========================= */

const text = ["Programer", "Desainer"];

let i = 0;
let j = 0;

let current = "";
let isDeleting = false;

function type() {

  current = text[i];

  if (!isDeleting) {

    document.querySelector(".typing").textContent =
      current.substring(0, j++);

    if (j > current.length) {
      isDeleting = true;

      setTimeout(type, 1000);
      return;
    }

  } else {

    document.querySelector(".typing").textContent =
      current.substring(0, j--);

    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();


/* =========================
   SCROLL ANIMATION CARD
========================= */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.classList.add("show");
    }

  });

});


/* =========================
   SKILL BAR ANIMATION
========================= */

const fills = document.querySelectorAll(".fill");

function animateSkills() {

  fills.forEach(fill => {

    const top = fill.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {

      fill.style.width =
        fill.getAttribute("data-width");

    }

  });

}

window.addEventListener("scroll", animateSkills);
