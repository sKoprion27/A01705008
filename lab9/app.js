//primer programa con node


// stringTotxt("gorditas");

// // codigo asincrono

// const arreglo = [3,4,2,300,2000,1500,200,34,12,400,100,3000]
// function settimeout(arr){

//     for (let item of arr){
//         setTimeout( () => {
//             console.log(item);
//         }, item);
//     }
// }

const http = require('http');

const server = http.createServer((request, response) => {

    // reaccionar de acuerdo a la ruta
    if (request.url === "/hola"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>hola mundo</h1>');
        response.end();
    }else if (request.url === "/menu"){
        // mostrar lista de platillos
        const platillos = [
            {nombre:"Sopes", descripcion:"Tortilla, frijol, queso, salsa, pollo"},
            {nombre:"Chilaquiles", descripcion:"Tortilla, salsa, frijor, queso, pollo"},
            {nombre:"Tacos", descripcion:"Tortilla, carne, salsa"},
            {nombre:"pambazo", descripcion:"Bolillo remojado en salsa con carne"},
        ]
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Menú</h1>');
        response.write('<ul>');
        for (let platillo of platillos){
            response.write("<li>" + platillo.nombre + ": " + platillo.descripcion + "</li>");
        }
        response.write("</ul>");
        response.write('<a href="/menu/add">Agregar platillo </a>');
        response.end();
    }else if(request.url === "/menu/add"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Agregar platillo al menú</h1>');
        response.write('<form action="/menu/add" method="POST">');
        response.write('<label for="nombre">Nombre del platillo</label>');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Tacos" required>');
        response.write('<br>');
        response.write('<br>');
        response.write('<label for="descripcion">Descripcion del platillo</label>');
        response.write('<input type="text" id="descripcion" name="descripcion" placeholder="Tortilla, carne, salsa" required>');
        response.write('<input type="submit" id="enviar" name="name" value="Enviar">');
        response.write('<br>');
        response.write('<br>');
        response.write('</form>');
        response.end();

    }
    else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Pag no encontrada</h1>');

    }
}).listen(3000);

// settimeout(arreglo);
