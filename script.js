/* ========================= */
/* JS GERAL DO SITE */
/* ========================= */

// 1. MENU MOBILE
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

// 2. HEADER STICKY
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. ANIMAÇÃO REVEAL
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
reveal();

// 4. SCROLL BUTTON
function scrollToPlans() {
    document.getElementById('planos').scrollIntoView();
}

// 5. CARROSSEL
const images = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 1; 

function updateCarousel() {
    if (images.length === 0) return;
    images.forEach(img => {
        img.classList.remove('active');
        img.style.display = 'none'; 
    });

    const total = images.length;
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;

    images[prevIndex].style.display = 'block';
    images[prevIndex].style.transform = 'scale(0.8) translateX(-120%)';
    images[prevIndex].style.opacity = '0.4';
    images[prevIndex].style.zIndex = '1';

    images[current].style.display = 'block';
    images[current].classList.add('active');
    images[current].style.transform = 'scale(1.1) translateX(0)';
    images[current].style.opacity = '1';
    images[current].style.zIndex = '2';

    images[nextIndex].style.display = 'block';
    images[nextIndex].style.transform = 'scale(0.8) translateX(120%)';
    images[nextIndex].style.opacity = '0.4';
    images[nextIndex].style.zIndex = '1';
}

if (images.length > 0) updateCarousel();
if (nextBtn) nextBtn.onclick = () => { current = (current + 1) % images.length; updateCarousel(); };
if (prevBtn) prevBtn.onclick = () => { current = (current - 1 + images.length) % images.length; updateCarousel(); };

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
});

// 6. CALCULADORA IMC (NOVO)
function calculateIMC() {
    const height = parseFloat(document.getElementById('imcHeight').value);
    const weight = parseFloat(document.getElementById('imcWeight').value);
    const resultDiv = document.getElementById('imcResult');

    if (!height || !weight) {
        alert("Por favor, preencha peso e altura corretamente.");
        return;
    }

    const imc = (weight / (height * height)).toFixed(1);
    let classification = '';
    let color = '';

    if (imc < 18.5) {
        classification = 'Abaixo do Peso';
        color = '#EDF228'; // Amarelo
    } else if (imc < 24.9) {
        classification = 'Peso Normal';
        color = '#25d366'; // Verde
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
        color = '#EDF228';
    } else {
        classification = 'Obesidade';
        color = '#ff4444'; // Vermelho
    }

    resultDiv.innerHTML = `
        <h3 style="color:${color}; font-size: 30px; margin-bottom: 5px;">${imc}</h3>
        <p style="color: #fff; font-size: 18px;">${classification}</p>
    `;
    resultDiv.classList.add('visible');
}

// 7. MODAL AULA EXPERIMENTAL (NOVO)
function openModal() {
    document.getElementById('modalFreePass').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalFreePass').style.display = 'none';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('modalFreePass');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}