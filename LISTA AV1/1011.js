//Entrada de Dados
var prompt = function(texto){return lines.shift();};
var raio = parseFloat(prompt(''));


//Processamento de Dados
const pi = 3.14159
var volume = (4/3)*pi*raio**3;


//Saída de Dados
console.log('VOLUME = '+volume.toFixed(3));