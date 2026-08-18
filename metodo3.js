import readline from "node:readline";

const entrada = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entrada.question("Ingrese su nombre: ",function(name){
    entrada.question("Ingrese su apellido: ", function(apellido){
        entrada.question("Ingrese el anio de ingreso: ", function(anio){
        entrada.question("Ingrese cuota mensual: ", function(cuota){
            let newName = name.toUpperCase();
            let newApellido = apellido.toUpperCase();
            console.log(newName +" "+ newApellido);
            let subApellido = newApellido.slice(0,3);
            console.log(subApellido);
            let anioString = anio.toString();
            let digitos = anio.slice(2);
            console.log(digitos);
            cuota = parseFloat(cuota);
            console.log(cuota.toFixed(2));
            entrada.close();
        })

    })
    })

})