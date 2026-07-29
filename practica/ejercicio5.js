import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entrada.question("Ingrese cantidad de dinero en dolares: ", function(dinero){
    entrada.question("Ingrese el tipo de cambio actual del euro: ", function(euro){
        dinero = parseFloat(dinero);
        euro = parseFloat(euro);

        let conversion = dinero * euro;

        console.log("Cantidad que recibira el usuario en euros: " + conversion);
        entrada.close();
    });
});