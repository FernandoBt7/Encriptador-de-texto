document.addEventListener("DOMContentLoaded", function() {
    const botonEncriptar = document.querySelector(".boton-encriptar");
    const botonDesencriptar = document.querySelector(".boton-desencriptar");
    const botonCopiar = document.querySelector(".boton-copiar");
    const textarea = document.querySelector(".placeholder");
    const mensaje = document.querySelector(".mensaje");
    const avisoAlerta = document.querySelector(".aviso-alerta");
    const muneco = document.querySelector(".muneco");
    const ningunTexto = document.querySelector(".ningun-texto-encontrado");

    // Función para verificar caracteres inválidos
    function validarTexto(texto) {
        const contieneMayusculas = /[A-Z]/.test(texto);
        const contieneSignosEspeciales = /[^\w\s]/.test(texto);

        return !contieneMayusculas && !contieneSignosEspeciales;
    }

    // Función para encriptar el texto
    function encriptarTexto(texto) {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    }

    // Función para manejar el encriptado
    botonEncriptar.addEventListener("click", function() {
        const texto = textarea.value;
        if (texto.trim() === "") {
            avisoAlerta.style.opacity = "1";
            avisoAlerta.textContent = "El campo no puede estar vacío.";
            mensaje.value = "";
        } else if (!validarTexto(texto)) {
            avisoAlerta.style.opacity = "1";
            avisoAlerta.textContent = "Solo se permiten letras minúsculas y sin signos especiales.";
            mensaje.value = "";
        } else {
            avisoAlerta.style.opacity = "0";
            const textoEncriptado = encriptarTexto(texto);
            mensaje.value = textoEncriptado;
            botonCopiar.style.opacity = "1";
            botonCopiar.style.visibility = "visible";
            
            // Ajustar visibilidad
            muneco.style.display = "none"; // Ocultar el muñeco
            ningunTexto.style.display = "none"; // Ocultar el mensaje de texto no encontrado
            mensaje.style.display = "block"; // Mostrar el cuadro de desencriptado
        }
    });

    // Función para manejar el desencriptado
    botonDesencriptar.addEventListener("click", function() {
        const texto = textarea.value;
        if (texto.trim() === "") {
            avisoAlerta.style.opacity = "1";
            avisoAlerta.textContent = "El campo no puede estar vacío.";
            mensaje.value = "";
        } else if (!validarTexto(texto)) {
            avisoAlerta.style.opacity = "1";
            avisoAlerta.textContent = "Solo se permiten letras minúsculas y sin signos especiales.";
            mensaje.value = "";
        } else {
            avisoAlerta.style.opacity = "0";
            const textoDesencriptado = desencriptarTexto(texto);
            mensaje.value = textoDesencriptado;
            botonCopiar.style.opacity = "1";
            botonCopiar.style.visibility = "visible";
            
            // Ajustar visibilidad
            muneco.style.display = "none"; // Ocultar el muñeco
            ningunTexto.style.display = "none"; // Ocultar el mensaje de texto no encontrado
            mensaje.style.display = "block"; // Mostrar el cuadro de desencriptado
        }
    });

    // Función para copiar el texto al portapapeles
    botonCopiar.addEventListener("click", function() {
        mensaje.select();
        document.execCommand("copy");
    });
});
