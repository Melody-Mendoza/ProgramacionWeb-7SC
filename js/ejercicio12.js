function convertir() {
    var dato = document.getElementById("mxn");
    if (!dato.reportValidity()) {
        return;
    }
    var mxn = parseFloat(dato.value);
    var tasa_de_cambios = 0.055;
    var usd = (mxn * tasa_de_cambios);
    document.getElementById("usd").value = usd + " USD";

}