var prompt = function(texto){return lines.shift();};
var x = parseInt(prompt());
var y = parseFloat(prompt());

var consumoMedio = x/y;

console.log(consumoMedio.toFixed(3)+' km/l');