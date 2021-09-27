const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const misRutas = require('./routes/menu');
const rutasLab14 = require('./routes/lab14');

const path = require('path');
//Middleware

//a la variable view engine vale ejs
app.set('view engine', 'ejs'); 
//a la variable views vale views
app.set('views', 'views');

//poner la carpeta public para que pueda ser devuelta de manera estatica
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/menu', misRutas);

app.use('/lab14', rutasLab14);

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    next();
} );

app.get('/password', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'passwordValidator.html'));
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
    response.status(404).send('Not found 404'); //Manda la respuesta
});
        

app.listen(3000);