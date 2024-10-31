let seleccionActual = 1;

function  pintarOpcion(){
    let posicion1 = document.getElementById("numero_par");
    let posicion2 = document.getElementById("numero_impar");
    let posicion3 = document.getElementById("numero_primo");
    let posicion4 = document.getElementById("divisores");

    posicion1.style.backgroundColor = "white";
    posicion1.style.border = "none";

    posicion2.style.backgroundColor = "white";
    posicion2.style.border = "none";

    posicion3.style.backgroundColor = "white";
    posicion3.style.border = "none";

    posicion4.style.backgroundColor = "white";
    posicion4.style.border = "none";

    switch (seleccionActual){
        case 1:
            posicion1.style.backgroundColor = "#eb3333";
            posicion1.style.border = "2px solid black";

        break;

        case 2:
            posicion2.style.backgroundColor = "#eb3333";
            posicion2.style.border = "2px solid black";
        break;

        case 3:
            posicion3.style.backgroundColor = "#eb3333";
            posicion3.style.border = "2px solid black";
        break;

        case 4:
            posicion4.style.backgroundColor = "#eb3333";
            posicion4.style.border = "2px solid black";
        break;
    }


}

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
    let num = parseInt(document.getElementById("ventana-calculo").value)
    switch (seleccionActual) {
        case 1:
            if (num % 2 === 0){
                document.getElementById("resultado_operacion").value = "Es par!!";
            }
            else {
                document.getElementById("resultado_operacion").value = "No es par..";

            }
            break;

        case 2:
            if (num % 2 !== 0){
                document.getElementById("resultado_operacion").value = "No es par!!";
            }
            else {
                document.getElementById("resultado_operacion").value = "Es par..";

            }
            break;

        case 3:
            if (esPrimo(num)){
                document.getElementById("resultado_operacion").value = "Es primo!!";
            }

            else {
                document.getElementById("resultado_operacion").value = "No es primo";

            }
            break;

        case 4:
            let divisores = obtenerDivisores(num)
            document.getElementById("resultado_operacion").value = "Los divisores: " + divisores

    }
}