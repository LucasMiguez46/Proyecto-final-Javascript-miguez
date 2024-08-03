const productos = [
    {id:1, nombre:"Cono de helado de una bocha", descripcion:"Helado en forma de cono con una bocha" , precio: 4000, imagen:"ice-cream-reference-1.png", categoria:"cono"},
    {id:2, nombre:"Cono de helado de dos bochas", descripcion:"Helado en forma de cono con dos bochas" , precio: 4500, imagen:"ice-cream-reference-5.png", categoria:"cono"},
    {id:3, nombre:"Palito bombom helado", descripcion:"helado con crema recubierto de chocolate" , precio: 5000, imagen:"ice-cream-reference-2.png", categoria:"palito"},
    {id:4, nombre:"Palito de agua", descripcion:"helado de agua" , precio: 3000, imagen:"ice-cream-reference-3.png", categoria:"palito"},
    {id:5, nombre:"Pote de helado 1/4", descripcion:"pote de helado de 1/4" , precio: 4500, imagen:"ice-cream-reference-4.png", categoria:"pote"},
    {id:6, nombre:"Pote de helado 1/2", descripcion:"pote de helado de 1/2" , precio: 7000, imagen:"ice-cream-reference-4.png", categoria:"pote"},
    {id:7, nombre:"Pote de helado 1 Kilo", descripcion:"pote de helado de 1 kilo" , precio: 9000, imagen:"ice-cream-reference-4.png", categoria:"pote"},

]

//===========================================

// // Convertir el array a una cadena JSON y almacenarlo en localStorage
// localStorage.setItem("productos", JSON.stringify(productos));

// // Paso 2: Simular la obtención de datos con fetch
// async function obtenerProductos() {
//     // Simulando una espera como si se estuviera realizando una solicitud de red
//     const response = await new Promise((resolve) => {
//         setTimeout(() => {
//             // Obtener los datos de localStorage
//             const data = localStorage.getItem("productos");
//             resolve(new Response(data, { status: 200 }));
//         }, 1000); // 1 segundo de retardo
//     });

//     // Procesar la respuesta
//     if (response.ok) {
//         const productos = await response.json();
//         console.log(productos);
//         return productos;
//     } else {
//         throw new Error("Error al obtener los productos");
//     }
// }

//===========================================
function agregarProducto(id) {
//   // Obtener los productos de localStorage de manera asíncrona
//   obtenerProductos().then((productos) => {
//     // Buscar el producto con el id especificado
//     const producto = productos.find(item => item.id == id);
//     if (producto) {
//         // Cargar el carrito desde localStorage
//         const carrito = cargarCarritoLS();

//         // Generar un nuevo ID para el producto
//         const nuevoId = generarId(carrito);
//         const nuevoProducto = { ...producto, id: nuevoId };

//         // Agregar el nuevo producto al carrito
//         carrito.push(nuevoProducto);

//         // Guardar el carrito actualizado en localStorage
//         guardarCarritoLS(carrito);

//         // Actualizar la interfaz del carrito
//         renderBotonCarrito();
//     } else {
//         console.error("Producto no encontrado");
//     }
// }).catch((error) => {
//     console.error("Error al obtener los productos:", error);
// });

//ANTERIOR
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();

    // Generar un nuevo ID para el producto
    const nuevoId = generarId(carrito);
    const nuevoProducto = { ...producto, id: nuevoId };

    carrito.push(nuevoProducto);

    guardarCarritoLS(carrito);
    renderBotonCarrito();
}

//console.log(obtenerProductos());


function generarId(items) {
//   return obtenerProductos().then((productos) => {
    
//     let max = totalProducto(); // Asumiendo que totalProducto da el total de productos

//     // Revisar los productos en el carrito
//     items.forEach(item => {
//         if (item.id > max) {
//             max = item.id;
//         }
//     });

//     // Revisar también los IDs de productos en el inventario
//     productos.forEach(producto => {
//         if (producto.id > max) {
//             max = producto.id;
//         }
//     });

//     return max + 1;
// });

//ANTERIOR  
    let max = totalProducto();
    
//revisar
    items.forEach(item => {
        if (item.id > max) {
            max = item.id;
        }
    });

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

//revisar
function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}

function cargarProductoLS() {
//   try {
//     let id = JSON.parse(localStorage.getItem("producto"));
//     if (id === null) {
//         console.warn("No se encontró ningún ID de producto en localStorage.");
//         return null;
//     }

//     return obtenerProductos().then((productos) => {
//         const producto = productos.find(item => item.id == id);
//         if (!producto) {
//             console.warn(`No se encontró ningún producto con el ID ${id}.`);
//             return null;
//         }
//         return producto;
//     });
// } catch (error) {
//     console.error("Error al cargar el producto desde localStorage:", error);
//     return null;
// }


//ANTERIOR
  try {
    let id = JSON.parse(localStorage.getItem("producto"));
    if (id === null) {
      console.warn("No se encontró ningún ID de producto en localStorage.");
      return null;
    }
      const producto = productos.find(item => item.id == id);
      if (!producto) {
        console.warn(`No se encontró ningún producto con el ID ${id}.`);
        return null;
    }
    return producto;

  } catch (error) {
    console.error("Error al cargar el producto desde localStorage:", error);
    return null;
  }
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
}