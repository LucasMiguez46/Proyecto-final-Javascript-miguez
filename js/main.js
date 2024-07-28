function renderProductos(productosParaMostrar) {
    let contenidoHTML = "";
    for (const producto of productosParaMostrar) {
            contenidoHTML += 
            `<div class="col-md-3 my-2 ">
                <div class="card">
                    <img src="assets/images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body text-center">
                        <p class="card-text">${producto.nombre}</br>$${producto.precio} ARS</p>
                    </div>
                    <div class="card-body text-center">
                        <button class="btn btn-dark" onClick="agregarProducto(${producto.id}); productoGuardado()">Agregar (+)</button>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
    console.log(contenidoHTML);
}



document.addEventListener("DOMContentLoaded", () => {
    renderProductos(productos);
    renderBotonCarrito();
});

function filterAndSortProductos() {
    const categoryOption = document.getElementById("categoryOptions").value;
    const sortOption = document.getElementById("sortOptions").value;

    // Filtrar productos por categoría
    const filteredProductos = categoryOption === "Todas"? productos: productos.filter(producto => producto.categoria === categoryOption);

    // Ordenar productos
    const sortedProductos = [...filteredProductos].sort((a, b) => {
        if (sortOption === "Menor a Mayor") return a.precio - b.precio;
        if (sortOption === "Mayor a Menor") return b.precio - a.precio;
        console.warn("Opción de ordenamiento no reconocida:", sortOption);
        return 0;
    });

    renderProductos(sortedProductos);
}

renderProductos(productos);