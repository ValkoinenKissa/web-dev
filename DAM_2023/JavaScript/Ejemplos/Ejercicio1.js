// Se crea una funcion  que llamda saludar que crean un h1 y un p para saludar
function saludar() {
    alert("Ola k ase \n Hola, mi nombre es Alberto");
}
/*
Crea un array llamado dias que almacene el nombre de los días de la semana,
empezando por el Lunes y luego los escriba en la página html en líneas distintas. Utiliza
para ello la función document.write
 */

function dias_semana(){
    var dias_semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    for(let i =0; i<1; i++){
        document.write(dias_semana + " ")
    }
}

function numeros_pares() {
    var contador=0;
    var numero =0;
    while (contador < 20){
        numero = numero +1
        if (numero % 2 === 0){
            document.write(numero + " ");
            contador++;
        }
    }
}

function multiplos_de_siete() {
    let contador = 0
    let numero = contador
    while(contador<500){
        document.write(contador + " ")
        contador+=7
        numero++;
    }

}

function verificar_par_impar() {
    let input = prompt("Introduce un numero");
    let numero1 = parseInt(input);

    if(!isNaN(numero1)) {
        // El valor ingresado es un número
        if (numero1 % 2 === 0) {
            alert(numero1 + " es par");
        } else {
            alert(numero1 + " es impar");
        }
    } else {
        // El valor ingresado no es un número
        alert("No has introducido un numero");
    }
}


function titrar_dados() {
    var dado1 = Math.floor(Math.random() * 100) + 1;
    var dado2 = Math.floor(Math.random() * 100) + 1;
    document.write('<p>Tirada dado 1: ' + dado1 + '</p>');
    document.write('<p>Tirada dado 2: ' + dado2 + '</p>');
}


function primitiva(){
    for(i=0; i<6; i++){
        var num = Math.floor(Math.random() * 49 + 1);
        document.write("<b>Numero " + (i+1)+ ": " + num)
    }
}


function quiniela(){
    for(i=0; i<14; i++) {
        num_aleatorio = Math.floor(Math.random() * 3 + 1)
        if (num_aleatorio == 3) {
            document.write("<p>X</p>")
        } else {
            document.write("<p>" +num_aleatorio +"</p>")
        }

    }

    function DamePartido()
    {
        num_aleatorio1 = Math.floor(Math.random() * 4)
        if(num_aleatorio1 == 3){
            num_aleatorio1="M";
        }
        return num_aleatorio1;
    }



    document.write("Partido 15: "+DamePartido()+"-"+DamePartido())


}

function numAleatroio(){
    do{
        num_aleatorio = Math.floor(Math.random() * 1000 + 1)
        document.write("<p>"+ num_aleatorio + "</p>")
    }while (num_aleatorio != 666)
}

function manipularArrays(){
    let a =5;
    let b=a;
    a=10;

    document.write("a=" +a+ "b=" +b);
    var ar1 = [1,2,3,4,5, "hola"];
    var ar2 = ar1;
    ar1[0]=10;

    // ar1= 1,2,3,4,5, "hola"
    //arr2= 1,2,3,4,5, "hola"

    console.log("arr1"+ ar1 + " arr2" + ar2)

}


