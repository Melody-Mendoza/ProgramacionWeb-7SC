function convertir() {
    var dato = document.getElementById("km");
    if (!dato.reportValidity()) {
        return;
    }
    var km = parseFloat(dato.value);
    var millas = (km * 0.621371);
    document.getElementById("millas").value = millas + " mi";
}