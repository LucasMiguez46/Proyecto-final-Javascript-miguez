function renderProductos1() {
    let contenidoHTML = "";
    for (const producto of productos) {
        if (producto.categoria=="cono") {
            contenidoHTML += 
            `<div class="col-md-3 my-2 ">
                <div class="card">
                    <img src="assets/images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body text-center">
                        <p class="card-text">${producto.nombre}</br>$${producto.precio} ARS</p>
                    </div>
                    <div class="card-body text-center">
                        <button class="btn btn-dark" onClick="agregarProducto(${producto.id});">Agregar (+)</button>
                    </div>
                </div>
            </div>`;
        }
    }

    document.getElementById("contenido1").innerHTML = contenidoHTML;
    console.log(contenidoHTML);
}

function renderProductos2() {
    let contenidoHTML = "";
    for (const producto of productos) {
        if (producto.categoria=="palito") {
            contenidoHTML += 
            `<div class="col-md-3 my-2">
                <div class="card">
                    <img src="assets/images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body text-center">
                        <p class="card-text">${producto.nombre}</br>$${producto.precio} ARS</p>
                    </div>
                    <div class="card-body text-center">
                        <button class="btn btn-dark" onClick="agregarProducto(${producto.id});">Agregar (+)</button>
                    </div>
                </div>
            </div>`;
        }
    }

    document.getElementById("contenido2").innerHTML = contenidoHTML;
    console.log(contenidoHTML);
}

function renderProductos3() {
    let contenidoHTML = "";
    for (const producto of productos) {
        if (producto.categoria=="pote") {
            contenidoHTML += 
            `<div class="col-md-3 my-2">
                <div class="card">
                    <img src="assets/images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body text-center">
                        <p class="card-text">${producto.nombre}</br>$${producto.precio} ARS</p>
                    </div>
                    <div class="card-body text-center">
                        <button class="btn btn-dark" onClick="agregarProducto(${producto.id});">Agregar (+)</button>
                    </div>
                </div>
            </div>`;
        }
    }

    document.getElementById("contenido3").innerHTML = contenidoHTML;
    console.log(contenidoHTML);
}


renderProductos1();
renderProductos2();
renderProductos3();
renderBotonCarrito();