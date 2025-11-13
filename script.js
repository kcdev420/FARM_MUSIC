/*
  CAMBIO IMPORTANTE:
  Usamos 'window.addEventListener('load', ...)' 
  en lugar de 'DOMContentLoaded'.
  
  'load' espera a que TODO (imágenes, iframes, etc.) cargue.
  'DOMContentLoaded' solo espera por el HTML, y por eso fallaba.
*/

window.addEventListener('load', () => {

    // 1. Inicializar la librería AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en ms
        once: true,     // La animación solo ocurre una vez
        offset: 50,     // Se activa 50px antes de que el elemento sea visible
    });

    // 2. (¡EL SEGURO!)
    // A veces, incluso después de 'load', los iframes tardan
    // un microsegundo más en "pintarse" y ajustar el layout.
    // Forzamos una actualización de las posiciones de AOS
    // medio segundo después de que todo cargó, solo para estar 100% seguros.
    setTimeout(() => {
        AOS.refresh();
    }, 500); // 500ms = medio segundo

    // 3. Smooth Scroll para los links de navegación (este código es el mismo)
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