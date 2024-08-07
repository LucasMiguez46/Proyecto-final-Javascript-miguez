const productosJson = [
    {id:1, nombre:"Cono de helado de una bocha", descripcion:"Helado en forma de cono con una bocha" , precio: 4000, imagen:"ice-cream-reference-1.png", categoria:"cono"},
    {id:2, nombre:"Cono de helado de dos bochas", descripcion:"Helado en forma de cono con dos bochas" , precio: 4500, imagen:"ice-cream-reference-5.png", categoria:"cono"},
    {id:3, nombre:"Palito bombom helado", descripcion:"helado con crema recubierto de chocolate" , precio: 5000, imagen:"ice-cream-reference-2.png", categoria:"palito"},
    {id:4, nombre:"Palito de agua", descripcion:"helado de agua" , precio: 3000, imagen:"ice-cream-reference-3.png", categoria:"palito"},
    {id:5, nombre:"Pote de helado 1/4", descripcion:"pote de helado de 1/4" , precio: 4500, imagen:"ice-cream-reference-4.png", categoria:"pote"},
    {id:6, nombre:"Pote de helado 1/2", descripcion:"pote de helado de 1/2" , precio: 7000, imagen:"ice-cream-reference-4.png", categoria:"pote"},
    {id:7, nombre:"Pote de helado 1 Kilo", descripcion:"pote de helado de 1 kilo" , precio: 9000, imagen:"ice-cream-reference-4.png", categoria:"pote"},
]

//===========================================

// Almacenar en localStorage
localStorage.setItem('productosls', JSON.stringify(productosJson));

function simularApi() {
  return new Promise((resolve, reject) => {
    // Simular una demora en la respuesta
    setTimeout(() => {
      // Obtener productos del localStorage
      const productos = JSON.parse(localStorage.getItem("productosls"));
      
      if (productos) {
        resolve(productos);
      } else {
        reject('No se encontraron productos');
      }
    }, 1000); // 1000 ms de demora simulada
  });
}

async function obtenerProductos() {
  try {
    const response = await fetch('/fake-api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // En lugar de una respuesta real de fetch, utilizamos la simulación
    const productos = await simularApi();
    //renderProductos(productos);
    console.log('Productos obtenidos:', productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
}

obtenerProductos();
//console.log(productos);


//===========================================
function agregarProducto(id) {
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();

    // Generar un nuevo ID para el producto
    const nuevoId = generarId(carrito);
    const nuevoProducto = { ...producto, id: nuevoId };

    carrito.push(nuevoProducto);

    guardarCarritoLS(carrito);
    renderCarrito();
    renderBotonCarrito();
}


function generarId(items) { 
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