var dibujito = document.getElementById("dibujito");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton_lineas");
boton.addEventListener("click", dibujoPorClick);
var lienzo = dibujito.getContext("2d");
var ancho = dibujito.width;
var limpiar = document.getElementById("limpiar_lienzo");
limpiar.addEventListener("click", limpiarLienzo);

function dibujarLinea(colorLineas, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorLineas;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function limpiarLienzo()
{
    lienzo.clearRect(0, 0, 300, 300);
}

function dibujoPorClick()
{
    lienzo.clearRect(0, 0, 300, 300);
    var xxx = parseInt(texto.value);
    var lineas = xxx;
    var l = 0;
    var espacio = ancho / lineas;

    if(xxx < 301)
    {
    for(l = 0; l < lineas; l++)
    {
        xi = 290 - (l * espacio);
        yi = espacio * l;
        xf = espacio * (l + 1);
        yf = 300 - (l * espacio);
        dibujarLinea("red", 1, yi, xf, 299);
        dibujarLinea("green", xi, 1, 300, yf);
    }

    for(l = 0; l < lineas; l++)
    {
        xi = 300 - (l * espacio);
        yi = 290 - (l * espacio);
        xf = espacio * l;
        yf = espacio * (l + 1);

        dibujarLinea("blue", xi, 1, 1, yf);
        dibujarLinea("yellow", 300, yi, xf, 300)
    }
    }
}