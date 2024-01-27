function cambiarTexto() {
    var nuevoTexto = document.getElementById("input_texto").value;
    document.getElementById("texto_del_div").innerText = nuevoTexto;
}

function cambiarFondo() {
    var nuevoColorFondo = document.getElementById("color_fondo").value;
    document.getElementById("div_texto").style.backgroundColor = nuevoColorFondo;
}

function cambiarBorde() {
    var nuevoColorBorde = document.getElementById("color_borde").value;
    document.getElementById("div_texto").style.borderColor = nuevoColorBorde;
}

function cambiarColorTexto() {
    var nuevoColorTexto = document.getElementById("color_texto").value;
    document.getElementById("texto_del_div").style.color = nuevoColorTexto;
}
