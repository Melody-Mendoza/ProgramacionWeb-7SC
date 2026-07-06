function ordenar() {
    var dato = document.getElementById("numeros");
    if (!dato.reportValidity()) {
        return;
    }
    var cadena = dato.value;
    var arreglo = cadena.split(",");
    var numeros = arreglo.map(Number);
    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);
    var suma = numeros.reduce(function (total, numero) {
        return total + numero;

    }, 0);
    var promedio = suma / numeros.length;
    document.getElementById("numMayor").value = mayor;
    document.getElementById("numMenor").value = menor;
    document.getElementById("promedio").value = promedio.toFixed(2);
}