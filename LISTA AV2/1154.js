var prompt = function(texto){return lines.shift();};
var idades = parseInt(prompt('Informe as idades para a média: '));

var media = 0;
var den = 0;

while (idades > 0) {
    media += idades;
    var idades = parseInt(prompt('Informe as idades para a média: '));

    den++;
}

console.log((media/den).toFixed(2));