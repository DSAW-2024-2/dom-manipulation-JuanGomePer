document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('#foto img');
    const botonAdelante = document.getElementById('boton-adelante');
    const botonAtras = document.getElementById('boton-atras');

    let indiceActual = 0;

    function mostrarImagen(indice) {
        imagenes.forEach((img, i) => {
            img.classList.remove('active');
            if (i === indice) {
                img.classList.add('active');
            }
        });
        actualizarBotones();
    }

    function actualizarBotones() {
        botonAtras.disabled = indiceActual === 0;
        botonAdelante.disabled = indiceActual === imagenes.length - 1;
    }

    function avanzarImagen() {
        if (indiceActual < imagenes.length - 1) {
            indiceActual++;
            mostrarImagen(indiceActual);
        }
    }

    function retrocederImagen() {
        if (indiceActual > 0) {
            indiceActual--;
            mostrarImagen(indiceActual);
        }
    }

    botonAdelante.addEventListener('click', avanzarImagen);
    botonAtras.addEventListener('click', retrocederImagen);

    mostrarImagen(indiceActual);
});
