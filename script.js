document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializar la librería AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en ms
        once: true,     // La animación solo ocurre una vez
        offset: 50,     // Se activa 50px antes de que el elemento sea visible
    });

    // 2. Smooth Scroll para los links de navegación
    // (Aunque 'scroll-behavior: smooth' en CSS ya hace esto,
    // esto es un fallback y da más control si se necesita)
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previene el salto brusco
            e.preventDefault(); 
            
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula la posición del elemento
                const offsetTop = targetElement.offsetTop;

                // Desplazamiento suave
                window.scrollTo({
                    top: offsetTop - 70, // Descuenta la altura de la navbar
                    behavior: 'smooth'
                });
            }
        });
    });

});