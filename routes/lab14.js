const express = require('express');
const lab14 = express.Router();


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

lab14.get('/addMaestro', (request, response, next) => {
    response.render('addMaestro', {
        Titulo: "Agregar Maestro"
    });
});



module.exports = lab14