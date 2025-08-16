const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(showNextSlide, 5000); // Change every 5 seconds

const photos = document.querySelectorAll('.photo');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.remove('fade-out');
    lightbox.classList.add('fade-in');
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.classList.remove('fade-in');
    lightbox.classList.add('fade-out');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300); // Match fadeZoomOut duration
}

photos.forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});

lightbox.addEventListener('click', closeLightbox);