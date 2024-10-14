const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Ocultar todas las diapositivas
    slides.forEach(slide => slide.style.transform = `translateX(-${currentSlide * 100}%)`);
    
    // Mover al siguiente o anterior slide
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Mostrar la nueva diapositiva
    slides.forEach(slide => slide.style.transform = `translateX(-${currentSlide * 100}%)`);
}