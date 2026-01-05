/* ========================= */
/* JS GERAL DO SITE */
/* ========================= */

// 1. MENU MOBILE
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

// 2. HEADER STICKY (Fixo ao rolar)
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. ANIMAÇÃO DE SCROLL (REVEAL)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Ativar no carregamento inicial também
reveal();

// 4. SCROLL SUAVE PARA BOTÕES
function scrollToPlans() {
    document.getElementById('planos').scrollIntoView();
}

// 5. CARROSSEL (Lógica anterior mantida)
const images = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 1; 

function updateCarousel() {
    // Garante que existem imagens antes de rodar a lógica
    if (images.length === 0) return;

    images.forEach(img => {
        img.classList.remove('active');
        img.style.display = 'none'; 
    });

    const total = images.length;
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;

    // Anterior
    images[prevIndex].style.display = 'block';
    images[prevIndex].style.transform = 'scale(0.8) translateX(-120%)';
    images[prevIndex].style.opacity = '0.4';
    images[prevIndex].style.zIndex = '1';

    // Atual
    images[current].style.display = 'block';
    images[current].classList.add('active');
    images[current].style.transform = 'scale(1.1) translateX(0)';
    images[current].style.opacity = '1';
    images[current].style.zIndex = '2';

    // Próximo
    images[nextIndex].style.display = 'block';
    images[nextIndex].style.transform = 'scale(0.8) translateX(120%)';
    images[nextIndex].style.opacity = '0.4';
    images[nextIndex].style.zIndex = '1';
}

// Inicializa o carrossel se houver imagens
if (images.length > 0) {
    updateCarousel();
}

if (nextBtn) {
    nextBtn.onclick = () => {
        current = (current + 1) % images.length;
        updateCarousel();
    };
}

if (prevBtn) {
    prevBtn.onclick = () => {
        current = (current - 1 + images.length) % images.length;
        updateCarousel();
    };
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
});