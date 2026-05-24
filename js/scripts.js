/* Navbar Scripts */
let ultimaPosicion = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const posicionActual = window.pageYOffset || document.documentElement.scrollTop;

    if (posicionActual > ultimaPosicion) {
        // Haces scroll hacia abajo -> Ocultar la navbar
        navbar.classList.add('ocultar');
    } else {
        // Haces scroll hacia arriba -> Mostrar la navbar
        navbar.classList.remove('ocultar');
    }

    ultimaPosicion = posicionActual <= 0 ? 0 : posicionActual; // Evita valores negativos
});





window.onscroll = function() {mostrarBoton()};

function mostrarBoton() {
    var btn = document.getElementById("botonIrArriba");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function subirArriba() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
