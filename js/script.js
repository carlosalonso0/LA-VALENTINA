// Elements
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Event listeners
window.addEventListener('scroll', toggleHeaderBackground);
menuToggle.addEventListener('click', toggleMenu);

// Toggle header background on scroll
function toggleHeaderBackground() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Toggle mobile menu
function toggleMenu() {
    nav.classList.toggle('active');
}

// Form submission
const reservaForm = document.querySelector('.reserva-form');
if (reservaForm) {
    reservaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Fetch form values
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const personas = document.getElementById('personas').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // You would normally send this data to your server here
        // For now, just show an alert
        alert(`¡Gracias por tu reserva, ${nombre}! Te contactaremos para confirmarla.`);
        
        // Reset the form
        this.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        }
    });
});
