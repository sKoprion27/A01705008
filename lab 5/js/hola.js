let zero = 0,
    negativos = 0,
    positivos = 0;

function numRand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function alerta1() {
    const numeros = window.prompt('Ingresa tu numero');
    document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">');
    document.write('<div class="panel panel-default">');
    document.write('<div class="panel-heading">Actividad 1</div>');
    document.write('<div class="panel-body">');
    document.write('<ul>');
    for (var i = 0; i < numeros; i++) {
        document.write('<li>numero: ' + (i + 1) + ' su cuadrado: ' + Math.pow(i + 1, 2) + "</li>");
    }
    document.write('</ul>');
    document.write('</div></div>');
}

function contador(arreglo) {

    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == 0) {
            zero++;
        } else if (arreglo[i] < 0) {
            negativos++;
        } else {
            positivos++;
        }

    }
    document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">');
    document.write('<div class="panel panel-default">');
    document.write('<div class="panel-heading">Actividad 3</div>');
    document.write('<div class="panel-body">');
    document.write('<h4>El arreglo contiene</h4> <br>');
    document.write('<ul>');
    document.write('<li>positivos: ' + positivos + '</li>');
    document.write('<li>negtivos: ' + negativos + '</li>');
    document.write('<li>ceros: ' + zero + '</li>');
    document.write('</ul>');
    document.write('</div></div>');
}

function alerta2() {
    var num1 = numRand(1, 99);
    var num2 = numRand(1, 99);
    var tiempo;
    var primeraToma = Date.now();
    const respuesta = window.prompt('Por favor ingresa el resultado de ' + num1 + '+' + num2);
    var segundaToma = Date.now();
    tiempo = (segundaToma - primeraToma) / 1000;
    console.timeEnd("t1");
    if (respuesta == num1 + num2) {
        window.alert("repuestra correcta");
    } else window.alert("repuestra incorrecta");

    window.alert('Tardaste ' + tiempo + ' segundos')
}

function alerta3() {
    const Tam = window.prompt('Ingresa el tamano del arreglo');
    let numeros = new Array;
    for (i = 0; i < Tam; i++) {
        numeros[i] = window.prompt('Ingrersa el numero ' + (i + 1) + ' del arreglo');
    }
    contador(numeros);
}

function alerta4() {
    function promedios(arreglo) {
        let acum = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                acum += arreglo[i][j];
            }
            document.write('<p>El promedio de la fila ' + (i + 1) + 'es' + (tmp / 3) + ' </p>');
        }

    }

    let arreglo = [
        [50, 20, 71],
        [32, 55, 41],
        [10, 20, 30]
    ];
    document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">');
    document.write('<div class="panel panel-default">');
    document.write('<div class="panel-heading">Actividad 4</div>');
    document.write('<div class="panel-body">');
    document.write("Se promedia el arreglo: " + arreglo);
    promedios(arreglo);
    document.write('</div></div>');
    <button type="button" onclick="alerta1()" class="btn btn-primary">Regresar</button>


}

function inverso() {
    const num = window.prompt('Ingresa el numero a invertir ');
    document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">');
    document.write('<div class="panel panel-default">');
    document.write('<div class="panel-heading">Actividad 4</div>');
    document.write('<div class="panel-body">');
    document.write('<p> El numero a invertir es ' + num + '<br>');
    const invertido = 0;
    const resto = num;
    do {
        invertido = invertido * 10 + (resto % 10);
        resto = Math.floor(resto / 10);
    } while (resto > 0)
    document.write('<p> El numero a invertido es: ' + resto);
    document.write('</p>');
    document.write('</div></div>');

}