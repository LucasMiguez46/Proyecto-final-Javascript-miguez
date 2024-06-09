//esto es un comentario
// alert("hola mundo!");

// function validarEdadYNombre() {
//     let edad = document.getElementById("edad").value;
//     let nombre = document.getElementById("nombre").value;

//     console.log("Tu nombre es: " + nombre + ", " + "Tu edad es: " + edad);
//     alert("Tu nombre es: " + nombre + ", " + "Tu edad es: " + edad)
// }

//  function validarEdad() {
//      let edad = document.getElementById("edad").value;
//      console.log("Tu edad es: " + edad);
//      alert("Tu edad es: " + edad)
//  }

// function validarNombre(){
//     let nombre = document.getElementById("nombre").value;
//     console.log("Tu nombre es: " + nombre);
//     alert("Tu nombre es: " + nombre)
// }

// //operaciones basicas numericas==========================================
// let numA=10;
// let numB=20;
// const numC=30;

// //suma
// let resultado = numA + numB;
// alert(resultado);

// //resta
// let resultado2 = numC - numB;
// alert(resultado2);

// //multiplicacion
// let resultado3 = numA * numB;
// alert(resultado3);

// //divicion
// let resultado4 = numC / numA;
// alert(resultado4);



// let nombre=prompt("ingrese su nombre y apellido: ");
// let salida= "buenas: " + nombre + " que tenga un buen dia";
// alert(salida);

// let nombre=prompt("ingrese su nombre y apellido: ");
// let estatura= parseFloat(prompt("ingrese la estatura: "));
// let peso=parseFloat(prompt("ingrese su peso: "));

// let alturaAlCuadrado = estatura * estatura;

// let salida = peso / alturaAlCuadrado;

// alert("buenas " + nombre + "tu IMC es: " + salida.toFixed(2));


//EJEMPLO IF==========================================
// let edad=27;
// let edad = prompt("Por favor ingresar edad: ");

//  if (18<= edad && edad <= 23) {
//      console.log("eres mayor de edad");
//  }else if(edad >=24){
//      console.log("eres un adulto");
//  }else{
//      console.log("eres menor de edad");
//  }

// let producto1 = parseFloat(prompt("Ingrese el importe del producto1: "));
// let producto2 = parseFloat(prompt("Ingrese el importe del producto2: "));

// let total = producto1 + producto2;

// if (total > 10000) {
//     total = total * 0.9;
// } 

// alert("el total a pagar es: " + total);

//EJEMPLO FOR==========================================
// alert("inicio");

// let ingresarNumero = parseInt(prompt("ingresar un numero entero: "));
// let salida = "tabla del " + ingresarNumero + "\n\n";


//ejemplo original
// for (let i = 0; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     alert(ingresarNumero +" X "+ i +" = "+ resultado);
    
// }



// for (let i = 0; i <= 10; i++) {
//     // if(i==5){
//     //     break;
//     // }

//     if(i==5){
//         continue;
//     }

//     let resultado = ingresarNumero * i;
//     salida += ingresarNumero +" X "+ i +" = "+ resultado + "\n";
  
    
// }

// alert(salida);
// alert("fin");

// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
// while(entrada != "ESC" ){
//    switch (entrada.toUpperCase()) {
//        case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//        default:
//            alert("¿QUIÉN SOS?")
//            break;
//    }
//    entrada = prompt("Ingresar un nombre");
// }

//prueba para saber si una palabra es capicua
let palabra=prompt("escriba una palabra para saber si es capicua: ");
let palabraN=palabra.split("").reverse().join("");

if(palabra===palabraN){
    alert("es capicua");
}else{
    alert("no es capicua");
}