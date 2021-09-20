const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const misRutas = require('./routes/menu');

//Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use('/menu', misRutas);

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    next();
} );


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
    response.status(404).send('Not found 404'); //Manda la respuesta
});
        

app.listen(3000);