const numeros = [5248, 200, 1648, 12354, 1916168, 1254, 13689];

function Promedio(numeros) {
    for (let item of numeros) {
        setTimeout(() => {
            console.log(item);
        }, item);
    }
}

function CrearTxt(texto) {
    const file_system = require('fs');
    file_system.writeFileSync('texto.txt', texto);
}

function solExtra(){
    
}

const http = require('http');

const server = http.createServer((request, response) => {
    Promedio(numeros);

});