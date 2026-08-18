import readline from "node:readline"

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese su nombre: ", function(name){
    let mayusculasName = name.toUpperCase();
    console.log(mayusculasName);
    let minusculaName = name.toLowerCase();
    console.log(minusculaName);
    entrada.close();
})