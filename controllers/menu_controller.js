const Platillo = require("../models/platillos");

exports.getlist = (request, response, next) => {
    response.render('lista_menu', {
        Titulo: "Menú",
        lista_platillos: Platillo.fetchAll()
    });
};

exports.getadd = (request, response, next) => {
    response.render('addMenu', {
        Titulo: "Agrgar Platillo ",
    });
        
};

exports.postadd = (request, response, next) => {
    // console.log(request.body);
    // console.log(request.body.nombre);
    const p = new Platillo(request.body.nombre, request.body.descripcion, "https://i.blogs.es/87930e/comidas-ricas/650_1200.jpg");
    Platillo.save();
    response.status(302).redirect('/menu/list')
};