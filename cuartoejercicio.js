import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entrada.question("Productos\nIngrese el nombre de su producto: ", function(name){
    entrada.question("Ingrese el precio unitario de su producto: ", function(precio){
        entrada.question("Ingrese la cantidad a comprar: ", function(cant){
            precio = Number(precio);
            cant = Number(cant);
            let total = precio * cant;
            console.log("Total a pagar de " + name + " = $" + total);
            entrada.close();
        });
    });
});