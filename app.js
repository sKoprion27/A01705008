const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middleware

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    next();
} );

app.get('/menu/add', (request, response, next) => {
    let respuesta = '<head><meta charset="UTF-8"></head>';
        respuesta +='<h1>Agregar platillo al menú</h1>';
        respuesta +='<form action="/menu/add" method="POST">';
        respuesta +='<label for="nombre">Nombre del platillo</label>';
        respuesta +='<input type="text" id="nombre" name="nombre" placeholder="Tacos" required>';
        respuesta +='<br>';
        respuesta +='<br>';
        respuesta +='<label for="descripcion">Descripcion del platillo</label>';
        respuesta +='<input type="text" id="descripcion" name="descripcion" placeholder="Tortilla, carne, salsa" required>';
        respuesta +='<br>';
        respuesta +='<br>';
        respuesta +='<input type="submit" id="enviar" name="name" value="Enviar">';
        respuesta +='</form>';
        response.send(respuesta);
});

app.post('/menu/add', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    response.send("gracias");
});

app.use('/ruta/apellidos', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta/apellidos"'); 
    next();
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
    next();
});

app.use((request, response, next) => {
    console.log('Ultimo middleware!');
    response.send('Not found 404'); //Manda la respuesta
});
        

app.listen(3000);