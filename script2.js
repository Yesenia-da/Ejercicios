let numero;

do {
    numero = parseInt(prompt("Ingrese un número entero entre 1 y 10:"));
    if (numero < 1 || numero > 10) {
        alert("Debe ingresar un número válido entre 1 y 10.");
    }
} while (numero < 1 || numero > 10);

alert("Gracias");
