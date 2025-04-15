let s = prompt("Ingrese un string: ");

const contarLetraA = (s) => {
    let cnt = 0;
    for(let i = 0; i < s.length; i++)
        if(s[i] == 'a')
            cnt++;
    return cnt;
}

let cnt = contarLetraA(s);

console.log("La cantidad de veces que aparece 'a' en " + s + " es: " + cnt);