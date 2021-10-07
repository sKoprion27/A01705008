const Platillo = require("../models/platillos");

exports.getList = (request, response, next) => {
    console.log(request.get('Cookie'));
    console.log(request.get('Cookie').split(';')[2].trim().split('=')[1]);
    response.render('lista_menu', {
        Titulo: "Menú",
        lista_platillos: Platillo.fetchAll()
    });
};



exports.getAdd = (request, response, next) => {
    response.render('addMenu', {
        Titulo: "Agrgar Platillo ",
    });
        
};

exports.postAdd = (request, response, next) => {
    // console.log(request.body);
    console.log(request.body.nombre);
    response.setHeader('Set-Cookie', 'ultimo_platillo='+request.body.nombre);
    const p = new Platillo(request.body.nombre, request.body.descripcion, "https://i.blogs.es/87930e/comidas-ricas/650_1200.jpg");
    Platillo.save();
    response.status(302).redirect('/menu/list')
};