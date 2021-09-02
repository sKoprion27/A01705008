//primer programa con node

function arrayPromedios(promedios){
// Una función que reciba un arreglo de números y devuelva su promedio.
    var acum =0;
    for (let i=0; i<promedios.length; i++){
        acum += parseInt(promedios[i]);
    }
    console.log("suma es: " + acum);
    acum = acum /parseInt(promedios.length);
}

function printArray(array){
    for (let i=0; i<array.length; i++){
        console.log(promedios[i]);
    }
}
let hola = [4,5,6]
// arrayPromedios(hola);

function stringTotxt(frase){
    // Una función que reciba un string y escriba el string en un archivo de texto. 
    const file_system = require('fs')

    file_system.writeFileSync(frase + ".txt", frase)
}

// stringTotxt("gorditas");

// codigo asincrono

const arreglo = [3,4,2,300,2000,1500,200,34,12,400,100,3000]

for (let item of arreglo){
    setTimeout( () => {
        console.log(item);
    }, item);
}