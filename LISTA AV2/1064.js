var prompt = function(texto){return lines.shift();};
var valores = parseFloat(prompt('Informe os valores a serem lidos: '));

var positivo = 0;
var media = 0;

for (i = 0; i < 6; i++) {
    if (valores > 0) {
        positivo++;
        media = media + valores;        
    }
var valores = parseFloat(prompt('Informe os valores a serem lidos: '));
}

console.log(positivo+' valores positivos');
console.log((media/positivo).toFixed(1));