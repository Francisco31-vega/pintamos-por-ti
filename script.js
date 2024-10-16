// Carrusel de imágenes
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Calculadora de pintura
document.getElementById('paint-calculator').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const alto = parseFloat(document.getElementById('alto').value);
    const ancho = parseFloat(document.getElementById('ancho').value);

    if (isNaN(alto) || isNaN(ancho) || alto <= 0 || ancho <= 0) {
        document.getElementById('resultado').textContent = "Por favor, introduce dimensiones válidas.";
        return;
    }

    const area = alto * ancho; // Área en metros cuadrados
    const pinturaRequerida = area / 10; // Aproximadamente 1 litro de pintura cubre 10m²

    document.getElementById('resultado').textContent = `Necesitarás aproximadamente ${pinturaRequerida.toFixed(2)} litros de pintura para cubrir ${area.toFixed(2)} m².`;
});
