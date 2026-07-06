const sumar=(a, b) => a + b;

const restar=(a, b) => a - b;

const multiplicar=(a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(operacion){
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, ingresa únicamente valores numéricos en ambos campos."
        });

        return;
    }
    if(operacion == "sumar"){
        var resultado = sumar(numero1, numero2);
        document.getElementById("resultado").value = resultado;
    }else if(operacion == "restar"){
        var resultado = restar(numero1, numero2);
        document.getElementById("resultado").value = resultado;
    }else if(operacion == "multiplicar"){
        var resultado = multiplicar(numero1, numero2);
        document.getElementById("resultado").value = resultado;
    }else if(operacion == "dividir"){
        var resultado = dividir(numero1, numero2);
        document.getElementById("resultado").value = resultado;
    }
}

