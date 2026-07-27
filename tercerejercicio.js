import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entrada.question("Calculadora de minutos\nIngrese una cantidad de horas: ", function(horas){
    horas = Number(horas);
    let min = horas * 60;
    console.log("Su cantidad de minutos es: " + min);
    entrada.close();
});