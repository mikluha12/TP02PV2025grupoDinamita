//get input de radio por su nombre
let radios = document.getElementsByName("lenguaje");

//get el elemento donde se mostrara el valor seleccionado
let output = document.getElementById("lenguaje-elegido");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        output.textContent = radio.value + (radio.value == "C++" ? " ♥" : ""); //actualiza el valor del texto
        console.log("Seleccionaste:", radio.value); //lo muestra en la consola
    });
});