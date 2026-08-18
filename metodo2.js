import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese un codigo numerico de 8 digitos: ", function(codigo){
    let newCadena = codigo.toString();
    let subCadena = newCadena.slice(0,4);
    console.log(subCadena);
    entrada.close();
})