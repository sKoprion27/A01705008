const platillos = [
    {nombre: "sopes", descripcion: "Tortilla, frijol, queso, salsa, pollo"},
    {nombre: "chilaquiles", descripcion: "Tortilla, salsa, frijol, queso, pollo"},
    {nombre: "tacos", descripcion: "Tortilla, carne, salsa"},
    {nombre: "pambazo", descripcion: "Bolillo con carne remojado en salsa"},
    {nombre: "carne asada", descripcion: "al carbón", imagen: "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/cow-boy.jpg"},
    {nombre: "hamburguesa", descripcion: "Carne entre 2 panes", imagen: "https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg"}
];

exports.list = (request, response, next) => {
    console.log('ruta encontrada')
    response.render('lista_menu', {
        Titulo: "Menú",
        lista_platillos: platillos
    });
};