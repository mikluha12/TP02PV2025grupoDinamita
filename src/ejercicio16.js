let l, r;
do{
    l = Number(prompt("Inicio: "));
    r = Number(prompt("Fin: "));
    if(l > r){
        console.log("Inicio (" + l + ")" + " debe ser menor que Fin (" + r + ")");
    }
}while(l > r);

const sumarRango = (l, r) => {
    let sum = 0;
    for(let i = l; i <= r; i++)
        sum += i;
    return sum;
}

let sum = sumarRango(l, r);

console.log("La suma total del rango [" + l + ", " + r + "] es: " + sum);