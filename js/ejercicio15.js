var estudiantes = [];
function agregar() {
    var nombre = document.getElementById("nombre");
    var calificacion = document.getElementById("calificacion");
    if (!nombre.reportValidity()) {
        return;
    } if (!calificacion.reportValidity()) {
        return;
    }
    var estudiante = {
        nombre: nombre.value,
        calificacion: parseFloat(calificacion.value)
    };
    estudiantes.push(estudiante);
    nombre.value = "";
    calificacion.value = "";
    nombre.focus();
}

function calcular() {
    if (estudiantes.length == 0) {
        alert("No hay estudiantes registrados.");
        return;
    }
    var calificaciones = estudiantes.map(function (estudiante) {
        return estudiante.calificacion;
    });
    var mayor = Math.max(...calificaciones);
    var menor = Math.min(...calificaciones);
    var suma = calificaciones.reduce(function (total, numero) {
        return total + numero;
    }, 0);
    var promedio = suma / calificaciones.length;
    var nombreMayor = "";
    var nombreMenor = "";
    estudiantes.forEach(function (estudiante) {
        if (estudiante.calificacion == mayor) {
            if (nombreMayor != "") {
                nombreMayor += ", ";
            }
            nombreMayor += estudiante.nombre;
        }
        if (estudiante.calificacion == menor) {
            if (nombreMenor != "") {
                nombreMenor += ", ";
            }
            nombreMenor += estudiante.nombre;
        }
    });

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("mayor").value = nombreMayor;
    document.getElementById("menor").value = nombreMenor;

}
