const productos = [
    {id:1, nombre:"Cono de helado", descripcion:"Helado en forma de cono con una bocha" , precio: 4000, imagen:"ice-cream-reference-1.png", categoria:"cono"},
    {id:2, nombre:"Palito bombom helado", descripcion:"Helado en forma de cono con una bocha" , precio: 5000, imagen:"ice-cream-reference-2.png", categoria:"palito"},
    {id:3, nombre:"Palito de agua", descripcion:"Helado en forma de cono con una bocha" , precio: 2000, imagen:"ice-cream-reference-3.png", categoria:"palito"},
    {id:4, nombre:"Pote de helado", descripcion:"Helado en forma de cono con una bocha" , precio: 8000, imagen:"ice-cream-reference-4.png", categoria:"pote"},
]

function agregarProducto(id) {
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    totalProducto();
}

function totalProducto() {
    const carrito = cargarCarritoLS();

    document.getElementById("totalCarrito").innerHTML = carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}