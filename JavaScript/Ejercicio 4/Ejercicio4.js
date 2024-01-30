
function sumar(){
    let num1 = parseInt(document.getElementById("numero_1").value);
    let num2 = parseInt(document.getElementById("numero_2").value);
    document.getElementById("resultado_operacion").value = num1 + num2;
}

function restar() {
    let num1 = parseInt(document.getElementById("numero_1").value);
    let num2 = parseInt(document.getElementById("numero_2").value);
    document.getElementById("resultado_operacion").value = num1 - num2;
}

function producto(){
    let num1 = parseInt(document.getElementById("numero_1").value);
    let num2 = parseInt(document.getElementById("numero_2").value);
    document.getElementById("resultado_operacion").value = num1 * num2;
}

function division(){
    let num1 = parseInt(document.getElementById("numero_1").value);
    let num2 = parseInt(document.getElementById("numero_2").value);
    document.getElementById("resultado_operacion").value = num1 / num2;
}

function limpiar(){
    document.getElementById("resultado_operacion").value = " ";
    document.getElementById("numero_1").value = " ";
    document.getElementById("numero_2").value = " ";
}