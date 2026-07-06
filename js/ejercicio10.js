function convertir() {
    var dato = document.getElementById("celsius");
    if (!dato.reportValidity()) {
        return;
    }
    var celsius = parseFloat(dato.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2) + " °F";

}