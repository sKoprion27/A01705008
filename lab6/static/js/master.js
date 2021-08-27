function equivalenciaPassword(password1, password2){
    display = document.getElementById("display")
    if(password1 === password2){
        display.style.color = "green";
        display.innerHTML = "Las contraseñas coinciden"
        ComprobarPassword(password2);
    }else{
        display.style.color = "red";
        display.innerHTML = "Las contraseñas no coinciden"
    }
    
}

function ComprobarPassword(password){
    var flagnumeros = 0;
    var flagmayusculas = 0;
    var flagminusculas = 0;
    var flagcaracteresEspeciales = 0;
    var flaglongitud = 0;
    var flagespacio = 0;
    // equivalencia en asscii de los caracteres especiales
    var caracteresEspeciales = [33,35,36,40,41,42,44,45,46,47,58,59,61,63,64,123,125];
    // comparar caracter por caracter de la contraseña
    for(let i=0; i<password.length; i++){
        // rango de numeros en asscci
        if(password[i].charCodeAt() <= 57 && password[i].charCodeAt() >= 48){
            flagnumeros = 1;
        }
        // rango de mayusculas en asscci
        if(password[i].charCodeAt() <= 90 && password[i].charCodeAt() >= 65){
            flagmayusculas = 1;
        }
        // rango de minuscualas en asscci
        if(password[i].charCodeAt() <= 122 && password[i].charCodeAt() >= 97){
            flagminusculas = 1;
        }

        if(password.length >=8){
            flaglongitud = 1;
        }

        if(password[i].charCodeAt() == 32){
            flagespacio = 1;
        }
// se compara cada uno de los caracteres especiales, con cada letra del password
        for(let j=0; j <caracteresEspeciales.length; j++){
            if(caracteresEspeciales[j] === password[i].charCodeAt()){
                flagcaracteresEspeciales = 1;
                j = caracteresEspeciales.length;
            }
        }
        
        
        // cambio de color de los textos   
        if (flagnumeros === 0){
            document.getElementById("numeros").style.color = "red";
        }else{
            document.getElementById("numeros").style.color = "green";
        }  
        if (flagmayusculas === 0){
            document.getElementById("mayusculas").style.color = "red";
        }else{
            document.getElementById("numeros").style.color = "green";
        }
        if (flagminusculas === 0){
            document.getElementById("minusculas").style.color = "red";
        }else{
            document.getElementById("minusculas").style.color = "green";
        }
        if (flaglongitud === 0){
            document.getElementById("longitud").style.color = "red";
        }else{
            document.getElementById("longitud").style.color = "green";
        }
        if (flagespacio === 1){
            document.getElementById("espacio").style.color = "red";
        }else{
            document.getElementById("espacio").style.color = "green";
        }
        if (flagcaracteresEspeciales === 0){
            document.getElementById("caracteresEspeciales").style.color = "red";
        }else{
            document.getElementById("caracteresEspeciales").style.color = "green";
        }

        // controlador de la barra de progreso
        
        document.getElementById("progressPassword").style.width = "50%";

 
    }
}

