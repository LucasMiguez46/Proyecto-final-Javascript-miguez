function renderCarrito() {
    const carrito = cargarCarritoLS();

    let contenidoHTML = 
    `<table class="table">
    <tbody>
    <tr>
    <td class="text-end" colspan="4"><button class="btn btn-danger btn-sm" onclick="vaciarCarrito();">Vaciar Carrito <i class="bi bi-trash"></i></button></td>
    </tr>`;
    for (const producto of carrito) {
        contenidoHTML += 
        `<tr>
            <td><img src="../assets/images/${producto.imagen}" alt="${producto.nombre}" class="ajustarImagenCarrito"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="text-center align-middle"><span class="text-danger">$${producto.precio} ARS</span></td>
            <td class="text-end align-middle"><button class="btn btn-danger btn-lg" onclick="eliminarProducto(${producto.id});">Eliminar <i class="bi bi-trash"></i></button></td>
            </tr>`;
    }
    contenidoHTML += 
    `</tbody>
        </table>`;

    document.getElementById("contenido").innerHTML = contenidoHTML;
    console.log(contenidoHTML);
}


renderCarrito();
totalProducto();