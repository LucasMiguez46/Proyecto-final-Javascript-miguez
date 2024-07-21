const productos = [
    {id:1, nombre:"Cono de helado", descripcion:"Helado en forma de cono con una bocha" , precio: 4000, imagen:"ice-cream-reference-1.png", categoria:"cono"},
    {id:2, nombre:"Palito bombom helado", descripcion:"Helado en forma de cono con una bocha" , precio: 5000, imagen:"ice-cream-reference-2.png", categoria:"palito"},
    {id:3, nombre:"Palito de agua", descripcion:"Helado en forma de cono con una bocha" , precio: 3000, imagen:"ice-cream-reference-3.png", categoria:"palito"},
    {id:4, nombre:"Pote de helado", descripcion:"Helado en forma de cono con una bocha" , precio: 8000, imagen:"ice-cream-reference-4.png", categoria:"pote"},
]

function agregarProducto(id) {
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();

    // Generar un nuevo ID para el producto
    const nuevoId = generarId(carrito);
    const nuevoProducto = { ...producto, id: nuevoId };

    carrito.push(nuevoProducto);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderBotonCarrito();
}

function generarId(items) {
    let max = totalProducto();
    
    // items.forEach(item => {
    //     if (item.id > max) {
    //         max = item.id;
    //     }
    // });

    return max + 1;
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);

    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
    console.log("El producto #" + id + " se ha eliminado correctamente!");
}

function renderBotonCarrito() {
    let total = totalProducto();
    document.getElementById("totalCarrito").innerHTML = total;
}

function totalProducto() {
    const carrito = cargarCarritoLS();

    return carrito.length;
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}

function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);

    return producto;
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
}