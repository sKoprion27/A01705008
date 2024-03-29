function Entrada1() {
    // Entrada: un número pedido con un prompt. 
    // Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
    let num = prompt("Introduce un número positivo");
    if (num < 0) {
        alert("Introduce un número positivo");
    } else {
        // genera el encabezado de la tabla
        document.write("<table> <tr> <th>número introducido   </th> <th>potencia</th> </tr> <tr>");
        for (let i = 0; i < num; i++) {
            // introduce los numeros y las potencias a la tabla
            document.write(" <td>" + (i + 1) + "</td> ");
            document.write("<td> " + (i + 1) ** 2 + "</td> ");
            document.write("</tr> ");
        }

    }
}

function Entrada2() {
    // Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
    // Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
    let randomNum1 = Math.floor(Math.random() * 10);
    let randomNum2 = Math.floor(Math.random() * 10);
    // se checa el tiempo al iniciar la operacion
    let t0 = performance.now();
    let respuesta = prompt(randomNum1 + "+" + randomNum2);
    // se checa el tiempo al finalizar la operacion
    let t1 = performance.now();
    // se resta del tiempo al finalizar el tiempo al iniciar y se conviernte de milisegundos a segundos
    let totaltime = (t1 - t0) * 0.001;
    if (respuesta == (randomNum1 + randomNum2) ) {
        // toFixed para limitar la cantidad de decimales
        alert("La respuesta " + respuesta + " es correcta, se respondio en " + totaltime.toFixed(2) + " seg");
    } else {
        alert("La respuesta " + respuesta + " es incorrecta");
    }
}

function Entrada3() {
    var x = document.getElementById("Entrada3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }    
}

// se genera el arreglo vacio como variable global
var arr = [];

function cuentaArreglos(){
    // Función: contador. Parámetros: Un arreglo de números. 
    // Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
    let positivos =0, negativos=0, ceros=0;
    for(let i =0; i <= arr.length-1; i++){
        // se cuentan los positivos, negativos y ceros
        if (arr[i] == 0){
            ceros++;
        }else if (arr[i] > 0){
            positivos++;
        }else{
            negativos++;
        }
    }
    // se muestra el resultado
    alert("Numero de Positivos: " + positivos + " Negativos: " + negativos + " Ceros: " + ceros)

}


function agregaItem(item){
    // se agrega el item al arreglo arr
    arr.push(item);
    // se agrega el item al div
    document.getElementById("displayArr").innerHTML += item + " " 
}

var calificaciones=[[],[],[]];
// Función: promedios. Parámetros: Un arreglo de arreglos de números. 
// Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

function Entrada4() {
    var x = document.getElementById("Entrada4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }    
}

function agregarCalf( calificacion){
    let index = document.querySelector('input[name="Radios"]:checked').value
    if(calificacion < 0){
        alert("Por favor introduce un numero positivo")
    }else{
        calificaciones[index].push(calificacion);
        switch(index){
            case '0':
            document.getElementById("Ricardo").innerHTML += calificaciones[index][calificaciones[index].length-1] + " "
            break;
            case '1':
            document.getElementById("Eduardo").innerHTML += calificaciones[index][calificaciones[index].length-1] + " "
            break;
            case '2':
            document.getElementById("Julio").innerHTML += calificaciones[index][calificaciones[index].length-1] + " "
            break;
            default:
            // console.log(`no entro | index: ${index}.`);
        }
    }
}

function Promedios(){
    for (let i = 0; i < calificaciones.length; i++) {
        // console.log(calificaciones[i]);
        for (let j = 0; j < calificaciones[i].length; j++) {
            console.log("i: " + i);
            console.log("j: " + j);
            var acum =0;
            console.log("arreglo " + calificaciones[i][j]);
            console.log("acum antes del sum "+ acum)
            acum += calificaciones[i][j];
            console.log("acum despues del sum "+ acum)
        }
        console.log("acum afuera "+acum)
        console.log("-------------------")
     }
}



// Función: inverso. Parámetros: Un número. 
// Regresa: El número con sus dígitos en orden inverso.

function Entrada5() {
    var x = document.getElementById("Entrada5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
}

function InvertirNum(numero) {
    document.getElementById("displayReverse").innerHTML = "El número invertido :  "
    var invertido = 0
    var resto = numero
    do {
        invertido = invertido * 10 + (resto % 10)
        resto = Math.floor(resto / 10)
    } while ( resto > 0 )
    
    document.getElementById("displayReverse").innerHTML += invertido;
}

function EntradaExtra() {
    // Crea una solución para un problema de tu elección(puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, 
    // un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros).El problema debe estar descrito en un documento HTML,
    // y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos.
    // Muestra los resultados en el documento HTML.
}

function showPreguntas() {
    var x = document.getElementById("preguntas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}