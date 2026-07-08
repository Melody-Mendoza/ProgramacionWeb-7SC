// Seleccionar los elementos importantes del DOM
const input = document.getElementById("nuevoElemento");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");
// Función para agregar un nuevo elemento
function agregarElemento() {
    const texto = input.value.trim();
    if (texto !== "") {
        // Crear el elemento li
        const li = document.createElement("li");
        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);
        // Crear botón eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add(
            "btn",
            "btn-danger",
            "btn-sm"
        );
        botonEliminar.addEventListener("click", function () {
            li.remove();
        });
        // Agregar botón
        li.appendChild(botonEliminar);
        // Agregar li
        lista.appendChild(li);
        // Limpiar input
        input.value = "";
    }
    else {
        alert("Escribe algo para agregar a la lista.");
    }

}
// Evento del botón

botonAgregar.addEventListener("click", agregarElemento);