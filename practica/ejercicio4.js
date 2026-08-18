import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entrada.question("Ingrese el precio unitario de un producto: ", function(unitario){
    entrada.question("Ingrese la cantidad que desea comprar: ", function(cant){
        unitario = parseFloat(unitario);
        cant = parseInt(cant);

        let totalPagar = unitario * cant;

        console.log("Total a pagar: " + totalPagar);
        entrada.close();
    });
});