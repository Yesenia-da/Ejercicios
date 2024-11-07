let nombre = prompt("Ingrese su nombre:");
let estadoCivil = parseInt(prompt("Ingrese su estado civil (1: Soltero, 2: Casado, 3: Separado, 4: Viudo, 5: Unión libre):"));
let mensaje;

switch (estadoCivil) {
    case 1:
        mensaje = nombre + " es Soltero/a";
        break;
    case 2:
        mensaje = nombre + " es Casado/a";
        break;
    case 3:
        mensaje = nombre + " está Separado/a";
        break;
    case 4:
        mensaje = nombre + " es Viudo/a";
        break;
    case 5:
        mensaje = nombre + " está en Unión libre";
        break;
    default:
        mensaje = "Código de estado civil no válido";
        break;
}

alert(mensaje);
