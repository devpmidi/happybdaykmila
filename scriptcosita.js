const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let index = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
