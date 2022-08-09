
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var botonCopiar = document.querySelector(".copiar");
var botonLimpiar = document.querySelector(".limpiar");
var dibujo = document.querySelector(".dibujo");
var textoArea2 = document.querySelector(".texto_area2");
var textoEncriptado = document.querySelector(".texto_encriptado");
var titulo = document.querySelector(".titulo_encriptado");
var textoEncriptar = document.querySelector(".texto_a_encriptar");

botonCopiar.classList.add("ocultar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
botonLimpiar.onclick = limpiar;

function encriptar(){
    ocultarArea2();
    var textoEncriptadoMostrado = recuperarTexto;
    textoEncriptado.textContent = encriptarTexto(textoEncriptadoMostrado());
    titulo.textContent = ("Texto Encriptado");
    botonCopiar.classList.remove("ocultar");
}

function desencriptar(){
    ocultarArea2();
    var textoEncriptadoMostrado = recuperarTexto;
    textoEncriptado.textContent = desencriptarTexto(textoEncriptadoMostrado());
    titulo.textContent = ("Texto Desencriptado");
}

function copiar(){
    textoEncriptar.value = textoEncriptado.textContent;
}

function limpiar(){
   location.reload();
}

function recuperarTexto(){
    return textoEncriptar.value;
}

function ocultarArea2(){
    dibujo.classList.add("ocultar");
    textoArea2.classList.add("ocultar");
}

function encriptarTexto(mensaje){
   var texto = mensaje;
    var textoFinal = "";
    for (var i=0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for (var i=0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

