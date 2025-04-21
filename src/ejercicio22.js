
document.addEventListener("DOMContentLoaded", function() {
const entradaTexto = document.getElementById("texto");
const textoMostrado = document.getElementById("objetivo");

    entradaTexto.addEventListener('input', function() {

        textoMostrado.textContent = entradaTexto.value;

        if (entradaTexto.value.length > 20) {
            textoMostrado.classList.add("fondo-rojo");
        }
        else {
            textoMostrado.classList.remove("fondo-rojo");
        }
        });
    });