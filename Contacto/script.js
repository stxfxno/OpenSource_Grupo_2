// Selecciona el primer elemento con la clase "carousel" del DOM
const carousel = document.querySelector(".carousel"),

// Selecciona la primera imagen dentro del carrusel
firstImg = carousel.querySelectorAll("img")[0],

// Selecciona todos los íconos dentro de elementos con la clase "wrapper" del DOM
arrowIcons = document.querySelectorAll(".wrapper i");

// Variables de estado para el arrastre y desplazamiento
let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;

// Función para mostrar u ocultar íconos de navegación (izquierda/derecha)
const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    // Oculta el ícono izquierdo si el carrusel está al principio
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    // Oculta el ícono derecho si el carrusel está al final
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

// Agrega un evento de clic a cada ícono de flecha (izquierda/derecha)
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // Ancho de la primera imagen más un margen
        // Si se hace clic en la flecha izquierda, desplaza hacia la izquierda
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        // Llama a la función showHideIcons después de 60ms para actualizar la visibilidad de los íconos
        setTimeout(() => showHideIcons(), 60);
    });
});

// Función para el desplazamiento automático después de soltar el arrastre
const autoSlide = () => {
    // Si el carrusel está en el último elemento o en el primero, no hace nada
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // Convierte positionDiff en un valor positivo
    let firstImgWidth = firstImg.clientWidth + 14;
    // Calcula la diferencia para centrar la imagen más cercana después de soltar el arrastre
    let valDifference = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) { // Si el usuario se desplaza hacia la derecha
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // Si el usuario se desplaza hacia la izquierda
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

// Función para iniciar el arrastre (mousedown o touchstart)
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX; // Obtiene la posición inicial del puntero
    prevScrollLeft = carousel.scrollLeft; // Guarda la posición inicial del desplazamiento del carrusel
}

// Función para arrastrar (mousemove o touchmove)
const dragging = (e) => {
    if (!isDragStart) return; // Si no se ha iniciado el arrastre, no hace nada
    e.preventDefault(); // Evita el comportamiento predeterminado del evento (scrolling, etc.)
    isDragging = true;
    carousel.classList.add("dragging"); // Agrega una clase de arrastre para mostrar efecto visual
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX; // Calcula la diferencia de posición
    carousel.scrollLeft = prevScrollLeft - positionDiff; // Ajusta el desplazamiento del carrusel
    showHideIcons(); // Actualiza la visibilidad de los íconos de navegación
}

// Función para detener el arrastre (mouseup o touchend)
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging"); // Elimina la clase de arrastre
    if (!isDragging) return; // Si no se estaba arrastrando, no hace nada
    isDragging = false;
    autoSlide(); // Inicia el desplazamiento automático después de soltar el arrastre
}

// Event listeners para iniciar, arrastrar y detener el arrastre
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
