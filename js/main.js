
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

    eliminarProducto(id) {
        // Opción #1 - Eliminar con método splice
        let pos = this.items.findIndex(item => item.id == id); // Busqué la posición del elemento a eliminar en el array items (2)
        this.items.splice(pos, 1); // Eliminar el elemento de la posición "pos"
        
        // Opción #2 - Eliminar con método filter
        //this.items = this.items.filter(item => item.id != id); // Eliminar el elemento de la posición "pos"
        
        console.log("Se eliminó el Producto: #" + id);
        this.items.forEach(item => {item.id = item.id -1})
        
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

console.log(catalogoPaleta.obtenerProductos());
console.log(catalogoPote.obtenerProductos());

// catalogo.agregarProducto("Cunnington Cola", 1900);
// catalogo.agregarProducto("Sprite", 1800);
// catalogo.agregarProducto("Pretty", 1400);
// console.log(catalogo.obtenerProductos());

//console.log(catalogo.eliminarProducto(1));

// const pedidosDelUsuario = new Productos(arrayPedidos);
// console.log(pedidosDelUsuario.agregarProducto(catalogo.buscarProducto(1).nombre,catalogo.buscarProducto(1).precio));
// console.log(pedidosDelUsuario.agregarProducto(catalogo.buscarProducto(1).nombre,catalogo.buscarProducto(1).precio));
// console.log(pedidosDelUsuario.obtenerProductos());