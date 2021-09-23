function equivalenciaPassword(password1, password2) {
    display = document.getElementById("display")
    if (password1 === password2) {
        display.style.color = "green";
        display.innerHTML = "Las contraseñas coinciden"
        ComprobarPassword(password2);
    } else {
        display.style.color = "red";
        display.innerHTML = "Las contraseñas no coinciden"
    }

}

function ComprobarPassword(password) {
    var flag = [flagnumeros = 0, flagmayusculas = 0, flagminusculas = 0, flagcaracteresEspeciales = 0, flaglongitud = 0, flagespacio = 0];
    // equivalencia en asscii de los caracteres especiales
    var caracteresEspeciales = [33, 35, 36, 40, 41, 42, 44, 45, 46, 47, 58, 59, 61, 63, 64, 123, 125];
    var progresbar =document.getElementById("progressPassword")
    // comparar caracter por caracter de la contraseña
    for (let i = 0; i < password.length; i++) {
        // rango de numeros en asscci
        if (password[i].charCodeAt() <= 57 && password[i].charCodeAt() >= 48) {
            flagnumeros = 1;
        }
        // rango de mayusculas en asscci
        if (password[i].charCodeAt() <= 90 && password[i].charCodeAt() >= 65) {
            flagmayusculas = 1;
        }
        // rango de minuscualas en asscci
        if (password[i].charCodeAt() <= 122 && password[i].charCodeAt() >= 97) {
            flagminusculas = 1;
        }

        if (password.length >= 8) {
            flaglongitud = 1;
        }

        if (password[i].charCodeAt() == 32) {
            flagespacio = 1;
        }
        // se compara cada uno de los caracteres especiales, con cada letra del password
        for (let j = 0; j < caracteresEspeciales.length; j++) {
            if (caracteresEspeciales[j] === password[i].charCodeAt()) {
                flagcaracteresEspeciales = 1;
                j = caracteresEspeciales.length;
            }
        }

        var totalFlags = 0;
        // cambio de color de los textos   
        if (flagnumeros === 0) {
            document.getElementById("numeros").style.color = "red";
        } else {
            document.getElementById("numeros").style.color = "green";
            totalFlags++;
        }
        if (flagmayusculas === 0) {
            document.getElementById("mayusculas").style.color = "red";
        } else {
            document.getElementById("mayusculas").style.color = "green";
            totalFlags++;
        }
        if (flagminusculas === 0) {
            document.getElementById("minusculas").style.color = "red";
        } else {
            document.getElementById("minusculas").style.color = "green";
            totalFlags++;
        }
        if (flaglongitud === 0) {
            document.getElementById("longitud").style.color = "red";
        } else {
            document.getElementById("longitud").style.color = "green";
            totalFlags++;
        }
        if (flagespacio === 1) {
            document.getElementById("espacio").style.color = "red";
        } else {
            document.getElementById("espacio").style.color = "green";
            totalFlags++;
        }
        if (flagcaracteresEspeciales === 0) {
            document.getElementById("caracteresEspeciales").style.color = "red";
        } else {
            document.getElementById("caracteresEspeciales").style.color = "green";
            totalFlags++;
        }

        // controlador de la barra de progreso

        var nivelBarra;
        if (totalFlags == 0) {
            nivelBarra = 0;
        } else {
            nivelBarra = (100 / 6)*totalFlags;
        }
        switch(totalFlags){
            case 1:
            case 2:
                progresbar.classList.add('bg-danger');
                progresbar.innerHTML="Debil";
                break;
                case 3:
                    case 4:
                progresbar.classList.remove('bg-danger');
                progresbar.classList.add('bg-warning');
                progresbar.innerHTML=" Media";
                break;
                case 5:
                    case 6:
                progresbar.classList.remove('bg-warning');
                progresbar.classList.add('bg-success');
                progresbar.innerHTML="Fuerte";
            break;
        }
        nivelBarra += '%';
        progresbar.style.width = nivelBarra;



    }
}

