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
    let flagnumeros = 0;
    let flagmayusculas = 0;
    let flagminusculas = 0;
    let flagcaracteresEspeciales = 0;
    let flaglongitud = 0;
    let flagespacio = 1;
    let caracteresEspeciales = [33,35,36,40,41,42,44,45,46,47,58,59,61,63,64,123,125];
    for(let i=0; i<password.length; i++){
        
        if(password[i].charCodeAt() <= 57 && password[i].charCodeAt() >= 48){
            flagnumeros = 1;
        }
        if(password[i].charCodeAt() <= 90 && password[i].charCodeAt() >= 65){
            flagmayusculas = 1;
        }
        if(password[i].charCodeAt() <= 122 && password[i].charCodeAt() >= 97){
            flagminusculas = 1;
        }
        console.log(password.length);
        if(password.length >=8){
            flaglongitud = 1;
        }

        // console.log("cont: " + password[i]);
        // console.log("cont: " + password[i].charCodeAt());
        if(password[i].charCodeAt() == 32){
            flagespacio = 0;
        }

        while (flagcaracteresEspeciales == 0) {
            let j = 0
            if(caracteresEspeciales[j] == password[i]){
                flagcaracteresEspeciales = 1;
            }

        }
        
        
        // cambio de color de los textos   
        if (flagnumeros === 0){
            document.getElementById("numeros").style.color = "red";
        }else{
            document.getElementById("numeros").style.color = "green";
        }  
        if (flagmayusculas === 0){
            document.getElementById("mayusculas").style.color = "green";
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
        if (flagespacio === 0){
            document.getElementById("espacio").style.color = "red";
        }else{
            document.getElementById("espacio").style.color = "green";
        }
        if (flagcaracteresEspeciales === 0){
            document.getElementById("caracteresEspeciales").style.color = "red";
        }else{
            document.getElementById("caracteresEspeciales").style.color = "green";
        }

 
    }
}