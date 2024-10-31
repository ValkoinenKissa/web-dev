function capturarValores(){
    let valorTexto = document.getElementById("caja_texto").value;
    let valorNumero = document.getElementById("caja_numero").value;
    let valorContrasena = document.getElementById("caja_pass").value
    let fecha = document.getElementById("caja_fecha").value
    let hora = document.getElementById("caja_numero").value
    let botonRadio = document.getElementById("caja_radio").value
    let valorCheckbox = document.getElementById("checkmark").checked;
    let valorSelect = document.getElementById("check_select").value;

    // Mostrar los valores en una ventana de alerta
    let mensaje = "TEXTO: " + valorTexto + "\n" +
        "NUMERO: " + valorNumero + "\n" +
        "PASSWORD: " + valorContrasena + "\n" +
        "FECHA: " + fecha + "\n" +
        "HORA: " + hora + "\n" +
        "RADIO: " + (botonRadio ? "TRUE" : "FALSE") + "\n" +
        "CHECKBOX: " + (valorCheckbox ? "TRUE" : "FALSE") + "\n" +
        "SELECT: " + valorSelect;

    alert(mensaje);
}