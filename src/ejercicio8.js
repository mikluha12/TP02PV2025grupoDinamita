let calcularMayor = (num1, num2) => {

    if (num1 > num2) {
        window.alert("Numeros: " + num1 + " y " + num2 + "\nEl número mayor es: " + num1);
    }
    else if (num1 < num2) {
        window.alert("Numeros: " + num1 + " y " + num2 + "\nEl número mayor es: " + num2);
    }
    else {
        window.alert("Numeros: " + num1 + " y " + num2 + "\nLos números son iguales");
    }
}

calcularMayor(5, 9);
calcularMayor(50, 9);
calcularMayor(12, 12);