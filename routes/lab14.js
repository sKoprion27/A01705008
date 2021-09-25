const express = require('express');
const lab14 = express.Router();


// arreglos
var Maestros = [];

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
        path = 'public/txt/Maestros.txt';
        CrearArr(path)
        response.render('addMaestre', {
            Titulo: "Agregar Maestre",
            Lista_maestros: Maestros
        });
    })
    .post(function (request, response){
        CrearArr(path)
        path = 'public/txt/Maestros.txt';
        agregarDatoTxt(request.body.nombreMaestro, path)
        // console.log(request.body.nombreMaestro)
        
            response.render('addMaestre', {
                Titulo: "Agregar Maestre",
                Lista_maestros: Maestros
            });
    })
 

lab14.get('/listadoTareas', (request, response, next) => {
    response.render('listadoTareas', {
        Titulo: "Listado Tareas"
    });
}); 


// fuciones


const fs = require('fs');

// funciones para lab 14
function agregarDatoTxt(content, path){
    console.log(content);
    // abre el archivo ubicado en path, y agrega el contenico con un \n al inicio para hacer salto de linea
    fs.appendFile(path,"\n"  + content, function (err) {
    if (err) return console.log(err);
    console.log(content + " agregado a " + path);
    });

}

function CrearArr(path){
    // Pasa los tados del txt ubicado en path a la variable data
    fs.readFile(path, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        // divide apartir de que encuentre el caracter de salto de linea y los va a gregando a un arreglo
        Maestros = Array.from(data.split("\n"));
        console.log(Maestros)
      })
}

module.exports = lab14