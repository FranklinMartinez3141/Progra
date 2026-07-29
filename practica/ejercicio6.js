import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entrada.question("Ingrese un dato cualquiera: ", function(dato){

    console.log("Dato ingresado por el usuario: " + dato);
    dato = parseFloat(dato);
    console.log("El resultado obtenido al utilizar parseFloat(): " + dato);
    console.log("El valor retornado por isNan(): " + isNaN(dato));
    entrada.close();
});
