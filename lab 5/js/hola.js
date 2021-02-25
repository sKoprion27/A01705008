function numRand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function alerta1() {
    const numeros = window.prompt('ingresa tu numero');

    for (var i = 0; i < numeros; i++) {
        document.write('|numero: ' + (i + 1) + '| su cuadrado: ' + Math.pow(i + 1, 2) + "|");

    }
}


function alerta2(){
    var num1 = numRand(1,99);
    var num2 = numRand(1,99);
    var tiempo;
    var primeraToma = Date.now();
    const respuesta = window.prompt('Por favor ingresa el resultado de ' + num1 + '+' + num2);
    var segundaToma = Date.now();
    tiempo = (segundaToma-primeraToma)/1000;
    console.timeEnd("t1");
    if(respuesta == num1 + num2){
        window.alert("repuestra correcta"); 
    }else window.alert("repuestra incorrecta");

    window.alert('Tardaste ' +tiempo+ ' segundos')
}


void contador(int []){

}
