const inputTexto = document.querySelector(".uno__texto-encriptar");
const inputMensaje = document.querySelector(".dos__encriptado-texto");
const btnEncriptar = document.querySelector(".uno__boton-encriptar");
const btnDesencriptar = document.querySelector(".uno__boton-desencriptar");
const btncopiar = document.querySelector(".dos__boton-copiar");


function encriptar(){
    var texto = inputTexto.value;
    var mensaje = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    document.getElementById("dos__ocultar").style.display = "none";
    inputMensaje.value = mensaje;
}

function desencriptar(){
    var mensaje = inputTexto.value;
    var texto = mensaje
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    document.getElementById("dos__ocultar").style.display = "none";
    inputMensaje.value = texto;
}

function validacion(){
    Swal.fire({
        icon: 'error',
        title: 'Lo sentimos',
        width: 600,
        text: 'Solo se permiten letras minúsculas y sin acento.'
    });
}


function paraEncriptar(){
    if(inputTexto.value.match(/^[a-z,ñ,¿,?,¡,! ]*$/)) {
            encriptar();
    }
    else{
            validacion();
    }
}

function paraDesencriptar(){
    if(inputTexto.value.match(/^[a-z,ñ,¿,?,¡,! ]*$/)) {
            desencriptar();
    }
    else{
            validacion();
    }
}

function textocopiado(){
    Swal.fire({
        toast: true,
        position: 'center',
        icon: 'success',  
        title: 'Texto copiado',
        showConfirmButton: false,
        timer: 1000,
    });
}

function copiar(){
    var mensaje = inputMensaje.value;
    
    navigator.clipboard.writeText(mensaje).then(() =>{
        inputTexto.value = '';
        textocopiado();
    })
}


btnEncriptar.onclick = paraEncriptar;
btnDesencriptar.onclick = paraDesencriptar;
btncopiar.onclick = copiar;