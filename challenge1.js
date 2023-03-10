
const button1 = document.getElementById("encriptarbutton"); //boton de encriptar
const button2 = document.getElementById("desencriptarbutton"); //boton de desencriptar
const button3 = document.getElementById("reiniciarbutton");
const button4 = document.getElementById("copiarbutton");

function validarinput(textref) {
    const conditionInput = /^[a-z\s]*$/; //condicion que debe tener el texto ingresado = minusculas sin caracteres especiales ni numeros
    if (textref==""||textref.length==0 || textref.toLowerCase() != textref || textref.search(conditionInput) ){
        alert("Por favor, ingrese un texto valido.")
        return false;  
    }
    else {
        return true;    
    }
}
function validarInputResultante(textref1, textref2) { //funcion para validad que los textos objetivos no sean iguales
    if (textref1!=textref2) { // si el resultado del desencriptado es diferente, entonces se puede mostrar dicho resultado, de lo contrario, se lanza un mensaje.
        return true;
    }
    else {
        return false;
    }
}

function replacesEncripted(inputTextRef, newTextRef ) { //funcion que reemplaza los caracteres por sus llaves en ENCRIPTADO
    for (let i=0; i<inputTextRef.length;i++) {
        let letter = inputTextRef.charAt(i); //actualizacion de la letra a recorrer de forma constante
        if (letter=="a") {
            letter="ai"
            newTextRef+=letter;
        }
        else if (letter=="e") {
            letter="enter"
            newTextRef+=letter;
        }
        else if (letter=="i") {
            letter="imes"
            newTextRef+=letter;
        }
        else if (letter=="o") {
            letter="ober"
            newTextRef+=letter;
        }
        else if (letter=="u") {
            letter="ufat"
            newTextRef+=letter;
        }
        else {
            newTextRef+=letter //en caso que ninguna condicion se cumpla, entonces se concatena la letra por defecto.
        }
    }
    return newTextRef; //resultado=texto encriptado
}
function replacesDesencripted(inputTextRef, newTextRef ) { //funcion que reemplaza los caracteres por sus llaves en DESENCRIPTADO
    newTextRef = inputTextRef.replaceAll("ai","a");
    newTextRef = newTextRef.replaceAll("enter","e");
    newTextRef = newTextRef.replaceAll("imes","i");
    newTextRef = newTextRef.replaceAll("ober","o");
    newTextRef = newTextRef.replaceAll("ufat","u");
    return newTextRef; //resultado=texto encriptado
}
button1.addEventListener("click",encriptar); //evento para encriptar
function encriptar() { //si aun no se encripto, el valor booleano sera verdadero //ejemplo: hola como estas = hoberlai cobermober enterstars   
        let inputText = document.getElementById("inputText").value; //texto de ingreso por parte del usuario
            if (document.getElementById("textoresultado").value=="") {
                if (validarinput(inputText)) {
                    let arbitraryText = ""; //cadena vacia para posteriormente concatenar con cada caracter correspondiente
                    let encriptedText1 = replacesEncripted(inputText, arbitraryText);
                    alert("??TEXTO ENCRIPTADO!");    
                    const resultado = document.getElementById("textoresultado");
                    resultado.innerHTML = encriptedText1;
                    document.getElementById("inputText").value =""; //reset del textarea de ingreso
                }  
            }
            else {
                let resultadoDesencriptado = document.getElementById("textoresultado").value; //acceso al texto ya deseencriptado
                arbitraryText = "";
                let encriptedText = replacesEncripted(resultadoDesencriptado, arbitraryText);
                let result2 = validarInputResultante(resultadoDesencriptado, encriptedText); 
                if (result2) {
                    let result1 = confirm("!EL SIGUIENTE TEXTO SERA ENCRIPTADO!\n"+resultadoDesencriptado);
                    if (result1) {
                        alert("??TEXTO ENCRIPTADO!");
                        const encriptedresult = document.getElementById("textoresultado");
                        encriptedresult.innerHTML = encriptedText;
                    }
                }
            }
        
        
       
}
button2.addEventListener("click",desencriptar); //evento para desencriptar
function desencriptar() {
        let inputText = document.getElementById("inputText").value; //compruebo si es el texto que va a ingresar el usuario
            if (document.getElementById("textoresultado").value=="") {
                if (validarinput(inputText)) {
                    let arbitraryText1 = ""; 
                    let desencriptedText1 = replacesDesencripted(inputText, arbitraryText1);
                    alert("TEXTO DESENCRIPTADO!");
                    const result = document.getElementById("textoresultado");
                    result.innerHTML = desencriptedText1;
                    document.getElementById("inputText").value = ""; 
                }      
            }
            else {
                let resultadoEncriptado = document.getElementById("textoresultado").value; //acceso al texto ya encriptado
                arbitraryText = "";
                let desencriptedText = replacesDesencripted(resultadoEncriptado, arbitraryText);
                let result2 = validarInputResultante(resultadoEncriptado, desencriptedText); //confirmacion para saber si los textos son iguales o no, ya que si el resultado desencriptado es igual, entonces no se "puede" desencriptar
                if (result2) {
                    let result1 = confirm("!EL SIGUIENTE TEXTO SERA DESENCRIPTADO!\n"+resultadoEncriptado);
                    if (result1) {
                        alert("??TEXTO DESENCRIPTADO!");
                        const desencriptedresult = document.getElementById("textoresultado");
                        desencriptedresult.innerHTML = desencriptedText;
                    }       
                }
                else {
                    alert("??ERROR!\nEL TEXTO RESULTANTE NO PUEDE SER DESENCRIPTADO");  
                }
            }
                   
}

function reiniciar() {
        let option = confirm("??Seguro/a que desea reiniciar el encriptador?");
        if (option) {
                location.reload();
        }
}
button3.addEventListener("click",reiniciar); //evento para reiniciar
button4.addEventListener("click",copiar); //evento para copiar el texto que aparexca en el resultado
function copiar() {
        let copyText = document.getElementById("textoresultado");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        //let message = document.getElementById("confirmationCopy");
        document.getElementById("confirmationCopy").style.opacity="100%";
        
}
