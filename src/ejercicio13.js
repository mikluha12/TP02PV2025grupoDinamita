let n = prompt("Ingrese el tamaño del arreglo");

let array = [];

//obtener valores
for(let i = 0; i < n; i++)
    array.push(prompt("Ingrese el valor " + (i + 1) + ": "));

const mostrarArreglo = (array) => {
    for(let i = 0; i < array.length; i++)
        console.log("Valor " + (i + 1) + ": " + array[i]);
}

mostrarArreglo(array);