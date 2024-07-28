const productos = [
    {id:1, nombre:"Cono de helado de una bocha", descripcion:"Helado en forma de cono con una bocha" , precio: 4000, imagen:"ice-cream-reference-1.png", categoria:"cono"},
    {id:2, nombre:"Cono de helado de dos bochas", descripcion:"Helado en forma de cono con dos bochas" , precio: 4500, imagen:"ice-cream-reference-5.png", categoria:"cono"},
    {id:3, nombre:"Palito bombom helado", descripcion:"helado con crema recubierto de chocolate" , precio: 5000, imagen:"ice-cream-reference-2.png", categoria:"palito"},
    {id:4, nombre:"Palito de agua", descripcion:"helado de agua" , precio: 3000, imagen:"ice-cream-reference-3.png", categoria:"palito"},
    {id:5, nombre:"Pote de helado 1/4", descripcion:"pote de helado de 1/4" , precio: 4500, imagen:"ice-cream-reference-4.png", categoria:"pote"},
    {id:6, nombre:"Pote de helado 1/2", descripcion:"pote de helado de 1/2" , precio: 7000, imagen:"ice-cream-reference-4.png", categoria:"pote"},
    {id:7, nombre:"Pote de helado 1 Kilo", descripcion:"pote de helado de 1 kilo" , precio: 9000, imagen:"ice-cream-reference-4.png", categoria:"pote"},

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

// ====funcion de la libreria Sweet Alert
function productoGuardado() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Su producto a sido agregado al carrito!",
        showConfirmButton: false,
        timer: 1200
      });
}

function productoEliminado() {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: "Su producto a sido removido al carrito!",
        showConfirmButton: false,
        timer: 1200
      });
}

function listaVaciada() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          vaciarCarrito();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });

    // Swal.fire({
    //     position: "center",
    //     icon: "error",
    //     title: "Se ha vaciado el carrito!",
    //     showConfirmButton: false,
    //     timer: 1200
    //   });
}