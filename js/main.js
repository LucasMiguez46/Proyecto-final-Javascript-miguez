//Este es un simulador de seguros.
let nombre = prompt("Este es un simulador de seguros.\nPor favor colocar su nombre: \n(Coloque ESC para terminar)");
//primero, la marca del auto.
let textoMarca = "ingrese con el numero el tipo de marca del auto: \n\n";
textoMarca += "1-Ford\n";
textoMarca += "2-Chevrolet\n";
textoMarca += "3-Audi\n";
textoMarca += "4-Fiat";

let marca = parseInt(prompt(textoMarca));

//segundo, pido el año del vehiculo.
let textoAño = "ingrese con el numero el año aproximado del vehiculo: \n\n";
textoAño += "1-2000 al 2005\n";
textoAño += "2-2006 al 2010\n";
textoAño += "3-2011 al 2015\n";
textoAño += "4-2016 al 2020\n";
textoAño += "5-2021 al 2025";

let año = parseInt(prompt(textoAño));

//tercer, pregunto si el auto es 0km o no.
let km = prompt("¿su auto es 0km?\n" + "coloque True si su auto es 0 kilometros o False si no lo es: ");

//Cuarto, pregunto si el auto utiliza GNC o no.
let gnc = prompt("¿su auto utiliza GNC?\n" + "coloque True si su auto lo utiliza o False si no lo hace: ");

//revision.
let aviso= "su auto es de la marca: " + marca + "\n";
aviso += "del año aproximado: " + año + "\n";
aviso += "¿es 0km?: " + km + "\n";
aviso += "¿tiene gnc?: " + gnc;

alert("Hola " + nombre + ", tu informacion es la siguiente: \n" + aviso);
//alert("su auto es de la marca: " + marca + "del año aproximado: " + año + "¿es 0km?: " + km +"¿tiene gnc?: " + gnc);

//=======================================================
// ENTRADA DE DATOS
// let nombreCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");

// while (nombreCliente != "ESC") {
//     let textoTipoCliente = "Ingrese su Paquete de Servicios:\n\n";
//     textoTipoCliente += "1-HSBC Premier Black\n";
//     textoTipoCliente += "2-HSBC Premier\n";
//     textoTipoCliente += "3-HSBC Advanced\n";
//     textoTipoCliente += "4-HSBC Standard";
//     let tipoCliente = parseInt(prompt(textoTipoCliente));
//     let monto = parseInt(prompt("Ingrese el Monto: ($10000 - $1000000"));
//     let textoPlazo = "Ingrese el Plazo:\n\n";
//     textoPlazo += "1- 12 Cuotas\n";
//     textoPlazo += "2- 24 Cuotas\n";
//     textoPlazo += "3- 36 Cuotas";
//     let plazo = parseInt(prompt(textoPlazo));

//     // Chequeando como llegan los datos ingresados
//     /* console.log("Cliente: " + nombreCliente);
//     console.log("Tipo: " + tipoCliente);
//     console.log("Monto: $" + monto);
//     console.log("Plazo: " + plazo); */

//     // PROCESAMIENTO DE DATOS
//     let cuotaPura = calcularCuotaPura(monto, plazo);
//     let cuotaTNA = calcularCuotaTNA(tipoCliente, cuotaPura);
//     let cuotaTEA = calcularCuotaTEA(tipoCliente, cuotaPura);
//     let cuotaPagar = cuotaTNA + cuotaTEA;

//     // SALIDA DE DATOS
//     informarPrestamo(nombreCliente, monto, plazo, cuotaPagar);
//     nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");
// }

// function calcularCuotaPura(monto, plazo) {
//     return monto / plazo;
// }

// function calcularCuotaTNA(tipoCliente, cuotaPura) {
//     let TNA;

//     if (tipoCliente == 1) {
//         TNA = 65 / 12;
//     } else if (tipoCliente == 2) {
//         TNA = 70 / 12;
//     } else if (tipoCliente == 3) {
//         TNA = 85 / 12;
//     } else {
//         TNA = 102 / 12;
//     }

//     return (cuotaPura * TNA) / 100;
// }

// function calcularCuotaTEA(tipoCliente, cuotaPura) {
//     let TEA;

//     if (tipoCliente == 1) {
//         TEA = 88.37 / 12;
//     } else if (tipoCliente == 2) {
//         TEA = 97.51 / 12;
//     } else if (tipoCliente == 3) {
//         TEA = 127.42 / 12;
//     } else {
//         TEA = 166.31 / 12;
//     }

//     return (cuotaPura * TEA) / 100;
// }

// function informarPrestamo(nombre, monto, plazo, cuota) {
//     let textoPlazo;

//     if (plazo == 1) {
//         textoPlazo = 12;
//     } else if (plazo == 2) {
//         textoPlazo = 24;
//     } else {
//         textoPlazo = 36;
//     }

//     alert("Cliente: " + nombre + "\nMonto: $" + monto + "\nPlazo: " + textoPlazo + " meses\nCuota a Pagar: $" + cuota.toFixed(2) + " pesos");
// }



//=======================================================
// const precio = 100;
// let nombre = prompt("su nombre porfavor: (presione esc para terminar)");
// let cant = parseInt(prompt("cuantos helados quieres?: "));
// let cupon = prompt("tienes un cupon?: ");
// let precioTotal = 0;

// while (nombre != "esc") {
//     if (cant ==0) {
//         alert("tu nombre es: " + nombre);
//         break;
//     }
//     nombre = prompt("su nombre porfavor: (presione esc para terminar)");
// }

// while (nombre!="esc") {
//     if (cant>0) {
//         for (let i = 0; i <= cant; i++) {
//             console.log(cant);
//             if (i==1) {
//                 return verificar(cupon);
//             }else if (i>1) {
//                 sumar();
//             }else{
//                 alert("khe");
//             }
//         }
//     }else{
//         alert("coloque una cantidad minima de al menos un producto");
//     }
// }

// function sumar(){
//     return precioT= precio+precio;
// }

// function verificar(){
//    if (cupon == "si") {
//         return precioTotal=precioT*0.9;
//    } 
// }