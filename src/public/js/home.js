const PORT = 8080;

// Referencia al contenedor de productos
const contenedor = document.querySelector('#contenedor')

const obtenerProductos = async (page, category = '', sort = '') => {
    let url = `http://localhost:${PORT}/api/products?page=${page}&limit=10`
    if (category) url += `&category=${category}`
    if (sort) url += `&sort=${sort}`

    const response = await fetch(url)
    const data = await response.json()

    contenedor.innerHTML = '' // Limpia el contenedor

    // Itera sobre los productos y crea las tarjetas
    data.response.payload.forEach((product) => {
        const tarjetaProduct = `<div class="card">
        <div class="card-body">            
                <img class="card-img"src="${product.thumbnails}" alt="${product.title}">
                <h5 class="card-title" ">${product.title}</h5>            
            <div class="card-info">
                <p class="card-text">${product.description}</p>
                <p class="card-text">Categoría: ${product.category}</p>
                <p class="card-text">Precio: $${product.price}</p>
                <a href="/products/${product._id}"><button class="btn btn-card">Detalles</button></a>
                <button class="btn btn-card" onclick="addToCart('${product._id}', 1)">Agregar al carro</button>
            </div>
        </div>
    </div>`;

        contenedor.innerHTML += tarjetaProduct; // Agrega cada tarjeta al contenedor
    })
    // Llama a la función de paginación
    Paginacion(page, category, data.response.totalPages, data.response.prevPage, data.response.nextPage, sort);
}

// Referencia a la lista de paginación
const Paginacionop = document.querySelector('#Paginacionop')

// Función para manejar la paginación
const Paginacion = (page, category, totalPages, prevPage, nextPage, sort) => {
    Paginacionop.innerHTML = ''; // Limpia la lista de paginación

    // Si hay una página anterior, muestra el botón
    if (prevPage) {
        Paginacionop.innerHTML += `<li class="page-item"><button class="page-link" onclick="obtenerProductos(${prevPage}, '${category}', '${sort}')"><span aria-hidden="true">&laquo;</span></button></li>`
    }

    // Agrega los botones de las páginas
    for (let index = 1; index <= totalPages; index++) {
        Paginacionop.innerHTML += `<li class="page-item ${index === page ? 'active' : ''}">
                                        <button class="page-link" onclick="obtenerProductos(${index}, '${category}', '${sort}')">${index}</button>
                                    </li>`;
    }

    // Si hay una página siguiente, muestra el botón
    if (nextPage) {
        Paginacionop.innerHTML += `<li class="page-item"><button class="page-link" onclick="obtenerProductos(${nextPage}, '${category}', '${sort}')"><span aria-hidden="true">&raquo;</span></button></li>`;
    }
}

// Referencias a los selectores de categoría y orden
const SelectCategoria = document.querySelector('#Categorias')
const SelectOrden = document.querySelector('#OrdenarPrecio')

// Evento para manejar el cambio en la selección de categoría
SelectCategoria.addEventListener('change', async () => {
    const categoriaSeleccionada = SelectCategoria.value
    const ordenSeleccionado = SelectOrden.value

    console.log("Categoría seleccionada:", categoriaSeleccionada, "Orden seleccionado:", ordenSeleccionado)

    // Realiza la búsqueda en función de la categoría seleccionada
    if (categoriaSeleccionada !== 'nada' && ordenSeleccionado !== 'nada') {
        obtenerProductos(1, categoriaSeleccionada, ordenSeleccionado)
    } else if (categoriaSeleccionada !== 'nada') {
        obtenerProductos(1, categoriaSeleccionada, '');
    } else {
        console.log('No se seleccionó ninguna categoría.')
    }
})

// Evento para manejar el cambio en la selección de orden
SelectOrden.addEventListener('change', async () => {
    const categoriaSeleccionada = SelectCategoria.value
    const ordenSeleccionado = SelectOrden.value

    console.log("Categoría seleccionada:", categoriaSeleccionada, "Orden seleccionado:", ordenSeleccionado)

    // Realiza la búsqueda en función del orden seleccionado
    if (ordenSeleccionado !== 'nada' && categoriaSeleccionada !== 'nada') {
        obtenerProductos(1, categoriaSeleccionada, ordenSeleccionado)
    } else if (ordenSeleccionado !== 'nada') {
        obtenerProductos(1, '', ordenSeleccionado)
    } else {
        console.log('No se seleccionó ningún orden.')
    }
})

// Evento para limpiar los filtros aplicados
const btnQuitarFiltros = document.querySelector('#QuitarFiltros')
btnQuitarFiltros.addEventListener('click', async () => {
    obtenerProductos(1, '') // Vuelve a cargar los productos sin filtros
})

// Carga inicial de productos
obtenerProductos(1, '')