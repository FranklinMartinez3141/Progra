import readline from "node:readline";

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese su nombre: ", function(name){
    entrada.question("Ingrese cantidad de horas trabajadas: ", function(horas){
        entrada.question("Ingrese su pago por hora: ", function(pago){
            horas = parseFloat(horas);
            pago = parseFloat(pago);

            let salario = horas * pago;

            console.log("Salario semanal del empleado: $" + salario);

            entrada.close();
        });
    });
});