export function cambiarcolor(){
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log("color elegido aleatoriamente: "+color);  //escribe en la consola el color
    document.body.style.backgroundColor = color;
}
