let currentSlideIndex = 0;
const slides = document.querySelectorAll('.buy-car__slider img');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(n) {
    slides.forEach(slide => slide.style.opacity = '0');
    dots.forEach(dot => dot.classList.remove('active'));
    slides[n].style.opacity = '1';
    dots[n].classList.add('active');
    currentSlideIndex = n;
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    showSlide(n);
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
    var burger = document.querySelector('.burger');
    burger.classList.toggle('active');
}

const slideInterval = setInterval(nextSlide, 3000);