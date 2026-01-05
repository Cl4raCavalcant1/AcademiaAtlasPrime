
        /* ========================= */
        /* SCRIPT.JS (Lógica Carrossel) */
        /* ========================= */

        const images = document.querySelectorAll('.carousel-track img');
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');
        let current = 1; 

        function updateCarousel() {
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

        updateCarousel();

        nextBtn.onclick = () => {
            current = (current + 1) % images.length;
            updateCarousel();
        };

        prevBtn.onclick = () => {
            current = (current - 1 + images.length) % images.length;
            updateCarousel();
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
        });