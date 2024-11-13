let acumulado = 0;
let valor;

do {
    valor = parseInt(prompt("Ingrese un valor para acumular (0000 para finalizar):"));
    if (valor !== 0) {
        acumulado += valor;
    }
} while (valor !== 0);

let resultado = "El valor acumulado es: " + acumulado;
if (acumulado > 0) {
    resultado += " (mayor a cero)";
} else if (acumulado < 0) {
    resultado += " (menor a cero)";
} else {
    resultado += " (es cero)";
}

alert(resultado);
