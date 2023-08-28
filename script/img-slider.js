const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");

let current = 0;
let prev = slides.length - 1;
let next = 1;

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);
const gotoNum = number => {
  current = number;
  prev = current - 1;
  next = current + 1;

  if (next == slides.length) {
    next = 0;
  }

  if (prev == -1) {
    prev = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};

const autoSlide = () => {
  gotoNext();
  setTimeout(autoSlide, 3000);
};

autoSlide();
