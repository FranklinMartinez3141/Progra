import readline from "node:readline"

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese su código de carrera con el formato U20260867: ", function(codigo){
    let letras = codigo.slice(0,3);
    console.log(letras);
    entrada.close();
})