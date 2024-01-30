function limpiarTexto_1() {
    document.getElementById("texto_1").value = "";
}

function limpiarTexto_2() {
    document.getElementById("texto_2").value = "";
}

function copiarTexto_2() {
    document.getElementById("texto_2").value = document.getElementById("texto_1").value;
    document.getElementById("texto_1").value = "";

}

function copiarTexto_1() {
    document.getElementById("texto_1").value = document.getElementById("texto_2").value;
    document.getElementById("texto_2").value = "";

}