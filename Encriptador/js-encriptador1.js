//var btnEncriptar = document.querySelector(".encriptar");
const textoEncriptar = document.querySelector(".texto_a_encriptar");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textoEncriptar.value);
    mensaje.value = textoEncriptado;
}
function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar;
}

