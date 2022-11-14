var prompt = function(texto){return lines.shift();};
var horas = parseInt(prompt());
var vm = parseInt(prompt());

var litrosGastos = (vm * horas)/12;

console.log(litrosGastos.toFixed(3));