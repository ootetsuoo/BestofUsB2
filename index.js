const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('October 1, 2025 00:00:00').getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `
        <span class="number">${days}d</span>
        <span class="number">${hours}h</span>
        <span class="number">${minutes}m</span>
        <span class="number">${seconds}s</span>
    `;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "Welcome Back!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

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
        }, 200);
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