let seleccionActual = 1;


function navegarArriba(){
    if (seleccionActual > 1){
        seleccionActual -= 1;
        pintarOpcion();
    }
}

function navegarAbajo() {
    if (seleccionActual < 4) {
        seleccionActual += 1;
        pintarOpcion();
    }
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function obtenerDivisores(numero) {
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}

function calculo(){
    let num = document.getElementById("ventana-calculo").value
    switch (seleccionActual) {
        case 1:
            if (num % 2 === 0){
                document.getElementById("resultado_operacion").value = "El numero introducido es par!!";
            }
            else {
                document.getElementById("resultado_operacion").value = "El numero introducido no es par..";

            }
            break;

        case 2:
            if (num % 2 !== 0){
                document.getElementById("resultado_operacion").value = "El numero introducido no es par...";
            }
            else {
                document.getElementById("resultado_operacion").value = "El numero introducido no es par";

            }
            break;

        case 3:
            if (esPrimo(num)){
                document.getElementById("resultado_operacion").value = "El numero introducido es primo!!";
            }

            else {
                document.getElementById("resultado_operacion").value = "El numero introducido no es primo";

            }
            break;

        case 4:
            let divisores = obtenerDivisores(num)
            document.getElementById("resultado_operacion").value = "Los divisores del numero intoducido son: " + divisores

    }
}