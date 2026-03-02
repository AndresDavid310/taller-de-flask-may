let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarProducto(nombre, precio) {
    let producto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
}

function actualizarContador() {
    let contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = carrito.length;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    actualizarContador();
    mostrarCarrito();
});

function mostrarCarrito() {
    let contenedor = document.getElementById("listaCarrito");
    let totalSpan = document.getElementById("total");

    if (!contenedor || !totalSpan) return;

    contenedor.innerHTML = "";
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${carrito[i].nombre}</h3>
            <p>Precio: $${carrito[i].precio}</p>
        `;

        contenedor.appendChild(card);
        total += carrito[i].precio;
    }

    totalSpan.textContent = total;
}

document.addEventListener("click", function(e) {
    if (e.target && e.target.id === "btnVaciar") {
        carrito = [];
        localStorage.removeItem("carrito");
        actualizarContador();
        mostrarCarrito();
    }
});

const botonAbrir = document.getElementById("btnInfo");
const botonCerrar = document.getElementById("btnCerrar");
const ventanaModal = document.getElementById("modal");

if (botonAbrir && botonCerrar && ventanaModal) {
    botonAbrir.onclick = () => ventanaModal.style.display = "flex";
    botonCerrar.onclick = () => ventanaModal.style.display = "none";

    window.onclick = (event) => {
        if (event.target == ventanaModal) {
            ventanaModal.style.display = "none";
        }
    };
}

const inicio = document.getElementById("inicio");
const catalogo = document.getElementById("catalogo");
const contacto = document.getElementById("contacto");

if (inicio) inicio.onclick = () => alert("🎨 Estás en el Inicio");
if (catalogo) catalogo.onclick = () => alert("📖 Catálogo Pro");
if (contacto) contacto.onclick = () => alert("📞 Contacto");