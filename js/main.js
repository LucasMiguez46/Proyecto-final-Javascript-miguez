
//Para el futuro proyecto final se piensa en una simulacion de compra de helados
//Inicio el programa estableciendo ciertos arrays
const arrayPedidos=[]; //establezco una lista vacia para futuros pedidos.
const arrayProductosPaleta=[]; //establezco una lista de productos actuales de la empresa de helados en base a paletas.
const arrayProductosPote=[]; //establezco una lista de productos actuales de la empresa de helados en base a potes.

class Productos{
    constructor(productos){
        this.items=productos;
    }

    agregarProducto(nombreEntrada, precioEntrada) {
        const producto = {id:this.generarId(), nombre:nombreEntrada, precio:precioEntrada}; // Crear un nuevo objeto Producto
        this.items.push(producto); // Agregando al Array items de la Clase Producto, el nuevo objeto Producto creado
        console.log("Producto agregado!");
    }

    buscarProducto(id) {
        return this.items.find(item => item.id == id)
    }

    obtenerProductos() {
        return this.items;
    }

    listarProductos() {
        let salida = "";

        for (const producto of this.items) {
            salida += `${producto.id} - ${producto.nombre} $${producto.precio}\n`;
        }

        alert(salida);
    }

    totalProductos() {
        return this.items.length;
    }

    generarId() {
        let max = 0;

        this.items.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }
//VERIFICAR
    eliminarProducto(id) {
        // Opción #1 - Eliminar con método splice
        let pos = this.items.findIndex(item => item.id == id); // Busqué la posición del elemento a eliminar en el array items (2)
        this.items.splice(pos, 1); // Eliminar el elemento de la posición "pos"
        
        // Opción #2 - Eliminar con método filter
        //this.items = this.items.filter(item => item.id != id); // Eliminar el elemento de la posición "pos"
        
        console.log("Se eliminó el Producto: #" + id);
        this.items.forEach(item => {item.id = item.id -1})
        
    }

    sumarPrecios(){
        let salida = 0;

        for (const producto of this.items) {
            salida += producto.precio;
        }

        return salida;
    }

    sumarIva(precio){
        return precio += precio * 0.21;
    }
}

//creacion de los objetos arrays.
const catalogoPaleta = new Productos(arrayProductosPaleta);
const catalogoPote = new Productos(arrayProductosPote);

//comienzo a agregar contenido al catalogo de paletas
catalogoPaleta.agregarProducto("bombom helado", 1500);
catalogoPaleta.agregarProducto("helado de agua", 1200);
catalogoPaleta.agregarProducto("vainilla ", 1500);

//comienzo a agregar contenido al catalogo de potes
catalogoPote.agregarProducto("Pote de 1/4", 2000);
catalogoPote.agregarProducto("Pote de 1/2", 4000);
catalogoPote.agregarProducto("Pote de 1 kilo", 6000);

//verificacion por consola que este todo bien.
//console.log(catalogoPaleta.obtenerProductos());
//console.log(catalogoPote.obtenerProductos());

//obtenemos la opcion que quiera el usuario y su nombre.
const nombre = prompt("Ingrese su nombre por favor: ");
let textOpcion = "Escoja la opcion numeral que quiera: \n";
textOpcion += "1-Paletas\n";
textOpcion += "2-Pote de helado\n";

//la opcion se guardara en esta variable.
let opcion=parseInt(prompt(textOpcion))

//tal como su nombre lo indica, paso la opcion numeral a String.
opcion = pasaAString(opcion);

function pasaAString(op) {
    if (op == 1) {
        return "paletas";
    }else{
        return "potes";
    }
}

//establezco cadenas para mostrar los productos dependiendo la opcion que se elija antes.
let textCatalogoPaleta = "Escoja la opcion numeral que quiera: \n";
textCatalogoPaleta += "1-" + catalogoPaleta.buscarProducto(1).nombre + "precio: " + catalogoPaleta.buscarProducto(1).precio + ".\n";
textCatalogoPaleta += "2-" + catalogoPaleta.buscarProducto(2).nombre + "precio: " + catalogoPaleta.buscarProducto(2).precio + ".\n";
textCatalogoPaleta += "3-" + catalogoPaleta.buscarProducto(3).nombre + "precio: " + catalogoPaleta.buscarProducto(3).precio + ".\n";

let textCatalogoPote = "Escoja la opcion numeral que quiera: \n";
textCatalogoPote += "1-" + catalogoPote.buscarProducto(1).nombre + "precio: " + catalogoPote.buscarProducto(1).precio + ".\n";
textCatalogoPote += "2-" + catalogoPote.buscarProducto(2).nombre + "precio: " + catalogoPote.buscarProducto(2).precio + ".\n";
textCatalogoPote += "3-" + catalogoPote.buscarProducto(3).nombre + "precio: " + catalogoPote.buscarProducto(3).precio + ".\n";

//VERIFICAR
//en efecto, la funcion muestra por pantalla emergente las posibilidades dependiendo de la eleccion anterior.
function eleccion(string) {
    if (string == "paletas") {
        return parseInt(prompt(textCatalogoPaleta));
    }else{
        return parseInt(prompt(textCatalogoPote));
    }
}

//VERIFICAR
//guardo la opcion a pedir en la siguiente variable.
let opcionAPedir= eleccion(opcion);


//si me guarda el numero, seguir verificando.
console.log("opcion a pedir: "+opcionAPedir);
//desde aca comienza el codigo que afecta a la lista de pedidos del usuario.
const pedidosDelUsuario = new Productos(arrayPedidos);

if (opcion == "paletas") {
    pedidosDelUsuario.agregarProducto(catalogoPaleta.buscarProducto(opcionAPedir).nombre,catalogoPaleta.buscarProducto(opcionAPedir).precio);
}else{
    pedidosDelUsuario.agregarProducto(catalogoPote.buscarProducto(opcionAPedir).nombre,catalogoPote.buscarProducto(opcionAPedir).precio);
}
// pedidosDelUsuario.agregarProducto(catalogoPaleta.buscarProducto(1).nombre,catalogoPaleta.buscarProducto(1).precio)
// pedidosDelUsuario.agregarProducto(catalogoPaleta.buscarProducto(3).nombre,catalogoPaleta.buscarProducto(3).precio)
// pedidosDelUsuario.agregarProducto(catalogoPote.buscarProducto(3).nombre,catalogoPote.buscarProducto(3).precio)
let precioTotal = pedidosDelUsuario.sumarPrecios();
precioTotal = pedidosDelUsuario.sumarIva(precioTotal);

//muestra por consola las opciones elegidas.
alert("Nombre:" + nombre + ", opcion: " + opcion + " y la lista de productos es: ");
pedidosDelUsuario.listarProductos();
alert("el precio total es el siguiente: " + precioTotal);

// const pedidosDelUsuario = new Productos(arrayPedidos);
// console.log(pedidosDelUsuario.agregarProducto(catalogo.buscarProducto(1).nombre,catalogo.buscarProducto(1).precio));
// console.log(pedidosDelUsuario.agregarProducto(catalogo.buscarProducto(1).nombre,catalogo.buscarProducto(1).precio));
// console.log(pedidosDelUsuario.obtenerProductos());