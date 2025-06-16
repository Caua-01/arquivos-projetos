document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        // Esconde todos os slides
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        // Exibe o slide atual
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Volta para o primeiro slide se chegar ao final
        }
        showSlide(currentSlide);
    }

    // Exibe o primeiro slide ao carregar a página
    showSlide(currentSlide);

    // Configura o intervalo para mudar de slide automaticamente (a cada 3 segundos)
    setInterval(nextSlide, 1000); // 3000 milissegundos = 3 segundos
});