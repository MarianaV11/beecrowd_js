
//Entrada de Dados

var prompt = function(texto){return lines.shift();};
var [TI,TF] = prompt().split(' ');
TI = parseInt(TI);
TF = parseInt(TF);

//Processamento de Dados
var caso1 = (24-TI)+TF;
var caso2 = TF - TI;
var caso3 = 24;

if (TI>TF) {
    console.log('O JOGO DUROU '+caso1+' HORA(S)');
} else if (TI==TF) {
        console.log('O JOGO DUROU '+caso3+' HORA(S)');
    } else if (TI<TF) {
            console.log('O JOGO DUROU '+caso2+' HORA(S)');
        }