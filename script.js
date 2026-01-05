/* ========================= */
/* script.js */
/* ========================= */


const images = document.querySelectorAll('.carousel-track img');
let current = 0;


function updateCarousel() {
images.forEach(img => img.classList.remove('active'));
images[current].classList.add('active');
}


updateCarousel();


document.querySelector('.next').onclick = () => {
current = (current + 1) % images.length;
updateCarousel();
};


document.querySelector('.prev').onclick = () => {
current = (current - 1 + images.length) % images.length;
updateCarousel();
};