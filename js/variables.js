let continuarCompra = true;
let precio = 22800;

while (continuarCompra) {
    let opcion = parseInt(prompt ("1. Comprar sillon\n2. Salir"))
    switch (opcion) {
        case 1:
            let tamanioSillon = parseInt(prompt ("indique la cantidad de cuerpos del sillón de 1 a 3"))
            obtenerPrecio(tamanioSillon, precio)
            break;
        case 2:
            continuarCompra = false
            break;
    }
}


function obtenerPrecio(tamanioSillon, precio) {
    let descuento10 = precio - (precio * 0.1);
    let descuento20 = precio - (precio * 0.2);

    if(tamanioSillon === 1) {
        alert ("El precio por 1 cuerpo es de "+ precio);
    } else if (tamanioSillon === 2) {
        alert ("El precio por 2 cuerpos es de "+descuento10+" cada cuerpo");
    } else if (tamanioSillon === 3) {
        alert ("El precio por 3 cuerpos es de "+descuento20+" cada cuerpo");
    }
    else {
        alert ("ERROR")
    }
}

console.log(obtenerPrecio);

