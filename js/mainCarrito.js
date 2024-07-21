function renderCarrito() {
    const carrito = cargarCarritoLS();
    // let precioTotal= sumarProductos();
    let contenidoHTML;
    let precioTotal;

    if (totalProducto()>0) {
        precioTotal=0;

        contenidoHTML = 
        `<table class="table">
        <tbody>
        <tr>
        <td class="text-decoration-underline">Imagen de referencia:</td>
        <td class="text-decoration-underline">Nombre del producto:</td>
        <td class="text-center text-decoration-underline">Precio:</td>
        <td class="text-end" colspan="4"><button class="btn btn-danger btn-lg" onclick="vaciarCarrito();">Vaciar Carrito <i class="bi bi-trash"></i></button></td>
        </tr>`;
        for (const producto of carrito) {
            contenidoHTML += 
            `<tr>
                <td><img src="../assets/images/${producto.imagen}" alt="${producto.nombre}" class="ajustarImagenCarrito"></td>
                <td class="align-middle">${producto.nombre}</td>
                <td class="text-center align-middle"><span class="text-danger">$${producto.precio} ARS</span></td>
                <td class="text-end align-middle"><button class="btn btn-danger btn-lg" onclick="eliminarProducto(${producto.id});">Eliminar <i class="bi bi-trash"></i></button></td>
                </tr>`;
                precioTotal += producto.precio;
        }
        contenidoHTML += 
        `<tr>
            <td class="text-end" colspan="4">Precio total: ${precioTotal}</td>
        </tr>
        </tbody>
            </table>`;
    }else{
        contenidoHTML=
        `<div class="alert alert-info text-center" role="alert">
            no hay productos en el carrito, compra!.
        </div>`;
    }



    document.getElementById("contenido").innerHTML = contenidoHTML;
    // console.log(contenidoHTML);
}


renderCarrito();
renderBotonCarrito();