const textarea = document.querySelector(".textarea1");
const textareaMensaje = document.querySelector(".textarea2");
const botonCopiar = document.querySelector(".btn-copiar");
const noEncontrado = document.querySelector(".noMensaje");

function mostrarBoton() {
    botonCopiar.style.display = "inline";
    noEncontrado.style.display = "none"
    textareaMensaje.style.display = "inline";
}

function btnEncriptar() {
    if (textarea.value != "") {
        const textoEncriptado = encriptar(textarea.value);
        textareaMensaje.value = textoEncriptado;
        textarea.value = "";
        textareaMensaje.style.backgroundImage = "none";
        mostrarBoton();
    }
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);
    textareaMensaje.value = textoDesencriptado;
    textarea.value = "";
}

function btnCopiar() {
    
    textareaMensaje.select();
    textareaMensaje.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(textareaMensaje.value)
                .then(() => {
                    alert("Texto copiado: " + textareaMensaje.value);
                })
                .catch(err => {
                    alert("Error al copiar el texto: ", err);
                });
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1] )
        }
        
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0] )
        }
        
    }
    return stringDesencriptada;
}