var banderas = document.getElementById("banderas");
var texto1 = document.getElementById("texto_banderas");
var boton1 = document.getElementById("boton_banderas");
boton1.addEventListener("click", dibujoPorClick1);
var lienzo1 = banderas.getContext("2d");
var limpiar = document.getElementById("limpiar_lienzo");
limpiar.addEventListener("click", limpiarLienzo);

function dibujarLinea(colorLinea, xi, yi, xf, yf)
{
    lienzo1.beginPath();
    lienzo1.strokeStyle = colorLinea;
    lienzo1.moveTo(xi, yi);
    lienzo1.lineTo(xf, yf);
    lienzo1.stroke();
    lienzo1.closePath();
}

function limpiarLienzo()
{
    lienzo1.clearRect(0, 0, 428.5, 300);
}

function dibujoPorClick1()
{    
    lienzo1.clearRect(0, 0, 428.5, 300);
    var bandera = (texto1.value);
    var l = 0;
    var ancho = 428.5;
        
    if(bandera == "Colombia")
    {
        var lineasCol1 = 150;
        var lineasCol2 = 75;

        for(l = 0; l < lineasCol1; l++)
        {
        yi = l + 1;
        yf = l + 1;
    
        dibujarLinea("yellow", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCol2; l++)
        {
        yi = l + 151;
        yf = l + 151;

        dibujarLinea("blue", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCol2; l++)
        {
        yi = l + 226;
        yf = l + 226;

        dibujarLinea("red", 0, yi, ancho, yf);
        }
    }

    else if(bandera == "Amazonas")
    {
        var lineasAmz1 = 200;
        var lineasAmz2 = 5;
        var lineasAmz3 = 20;
        var lineasAmz4 = 74;

        for(l = 0; l < lineasAmz1; l++)
        {
            yi = l + 1;
            yf = l + 1;

            dibujarLinea("green", 0, yi, 428.5, yf)
        }

        for(l = 0; l < lineasAmz2; l++)
        {
            yi = l + 201;
            yf = l + 201;

            dibujarLinea("black", 0, yi, 428.5, yf)
        }

        for(l = 0; l < lineasAmz3; l++)
        {
            yi = l + 206;
            yf = l + 206;

            dibujarLinea("yellow", 0, yi, 428.5, yf)
        }

        for(l = 0; l < lineasAmz2; l++)
        {
            yi = l + 226;
            yf = l + 226;

            dibujarLinea("black", 0, yi, 428.5, yf)
        }

        for(l = 0; l < lineasAmz4; l++)
        {
            yi = l + 300;
            yf = l + 300;

            dibujarLinea("white", 0, yi, 428.5, yf)
        }
    }

    else if (bandera == "Antioquia")
    {
        var lineasAnt = 150;
        
        for(l = 0; l < lineasAnt; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("white", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasAnt; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Arauca")
    {
        var lineasAra = 150;

        for(l = 0; l < lineasAra; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("red", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasAra; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Atlántico")
    {
        var lineasAtl = 100;
                
        for(l = 0; l < lineasAtl; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("white", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasAtl; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("red", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasAtl; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Bogotá")
    {
        var lineasBog = 150;
        
        for(l = 0; l < lineasBog; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("yellow", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasBog; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("red", 0, yi, ancho, yf);
        }
    }   

    else if (bandera == "Bolívar")
    {
        var lineasBol = 100;
        
        for(l = 0; l < lineasBol; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("yellow", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasBol; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasBol; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("red", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Boyacá")
    {
        var lineasBoy1 = 50;
        var lineasBoy2 = 100;

        for(l = 0; l < lineasBoy1; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasBoy1; l++)
        {
            yi = l + 50;
            yf = l + 50;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasBoy2; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("red", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasBoy1; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("white", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasBoy1; l++)
        {
            yi = l + 250;
            yf = l + 250;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Caldas")
    {
        var lineasCal = 214.25;
        
        for(l = 0; l < lineasCal; l++)
        {
            xi = l + 1;
            xf = l + 1;
            dibujarLinea("yellow", xi, 0, xf, 300);
        }

        for(l = 0; l < lineasCal; l++)
        {
            xi = l + 214.25;
            xf = l + 214.25;
            dibujarLinea("green", xi, 0, xf, 300);
        }
    }

    else if (bandera == "Caquetá")
    {
        var lineasCaq1 = 300;
        var lineasCaq2 = 42.86;

        for(l = 0; l < lineasCaq1; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("white", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCaq2; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 160, yi, ancho, yf);
        }

        for(l = 0; l < lineasCaq2; l++)
        {
            yi = l + 85.72;
            yf = l + 85.72;
            dibujarLinea("green", 160, yi, ancho, yf);
        }

        for(l = 0; l < lineasCaq2; l++)
        {
            yi = l + 171.44;
            yf = l + 171.44;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCaq2; l++)
        {
            yi = l + 257.14;
            yf = l + 257.14;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Casanare")
    {
        var lineasCas1 = 300;
        var lineasCas2 = 400;
        
        for(l = 0; l < lineasCas1; l++)
        {
            yi = 300 - l;
            xf = ancho - l;
            dibujarLinea("red", 0, yi, xf, 0);
        }

        for(l = 0; l < lineasCas2; l++)
        {
            yi = 300 + l;
            xf = ancho + l;
            dibujarLinea("green", 0, yi, xf, 0);
        }
    }

    else if (bandera == "Cauca")
    {
        var lineasCau = 100;
                
        for(l = 0; l < lineasCau; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCau; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("yellow", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasCau; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("green", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "Cesar")
    {
        var lineasCes = 100;
            
        for(l = 0; l < lineasCes; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCes; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasCes; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("green", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "Chocó")
    {
        var lineasCho1 = 150;
        var lineasCho2 = 75;
        
        for(l = 0; l < lineasCho1; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCho2; l++)
        {
            yi = l + 150;
            yf = l + 150;
            dibujarLinea("yellow", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasCho2; l++)
        {
            yi = l + 225;
            yf = l + 225;
            dibujarLinea("blue", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "Córdoba")
    {
        var lineasCor = 100;
            
        for(l = 0; l < lineasCor; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("blue", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCor; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasCor; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("green", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "Cundinamarca")
    {
        var lineasCun = 100;
            
        for(l = 0; l < lineasCun; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("#33CCFF", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasCun; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("#ffff00", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasCun; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("#ff0000", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "Guainía")
    {
        var lineasGua = 100;
            
        for(l = 0; l < lineasGua; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("yellow", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasGua; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("blue", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasGua; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("green", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "Guaviare")
    {
        var lineasGuav = 100;
            
        for(l = 0; l < lineasGuav; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasGuav; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasGuav; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("blue", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "Huila")
    {
        var lineasHui = 100;
            
        for(l = 0; l < lineasHui; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("white", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasHui; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasHui; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("yellow", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "La Guajira")
    {
        var lineasLaGua = 150;
        
        for(l = 0; l < lineasLaGua; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasLaGua; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Magdalena")
    {
        var lineasMag = 50;
        
        for(l = 0; l < lineasMag; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("red", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMag; l++)
        {
            yi = l + 51;
            yf = l + 51;
            dibujarLinea("blue", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMag; l++)
        {
            yi = l + 101;
            yf = l + 101;
            dibujarLinea("red", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMag; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("blue", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMag; l++)
        {
            yi = l + 201;
            yf = l + 201;
            dibujarLinea("red", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMag; l++)
        {
            yi = l + 251;
            yf = l + 251;
            dibujarLinea("blue", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Meta")
    {
        var lineasMet = 17.65;

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 1;
            yf = l + 1;

            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 35.3;
            yf = l + 35.3;

            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 70.6;
            yf = l + 70.6;

            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 105.9;
            yf = l + 105.9;

            dibujarLinea("green", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 141.2;
            yf = l + 141.2;

            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 176.5;
            yf = l + 176.5;

            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 211.8;
            yf = l + 211.8;

            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 247.1;
            yf = l + 247.1;

            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 282.4;
            yf = l + 282.4;

            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasMet; l++)
        {
            yi = l + 299.4;
            yf = l + 299.4;

            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Nariño")
    {
        var lineasNar = 150;
        
        for(l = 0; l < lineasNar; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("yellow", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasNar; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Norte de Santander")
    {
        var lineasNdS = 150;
        
        for(l = 0; l < lineasNdS; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("red", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasNdS; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("black", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Putumayo")
    {
        var lineasPut = 100;
            
        for(l = 0; l < lineasPut; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasPut; l++)
        {
            yi = l + 100;
            yf = l + 100;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasPut; l++)
        {
            yi = l + 200;
            yf = l + 200;
            dibujarLinea("black", 0, yi, ancho , yf);
        }
    }

    else if (bandera == "Quindío")
    {
        var lineasQui = 142.83;
        
        for(l = 0; l < lineasQui; l++)
        {
            xi = l + 1;
            xf = l + 1;
            dibujarLinea("green", xi, 0, xf, 300);
        }

        for(l = 0; l < lineasQui; l++)
        {
            xi = l + 142.83;
            xf = l + 142.83;
            dibujarLinea("yellow", xi, 0, xf, 300);
        }

        for(l = 0; l < lineasQui; l++)
        {
            xi = l + 285.66;
            xf = l + 285.66;
            dibujarLinea("purple", xi, 0, xf, 300);
        }
    }

    else if (bandera == "Risaralda")
    {
        var lineasRis = 300;
        
        for(l = 0; l < lineasRis; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "San Andrés y Providencia")
    {
        var lineasSAyP = 300;
        
        for(l = 0; l < lineasSAyP; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("#33CCFF", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Santander")
    {
        var lineasSan1 = 100;
        var lineasSan2 = 33.33;
        var lineasSan3 = 84.1;

        for(l = 0; l < lineasSan1; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 85.7, yi, ancho, yf);
        }

        for(l = 0; l < lineasSan2; l++)
        {
            yi = l + 101;
            yf = l + 101;
            dibujarLinea("yellow", 85.7, yi, ancho, yf);
        }
        
        for(l = 0; l < lineasSan2; l++)
        {
            yi = l + 133.33;
            yf = l + 133.33;
            dibujarLinea("black", 85.7, yi, ancho, yf);
        }

        for(l = 0; l < lineasSan2; l++)
        {
            yi = l + 166.66;
            yf = l + 166.66;
            dibujarLinea("yellow", 85.7, yi, ancho, yf);
        }

        for(l = 0; l < lineasSan1; l++)
        {
            yi = l + 199.99;
            yf = l + 199.99;
            dibujarLinea("green", 85.7, yi, ancho, yf);
        }

        for(l = 0; l < lineasSan3; l++)
        {
            xi = l + 1;
            xf = l + 1;
            dibujarLinea("red", xi, 0, xf, 300);
        }
    }

    else if (bandera == "Sucre")
    {
        var lineasSuc = 150;
        
        for(l = 0; l < lineasSuc; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("green", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasSuc; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Tolima")
    {
        var lineasTol = 150;
        
        for(l = 0; l < lineasTol; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("#660000", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasTol; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("yellow", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Valle del Cauca")
    {
        var lineasVdC = 150;
        
        for(l = 0; l < lineasVdC; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("#33CCFF", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasVdC; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("white", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Vaupés")
    {
        var lineasVau = 150;
        
        for(l = 0; l < lineasVau; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("white", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasVau; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }

    else if (bandera == "Vichada")
    {
        var lineasVich = 150;
        
        for(l = 0; l < lineasVich; l++)
        {
            yi = l + 1;
            yf = l + 1;
            dibujarLinea("yellow", 0, yi, ancho, yf);
        }

        for(l = 0; l < lineasVich; l++)
        {
            yi = l + 151;
            yf = l + 151;
            dibujarLinea("green", 0, yi, ancho, yf);
        }
    }
}