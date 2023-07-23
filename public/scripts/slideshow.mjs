// second slide show 
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}


//////// first slide show
const slides1 = document.querySelectorAll('.slide1'); // for the first slide show
let currentSlide1 = 0;

function showSlide1(n) {
  slides1[currentSlide1].classList.remove('active'); 
  currentSlide1 = (n + slides1.length) % slides1.length; 
  slides1[currentSlide1].classList.add('active'); 
}
////////// third slide show
const slides2 = document.querySelectorAll('.slide2'); // for the first slide show
let currentSlide2 = 0;

function showSlide2(n) {
  slides2[currentSlide2].classList.remove('active'); 
  currentSlide2 = (n + slides2.length) % slides2.length; 
  slides2[currentSlide2].classList.add('active'); 
}

setInterval(() => {
  showSlide(currentSlide + 1);
  showSlide1(currentSlide1 + 1);
  showSlide2(currentSlide1 + 1);
},5000);