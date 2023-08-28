"use strict";

var slider = document.querySelector(".items");
var slides = document.querySelectorAll(".item");
var current = 0;
var prev = slides.length - 1;
var next = 1;

var gotoPrev = function gotoPrev() {
  return current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
};

var gotoNext = function gotoNext() {
  return current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);
};

var gotoNum = function gotoNum(number) {
  current = number;
  prev = current - 1;
  next = current + 1;

  if (next == slides.length) {
    next = 0;
  }

  if (prev == -1) {
    prev = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};

var autoSlide = function autoSlide() {
  gotoNext();
  setTimeout(autoSlide, 3000);
};

autoSlide();
//# sourceMappingURL=img-slider.dev.js.map
