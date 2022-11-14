//Entrada de Dados

var prompt = function(texto){return lines.shift();};
var [X,Y] = prompt().split(' ');
X = parseFloat(X);
Y = parseFloat(Y);

//Processamento de Dados

if (X>0 && Y>=0) {
    console.log('Q1');
} else if (X<0 && Y>0) {
        console.log('Q2');
    } else if (X<0 && Y<0) {
            console.log('Q3');
        } else if (X>0 && Y<0) {
                console.log('Q4');
            } else if (X==0 && Y==0) {
                    console.log('Origem');
                } else if (X==0 && Y!=0) {
                        console.log('Eixo Y');               
                    } else if (X!=0 && Y==0) {
                        console.log('Eixo X');
                    }