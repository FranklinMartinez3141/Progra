import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entrada.question("Calcular el area de un rectangulo\nIngresa base: ", function(base){
    entrada.question("Ingrese altura: ", function(altura){
        base = Number(base);
        altura = Number(altura);
        let area = base * altura;

        console.log("Area del rectangulo: " + area);
        entrada.close();
    });
});