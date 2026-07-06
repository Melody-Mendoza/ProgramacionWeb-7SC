function verificar() {
    var dato = document.getElementById("edad");
    if (!dato.reportValidity()) {
        return;
    }

    var edad = parseInt(dato.value);

    if (edad >= 18) {
        document.getElementById("resultado").value = "PUEDES VOTAR!!";
    }
    else {
        document.getElementById("resultado").value = "NO PUEDES VOTAR!!";
    }
}