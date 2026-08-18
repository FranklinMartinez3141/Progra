import readline from "node:readline"

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entrada.question("Ingrese una logitud en metros (m): ", function(metros){
    metros = parseFloat(metros);
    let cent = metros * 100;
    console.log("Cantidad de longitud en centimetros: " + cent);
    entrada.close();
});