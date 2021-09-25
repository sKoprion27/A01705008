const express = require('express');
const lab14 = express.Router();


// rutas
lab14.get('/', (request, response, next) => {
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



lab14.route('/addMaestre')
    .get(function (request, response) {
        response.render('addMaestre', {
            Titulo: "Agregar Maestre"
        });
    })
    .post(function (request, response){
        path = 'public/txt/Maestros.txt';
        agregarDatoTxt(request.body.nombreMaestro, path)
        // console.log(request.body.nombreMaestro)
        response.send("llega al post")
    })


lab14.get('/listadoTareas', (request, response, next) => {
    response.render('listadoTareas', {
        Titulo: "Listado Tareas"
    });
}); 


// fuciones


const fs = require('fs')

// funciones para lab 14
function agregarDatoTxt(content, path){
    console.log(content);
    fs.appendFile(path, content + "\n" , function (err) {
    if (err) return console.log(err);
    console.log(content + " agregado a " + path);
    });

}

module.exports = lab14