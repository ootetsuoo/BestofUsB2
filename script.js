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

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const photos = document.querySelectorAll('.photo');

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
            lightboxImg.src = '';
        }, 300);
    }

    photos.forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src));
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-img')) {
            closeLightbox();
        }
    });
});