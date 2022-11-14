
//Entrada de Dados

var prompt = function(texto){return lines.shift();};
var [HI,MI,HF,MF] = prompt().split(' ');
HI = parseInt(HI);
MI = parseInt(MI);
HF = parseInt(HF);
MF = parseInt(MF);

//Processamento de Dados

var inicio = HI*60+MI;
var fim = HF*60+MF;
var dia = 1440;

if (inicio>fim) {
    var totalH = (dia+fim-inicio)/60;
    var totalM = (dia+fim-inicio)/60;
    console.log('O JOGO DUROU '+totalH+' HORA(S) E '+totalM+' MINUTO(S)');
} else if (inicio<fim) {
        var totalH = (fim-inicio)/60;
        var totalM = (fim-inicio)/60;
        console.log('O JOGO DUROU '+totalH+' HORA(S) E '+totalM+' MINUTO(S)');       
    } else {
        console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
    }