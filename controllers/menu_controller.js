const platillos = [
    {nombre: "sopes", descripcion: "Tortilla, frijol, queso, salsa, pollo"},
    {nombre: "chilaquiles", descripcion: "Tortilla, salsa, frijol, queso, pollo"},
    {nombre: "tacos", descripcion: "Tortilla, carne, salsa"},
    {nombre: "pambazo", descripcion: "Bolillo con carne remojado en salsa"},
    {nombre: "carne asada", descripcion: "al carbón", imagen: "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/cow-boy.jpg"},
    {nombre: "hamburguesa", descripcion: "Carne entre 2 panes", imagen: "https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg"}
];

exports.getlist = (request, response, next) => {
    console.log('ruta encontrada')
    response.render('lista_menu', {
        Titulo: "Menú",
        lista_platillos: platillos
    });
};

exports.getadd = (request, response, next) => {
    let respuesta = '<head><meta charset="UTF-8"></head>';
    respuesta +='<h1>Agregar platillo al menú</h1>';
    respuesta +='<form action="/add" method="POST">';
    respuesta +='<label for="nombre">Nombre del platillo</label>';
    respuesta +='<input type="text" id="nombre" name="nombre" placeholder="Tacos" required>';
    respuesta +='<br>';
    respuesta +='<br>';
    respuesta +='<label for="descripcion">Descripcion del platillo</label>';
    respuesta +='<input type="text" id="descripcion" name="descripcion" placeholder="Tortilla, carne, salsa" required>';
    respuesta +='<br>';
    respuesta +='<br>';
    respuesta +='<input type="submit" id="enviar" name="name" value="Enviar">';
    respuesta +='</form>';
    response.send(respuesta);
};

exports.postadd = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    response.send("gracias");
};