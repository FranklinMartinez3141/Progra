import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entrada.question("Ingrese el precio de su producto: ", function(precio){
    entrada.question("Ingrese el porcentaje de descuento de su producto: ", function(desc){
        precio = parseFloat(precio);
        desc = (parseFloat(desc)/ 100);
        let descuentoTotal = precio * desc ;
        let precioFinal = precio - descuentoTotal;

        console.log("Valor del descuento: " + descuentoTotal);
        console.log("Precio final: " + precioFinal);
        entrada.close();
    });
});