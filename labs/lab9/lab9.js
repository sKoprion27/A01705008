function arrayPromedios(promedios) {
    // Una función que reciba un arreglo de números y devuelva su promedio.
    var acum = 0;
    for (let i = 0; i < promedios.length; i++) {
        acum += parseInt(promedios[i]);
    }
    acum = acum / parseInt(promedios.length);
    console.log("El promedio es: " + acum);
}


let hola = [4, 5, 6]
arrayPromedios(hola);

function stringTotxt(frase) {
    // Una función que reciba un string y escriba el string en un archivo de texto. 
    const file_system = require('fs')

    file_system.writeFileSync(frase + ".txt", frase)
}

function InvertirNum(numero) {
    var invertido = 0
    var resto = numero
    do {
        invertido = invertido * 10 + (resto % 10)
        resto = Math.floor(resto / 10)
    } while ( resto > 0 )
    
   console.log(invertido);
}

InvertirNum(1569874);

const http = require('http');
fs = require('fs');

fs.readFile('./../lab1/lab1.html', function (err, html) {
    if (err) {
        throw err;
    }
    const server = http.createServer((request, response) => {
        // magic happens here!

        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    }).listen(3000);
});