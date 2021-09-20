const Tareas =[
    {nombre:"Tarea", materia:"DAW", descripcion:"lab10", estado:"To do"},
    {nombre:"Tarea", materia:"DAW", descripcion:"lab10", estado:"To do"},
    {nombre:"Tarea", materia:"DAW", descripcion:"lab10", estado:"To do"},
]

const Materias = [
    {materia:"DAW"},
]

const requestHandler = (request, response) => {
    // reaccionar de acuerdo a la ruta
    if (request.url === "/Tareas") {
        // mostrar lista de platillos
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Tareas</h1>');
        response.write('<ul>');
        for (let tarea of Tareas) {
            response.write("<li>" +"Materia: "+tarea.materia + "|" + tarea.nombre + ": " + tarea.descripcion + " Estado "+ tarea.estado+"</li>");
        }
        response.write("</ul>");
        response.write('<a href="/Tareas/add">Agregar Tarea </a>');
        response.end();
        
    }else if (request.url === "/Materias") {
        // mostrar lista de platillos
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Materias</h1>');
        response.write('<ul>');
        for (let materia of Materias){
            response.write('<li>' + materia.materia + '</li>')
        }
        response.write("</ul>");
        response.write('<a href="/Materias/add">Agregar Materia </a>');        
        response.write('<br>');
        response.write('<br>');

        response.write('<a href="/Tareas/add">Agregar Tarea </a>');

        response.end();

    } else if (request.url === "/Materias/add" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Agregar Materia</h1>');
        response.write('<form action="/Materias/add" method="POST">');
        response.write('<label for="materia">Materia </label>');
        response.write('<input id="materia" name="materia" required>');
        

        response.write('<br>');
        response.write('<br>');
        response.write('<input type="submit" id="enviar" name="name" value="Enviar">');
        response.write('</form>');

        response.end();
    } else if (request.url === "/Materias/add" && request.method === "POST") {
        const datos = [];
        // recibir datos del cliente
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        // console.log(datos);

        // procesar datos del cliente
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos);
            // // console.log(datos_completos);
            const materia = datos_completos.split('=')[1].split('&')[0];

            // agregar la nuevo tarea
            Materias.push({
                materia: materia,
            });
            // redireccionar a menu
            response.statusCode = 303
            response.setHeader('Location', '/Materias');
            response.end();
        })

    } else if (request.url === "/Tareas/add" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Agregar Tarea</h1>');
        response.write('<form action="/Tareas/add" method="POST">');
        response.write('<label for="materia">Materia </label>');
        response.write('<select name="materia" id="materia">>');
        for (let materia of Materias){
            response.write('<option>' + materia.materia + '</option>')
        }
        response.write('</select>');
        response.write('<br>');
        response.write('<br>');
        response.write('<a href="/Materias/add">Agregar Materia </a>');
        response.write('<br>');
        response.write('<br>');
        response.write('<label for="nombre">Nombre </label>');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="ACt 5" required>');
        response.write('<br>');
        response.write('<br>');
        response.write('<label for="descripcion">Descripcion de la tarea</label>');
        response.write('<input type="text" id="descripcion" name="descripcion" placeholder="Realizar lab 10" required>');
        response.write('<br>');
        response.write('<br>');
        response.write('<input type="submit" id="enviar" name="name" value="Enviar">');
        response.write('</form>');
        response.end();
    } else if (request.url === "/Tareas/add" && request.method === "POST") {
        const datos = [];
        // recibir datos del cliente
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        // console.log(datos);

        // procesar datos del cliente
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            // console.log(datos);
            // console.log(datos_completos);
            const materia = datos_completos.split('=')[1].split('&')[0];
            const nombre = datos_completos.split('=')[2].split('&')[0];
            const descripcion = datos_completos.split('=')[3].split('&')[0];
            console.log(materia);
            console.log(nombre);
            console.log(descripcion);
            // agregar la nuevo tarea
            Tareas.push({
                materia: materia,
                nombre: nombre,
                descripcion: descripcion,
                estado : "Pendiente"
            });
            // redireccionar a menu
            response.statusCode = 303
            response.setHeader('Location', '/Tareas');
            response.end();
        })

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Pag no encontrada</h1>');

    }
}


module.exports = requestHandler;