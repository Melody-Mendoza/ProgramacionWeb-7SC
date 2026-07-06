window.onload = function () {
    renderizarTareas();
};

function obtenerTareas() {
    var tareas = localStorage.getItem("tareas");
    if (tareas == null) {
        return [];
    }
    return JSON.parse(tareas);

}
function agregarTarea() {

    var input = document.getElementById("tarea");
    var nuevaTarea = input.value;

    if (nuevaTarea == "") {
        Swal.fire({
            icon: "warning",
            title: "Campo vacío",
            text: "Escribe una tarea antes de agregarla."
        });
        return;
    }

    var tareas = obtenerTareas();
    tareas.push({
        tarea: nuevaTarea
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
    input.value = "";
    renderizarTareas();
}

function eliminarTarea(indice) {
    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {

        if (result.isConfirmed) {
            var tareas = obtenerTareas();
            tareas.splice(indice, 1);
            localStorage.setItem("tareas", JSON.stringify(tareas));
            renderizarTareas();
            Swal.fire(
                "Eliminada",
                "La tarea fue eliminada correctamente.",
                "success"
            );
        }
    });
}

function renderizarTareas() {
    var lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    var tareas = obtenerTareas();
    for (var i = 0; i < tareas.length; i++) {
        lista.innerHTML +=
            "<li>" +
            tareas[i].tarea +
            " <button onclick='eliminarTarea(" + i + ")'>Eliminar</button>" +
            "</li>";
    }
}