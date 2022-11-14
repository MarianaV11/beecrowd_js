//Entrada de Dados

var prompt = function(texto){return lines.shift();};
var A = parseFloat(prompt('Informe a nota da primeira avaliação:'));
var B = parseFloat(prompt('Informe a nota da segunda avaliação:'));

//Processamento de Dados

var media = (3.5*A + 7.5*B)/11;

//Saída de Dados

console.log('MEDIA = '+media.toFixed(5));