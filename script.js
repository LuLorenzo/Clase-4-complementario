function calculariva(precio, iva) {
    let resultado = precio * iva;
    return resultado;
}

function preciofinal (final) {
    alert("Precio Final es: " + final);
}

let preciosiniva = parseInt(prompt("Introduce el precio sin iva"));
const iva = 1.21;

preciofinal(calculariva(preciosiniva, iva));