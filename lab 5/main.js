function showPreguntas() {
    var x = document.getElementById("preguntas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Entrada1() {
    let num = prompt("Introduce un número positivo");

    if (num < 0) {
        alert("Introduce un número positivo");
    } else {
        document.open();
        document.write("<table> <tr> <th>número introducido   </th> <th>potencia</th> </tr> <tr>");
        for (let i = 0; i < num; i++) {
            document.write(" <td>"+(i+1)+"</td> ");
            document.write("<td> "+(i+1)**2+"</td> ");
            document.write("</tr> ");
        }
        
        document.close();
    }
}|