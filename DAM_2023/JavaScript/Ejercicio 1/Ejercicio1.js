function cambiarTexto() {
    document.getElementById("texto_del_div").innerText = document.getElementById("input_texto").value;
}

function cambiarFondo() {
    document.getElementById("div_texto").style.backgroundColor = document.getElementById("color_fondo").value;
}

function cambiarBorde() {
    document.getElementById("div_texto").style.borderColor = document.getElementById("color_borde").value;
}

function cambiarColorTexto() {
    document.getElementById("texto_del_div").style.color = document.getElementById("color_texto").value;
}
