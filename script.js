// Testimonios
const testimonials = [
    {
        name: 'Pedro R.',
        location: 'Barranco, Lima',
        comment: 'Nunca me decepciona. Siempre encuentro eventos emocionantes en Barranco y el proceso de compra es muy fácil.',
        stars: '★★★★☆'
    },
    {
        name: 'Claudia G.',
        location: 'Miraflores, Lima',
        comment: 'MyEvent me ha salvado en más de una ocasión para encontrar entradas de último minuto en Miraflores. ¡Excelente servicio!',
        stars: '★★★★★'
    },
    {
        name: 'Luisa M.',
        location: 'Pueblo Libre, Lima',
        comment: '¡Increíble experiencia en Pueblo Libre! Encontré los mejores eventos para disfrutar con amigos y familia. MyEvent es genial.',
        stars: '★★★★★'
    },
    {
        name: 'Daniel S.',
        location: 'Breña, Lima',
        comment: 'Fantástica selección de eventos en Breña. Siempre encuentro algo emocionante que hacer.',
        stars: '★★★★☆'
    },
    {
        name: 'Ana L.',
        location: 'Santiago de Surco, Lima',
        comment: 'He usado MyEvent para varios eventos en Santiago de Surco y siempre he tenido una experiencia impecable. Totalmente recomendado.',
        stars: '★★★★★'
    },
    {
        name: 'Marcos H.',
        location: 'San Isidro, Lima',
        comment: 'La interfaz de usuario es muy intuitiva y la variedad de eventos es impresionante en San Isidro. Definitivamente volveré.',
        stars: '★★★★☆'
    },
    {
        name: 'Sofia D.',
        location: 'San Borja, Lima',
        comment: 'Servicio al cliente excepcional en San Borja. Siempre responden rápidamente y con soluciones efectivas.',
        stars: '★★★★★'
    },
    {
        name: 'Pablo N.',
        location: 'Jesús María, Lima',
        comment: 'La calidad de los eventos es insuperable en Jesús María y el proceso de compra de entradas es rápido y seguro.',
        stars: '★★★★☆'
    }
    // Agrega los demás testimonios aquí...
];
const testimonialsContainer = document.getElementById('testimonials-container');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let index = 0;

function displayTestimonial() {
    const testimonial = testimonials[index];
    testimonialsContainer.innerHTML = `
        <div class="testimonial">
            <p><strong>${testimonial.name}</strong> en ${testimonial.location}</p>
            <p>${testimonial.comment}</p>
            <p>Estrellas: ${testimonial.stars}</p>
        </div>
    `;
}

function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    displayTestimonial();
}

function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    displayTestimonial();
}

// Muestra el primer testimonio al cargar la página
displayTestimonial();

// Agrega eventos de clic para los botones de navegación
prevButton.addEventListener('click', prevTestimonial);
nextButton.addEventListener('click', nextTestimonial);