//Entrada de Dados

var prompt = function(texto){return lines.shift();};
var [HI,MI,HF,MF] = prompt().split(' ');
HI = parseInt(HI);
MI = parseInt(MI);
HF = parseInt(HF);
MF = parseInt(MF);

//Processamento de Dados

if (HF>HI && MF>MI) {
    var HORA = HF-HI;
    var MINUTO = MF-MI;
    console.log('O JOGO DUROU '+HORA+' HORA(S) E '+MINUTO+' MINUTO(S)');
} else if (HF>HI && MI>MF) {
        var HORA = (HF-HI)-1;
        var MINUTO = (MF-MI)+60;
        console.log('O JOGO DUROU '+HORA+' HORA(S) E '+MINUTO+' MINUTO(S)');
    } else if (HF==HI && MI>MF) {
            var dia = 23;
            var MINUTO = (MF-MI)+60;
            console.log('O JOGO DUROU '+dia+' HORA(S) E '+MINUTO+' MINUTO(S)');
        } else if (HF==HI && MF>MI) {
                var HORA = 0;
                var MINUTO = MF-MI;
                console.log('O JOGO DUROU '+HORA+' HORA(S) E '+MINUTO+' MINUTO(S)');           
            } else if (HF>HI && MF==MI) {
                    var HORA = HF-HI;
                    var MINUTO = 0;
                    console.log('O JOGO DUROU '+HORA+' HORA(S) E '+MINUTO+' MINUTO(S)');
                } else if (HF<HI && MF==MI) {
                        var HORA = (HF-HI)+24;
                        var MINUTO = 0;
                        console.log('O JOGO DUROU '+HORA+' HORA(S) E '+MINUTO+' MINUTO(S)');
                    } else if (HF-HI && MF>MI) {
                            var HORA = (HF-HI)+24;
                            var MINUTO = MF-MI;
                            console.log('O JOGO DUROU '+HORA+' HORA(S) E '+MINUTO+' MINUTO(S)');
                        } else if (HI>HF && MI>MF) {
                                var HORA = (HF-HI)+23;
                                var MINUTO = (MF-MI)+60;
                                console.log('O JOGO DUROU '+HORA+' HORA(S) E '+MINUTO+' MINUTO(S)');
                            } else {
                                console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
                            }
