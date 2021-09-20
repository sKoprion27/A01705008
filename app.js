const express = require('express');
const app = express();

//Middleware

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    next();
} );

app.use('/ruta/nombres', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta/nombres"'); 
    next();
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
    response.send('¡Hola mundo!'); //Manda la respuesta
});
        

app.listen(3000);