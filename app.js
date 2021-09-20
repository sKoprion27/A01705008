const express = require('express');
const app = express();

//Middleware

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    next();
} );

app.use((request, response, next) => {
    console.log('Segundo middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Ultimo middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);