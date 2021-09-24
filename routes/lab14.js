const express = require('express');
const lab14 = express.Router();


// rutas
lab14.get('/homepage', (request, response, next) => {
    response.render('homepagelab14', {
        Titulo: "Bienvenido"
    });
});

lab14.get('/addTarea', (request, response, next) => {
    response.render('addTarea', {
        Titulo: "Agregar Tarea"
    });
});

lab14.get('/addMateria', (request, response, next) => {
    response.render('addMateria', {
        Titulo: "Agregar Materia"
    });
});

lab14.get('/addMaestre', (request, response, next) => {
    response.render('addMaestro', {
        Titulo: "Agregar Maestre"
    });
}); 

lab14.post('/addMaestre', (request, response, next) => {
    request.on('data', (dato) => {
        console.log("dato");
        console.log(dato);
    });
    response.send("gracias");
});



// fuciones
const fs = require('fs')

// funciones para lab 14
function agregarDatoTxt(content){
    console.log(content);
    fs.writeFile('/txt/Maestros.txt', content, { flag: 'a' }, err => {})

}

module.exports = lab14