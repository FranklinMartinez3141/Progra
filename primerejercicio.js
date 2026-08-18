import readline from "node:readline";

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese 3 notas \nNota 1: ", function(n1){
    entrada.question("Nota 2: ", function(n2){
        entrada.question("Nota 3: ", function(n3){
           n1 = Number(n1);
           n2 = Number(n2);
           n3 = Number(n3);
           let resultado = (n1 + n2 + n3)/3;
           console.log("Tu promedio es: " + resultado)
           entrada.close();
        });
    });
});