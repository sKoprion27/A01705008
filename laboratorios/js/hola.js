console.log("Hola, mundo");

const precio = 22;
console.info("el precio de los tacos es de $" + precio);

let cantidad_tacos = 4;

console.log("Te voy a mandar " + cantidad_tacos + " tacos");

let persona = "lalo";
let descuento = 0;

if (cantidad_tacos > 6 && persona === "lalo"){
    descuento = 0.1 * (cantidad_tacos * precio);
}


const por_tacos = cantidad_tacos * precio - descuento;

console.info("Por pagar : " + por_tacos);

const clientes = [];

clientes.push('lalo');
clientes.push('javier');
clientes.push('julio')

for (let cliente of clientes){
    console.log(clientes);
}


const menu = [];
menu.push({nombre: 'El paisa', precio: 22});
menu.push({nombre: 'El Tacoshino', precio: 29});

console.log(menu);

const calcular_cuenta = (tacos) =>{
    return tacos*22;
}

console.log(' la cuenta es de : $' + calcular_cuenta(7) );





