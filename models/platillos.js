const platillos = [
    {nombre: "sopes", descripcion: "Tortilla, frijol, queso, salsa, pollo"},
    {nombre: "chilaquiles", descripcion: "Tortilla, salsa, frijol, queso, pollo"},
    {nombre: "tacos", descripcion: "Tortilla, carne, salsa"},
    {nombre: "pambazo", descripcion: "Bolillo con carne remojado en salsa"},
    {nombre: "carne asada", descripcion: "al carbón", imagen: "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/cow-boy.jpg"},
    {nombre: "hamburguesa", descripcion: "Carne entre 2 panes", imagen: "https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-454/dia-hamburguesa-m.jpg"}
];


module.exports = class Platillo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_descripcion, mi_imagen) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        platillos.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return platillos;
    }

}