let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add('active');
}
document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});
document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeBtn.textContent = 'Включить темную тему';
    } else {
        themeBtn.textContent = 'Включить светлую тему';
    }
});
