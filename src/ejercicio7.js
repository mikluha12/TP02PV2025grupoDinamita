/* 7: Declarar un array denominado nombres con al menos 6 nombres.
Obtener el nombre más largo del array nombres.
Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length)
que indica su tamaño. */

const nombres = ["Josefina","Joaquin","Waldo","Cristiano","Nicolas","Ana"];
let nombrelargo="";

for (let i=0;i<nombres.length;i++) {
    if(nombres[i].length > nombrelargo.length){
        nombrelargo = nombres[i];
    }
}

console.log("El nombre mas largo es "+nombrelargo+" con "+nombrelargo.length+" letras.");
