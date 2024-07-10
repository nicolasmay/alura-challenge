function encriptarTexto() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                resultado += "enter";
                break;
            case 'i':
                resultado += "imes";
                break;
            case 'a':
                resultado += "ai";
                break;
            case 'o':
                resultado += "ober";
                break;
            case 'u':
                resultado += "ufat";
                break;
            default:
                resultado += texto[i];
                break;
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function desencriptarTexto() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto.slice(i, i + 5) === "enter") {
            resultado += "e";
            i += 4;
        } else if (texto.slice(i, i + 4) === "imes") {
            resultado += "i";
            i += 3;
        } else if (texto.slice(i, i + 2) === "ai") {
            resultado += "a";
            i += 1;
        } else if (texto.slice(i, i + 4) === "ober") {
            resultado += "o";
            i += 3;
        } else if (texto.slice(i, i + 4) === "ufat") {
            resultado += "u";
            i += 3;
        } else {
            resultado += texto[i];
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}