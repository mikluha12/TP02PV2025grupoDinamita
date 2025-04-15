let edades = [15, 22, 30, 18, 25, 19, 34, 28];

let suma = 0;
for (let i = 0; i < edades.length; i++) {
    suma = suma + edades[i];
}

let promedio = suma / edades.length;

console.log("Edades:", edades);

console.log("Promedio de edades:", promedio);