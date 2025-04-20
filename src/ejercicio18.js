let cnt = 0;
let v = [
    "Te dije que no! >:(",
    "No sigas presionando el botón, te lo ordeno! >:/",
    "Basta!",
    "Eres molesto",
    "No sigas :/",
    "Detente",
    "Ya está!",
    "Calmate...",
    "YA ES SUFICIENTE!!!",
    "Ya basta!",
    "Basta!",
    "NO SIGAS",
    ">:/",
    ":/",
    ":/",
    ":(",
    ":(",
    ":'(",
    "...........",
    "........",
    ".....",
    "...",
    ".",
    ""
]

const boton = document.getElementById("boton");
const texto = document.getElementById("texto");
const titulo = document.getElementById("titulo");
const piedepagina = document.getElementById("piedepagina");
let flag = true;

boton.addEventListener("click", () =>{
    texto.textContent = v[cnt];
    cnt++;
    if(cnt == v.length){
        if(flag){
            let enlace = document.createElement("a");
            enlace.href = "https://www.youtube.com/watch?v=1IWvyq89G5E";
            enlace.textContent = "</3";
            enlace.target = "_blank";  //Para abrir en una nueva pestaña
            texto.parentNode.replaceChild(enlace, texto);
            flag = false;
        }
        titulo.textContent = "01010101 01001110 00100000 01001111 01010011 01001111 00100000 01010111 01000001 01000011 01001000 01001111 00100001"
        piedepagina.textContent = "01010000 01101111 01110010 00100000 01001010 01110101 01100001 01101110 01100011 01100101 01110100 01101111 00110000 00110001";
        cnt--;
    }
});