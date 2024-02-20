function validarDNI() {
    let numeros = parseInt(document.getElementById("dni-numbers").value);
    if (numeros < 0 || numeros > 99999999) {

        alert("El DNI introducido no es valido.......")

    } else {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let letraCalculada = letras[numeros % 23];
        mostrarDNIValidado(letraCalculada);
    }
}
function mostrarDNIValidado(letraCalculada) {
    alert("El DNI introducido es valido y su letra es: " + letraCalculada)
}