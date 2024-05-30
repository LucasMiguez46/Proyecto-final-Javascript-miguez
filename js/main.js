//esto es un comentario
// alert("hola mundo!");

function validarEdadYNombre() {
    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById("nombre").value;

    console.log("Tu nombre es: " + nombre + ", " + "Tu edad es: " + edad);
    alert("Tu nombre es: " + nombre + ", " + "Tu edad es: " + edad)
}

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

// //operaciones basicas numericas
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

let nombre=prompt("ingrese su nombre y apellido: ");
let estatura= parseFloat(prompt("ingrese la estatura: "));
let peso=parseFloat(prompt("ingrese su peso: "));

let alturaAlCuadrado = estatura * estatura;

let salida = peso / alturaAlCuadrado;

alert("buenas " + nombre + "tu IMC es: " + salida.toFixed(2));