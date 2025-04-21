export function mostrardatos(){
    const name= document.querySelector("#name").value;
    const last_name = document.querySelector("#last_name").value;
    const libreta_Apu = document.querySelector("#libreta_Apu").value;
    alert("Los datos ingresados son: \nNombre: " + name + "\nApellido: "+ last_name + "\nLibreta Universitaria: "+ libreta_Apu);
}