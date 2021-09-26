const express = require('express');
const lab14 = express.Router();

const fs = require('fs');

// arreglos

var Maestros = [];
var Materias = [];
CrearArrMaestres()
CrearArrMaterias()

// rutas
lab14.get('/', (request, response, next) => {
    response.render('homepagelab14', {
        Titulo: "Bienvenido"
    });
});

lab14.route('/addTarea')
    .get(function (request, response) {
        response.render('addTarea', {
            Titulo: "Agregar Tarea",
            Lista_materias: Materias
        });
    })
    .post(function (request, response){
        console.log("entra")
        path = 'public/txt/Tareas.txt';
        agregarDatoTxt(request.body.nombreTarea + ':' + request.body.Materia + ':' + request.body.descripcionTarea + ':' +  request.body.fechaLimite, path)
        
    })

lab14.route('/addMateria')
    .get(function (request, response){ 
        CrearArrMaterias()
        response.render('addMateria', {
            Titulo: "Agregar Materia",
            Lista_maestros: Maestros,
            Lista_materias: Materias
        });
    })
    .post(function (request, response){
        path = 'public/txt/Materias.txt';
        agregarDatoTxt(request.body.nombreMateria + '&' + request.body.Maestro, path)
        // console.log(request.body)
        response.render('addMateria', {
            Titulo: "Agregar Materia",
            Lista_maestros: Maestros,
            Lista_materias: Materias
        })
    });



lab14.route('/addMaestre')
    .get(function (request, response) {
        CrearArrMaestres()
        response.render('addMaestre', {
            Titulo: "Agregar Maestre",
            Lista_maestros: Maestros
        });
    })
    .post(function (request, response){
        path = 'public/txt/Maestres.txt'
        agregarDatoTxt(request.body.nombreMaestro, path)        
        response.render('addMaestre', {
                Titulo: "Agregar Maestre",
                Lista_maestros: Maestros
            });
    })
 

lab14.get('/listadoTareas', (request, response, next) => {
    response.render('listadoTareas', {
        Titulo: "Listado Tareas",
        Lista_materias: Materias

    });
}); 
 

// funciones para lab 14
function agregarDatoTxt(content, path){
    // abre el archivo ubicado en path, y agrega el contenico con un \n al inicio para hacer salto de linea
    fs.appendFile(path,"\n"  + content, function (err) {
    if (err) return console.log(err);
    console.log(content + " agregado a " + path);
    });

}

function CrearArrMaestres(){
    // Pasa los tados del txt ubicado en path a la variable data
    fs.readFile('public/txt/Maestres.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        // divide apartir de que encuentre el caracter de salto de linea y los va a gregando a un arreglo
        Maestros = Array.from(data.split("\n"));
        // console.log("Maestros")
        // console.log(Maestros)
      })
}

function CrearArrMaterias(){
    // Pasa los tados del txt ubicado en path a la variable data
    fs.readFile('public/txt/Materias.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        // divide apartir de que encuentre el caracter de salto de linea y los va a gregando a un arreglo
        Materias = Array.from(data.split("\n"));
        // console.log("Materias")
        // console.log(Materias)

      })
}

module.exports = lab14