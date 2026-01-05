/* ========================= */
/* LÓGICA GERAL DO SITE */
/* ========================= */

// 1. MENU MOBILE
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

// 2. HEADER STICKY (Efeito de fundo ao rolar)
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. ANIMAÇÃO REVEAL (Aparecer ao rolar)
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
reveal(); // Ativar no carregamento inicial

// 4. SCROLL SUAVE PARA BOTÕES
function scrollToPlans() {
    const plansSection = document.getElementById('planos');
    if(plansSection) plansSection.scrollIntoView({behavior: 'smooth'});
}

// 5. CARROSSEL DE IMAGENS
const images = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 1; // Começa na segunda imagem (índice 1) para ficar centralizado

function updateCarousel() {
    if (images.length === 0) return;
    
    // Limpa todas as classes
    images.forEach(img => {
        img.classList.remove('active', 'prev-slide', 'next-slide');
    });

    const total = images.length;
    
    // Lógica circular para índices
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;

    // Aplica as classes
    images[current].classList.add('active');
    images[prevIndex].classList.add('prev-slide');
    images[nextIndex].classList.add('next-slide');
}

// Iniciar carrossel apenas se existirem imagens
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

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
});

// 6. CALCULADORA IMC
function calculateIMC() {
    const heightInput = document.getElementById('imcHeight');
    const weightInput = document.getElementById('imcWeight');
    const resultDiv = document.getElementById('imcResult');

    if (!heightInput || !weightInput) return;

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

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

// 7. MODAL AULA EXPERIMENTAL
function openModal() {
    const modal = document.getElementById('modalFreePass');
    if(modal) modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modalFreePass');
    if(modal) modal.style.display = 'none';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modalFreePass');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}