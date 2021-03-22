console.log("hola mundo");

const { response } = require('express');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));



//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/nueva-mascota', (request, response,next)=>{
    response.send('<form action="/guardar" method="POST"><input type="text" name ="nombre"><input type="submit" name="enviar" value="adoptar"></form>');
});


app.post('/nueva-mascota', (request, response,next)=>{
    console.log(request.body)
    response.send('Gracias por adoptar a '+request.body.nombre+'!!!!');
});

app.use('/ruta', (request, response,next)=>{
    response.send('Respuesta de la ruta "/ruta"');
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('lo sentimos, hay muchas mascotas perdidas'); //Manda la respuesta
});



app.listen(3000);