function showPreguntas() {
    var x = document.getElementById("preguntas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Entrada1() {
    // Entrada: un número pedido con un prompt. 
    // Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
    let num = prompt("Introduce un número positivo");

    if (num < 0) {
        alert("Introduce un número positivo");
    } else {
        document.open();
        document.write("<table> <tr> <th>número introducido   </th> <th>potencia</th> </tr> <tr>");
        for (let i = 0; i < num; i++) {
            document.write(" <td>" + (i + 1) + "</td> ");
            document.write("<td> " + (i + 1) ** 2 + "</td> ");
            document.write("</tr> ");
        }

        document.close();
    }
}

function Entrada2() {
    // Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
    // Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
    let randomNum1 = Math.floor(Math.random() * 10);
    let randomNum2 = Math.floor(Math.random() * 10);
    var t0 = performance.now();
    let respuesta = prompt(randomNum1 + "+" + randomNum2);
    var t1 = performance.now();
    var totaltime = (t1-t0) * 0.001;
    if(respuesta == (randomNum1 + randomNum2)){
        alert("La respuesta" + respuesta +"es correcta, se respondio en " + totaltime.toFixed(2) + "seg");
    }else{
        alert("La respuesta" + respuesta +"es incorrecta");
    }


}