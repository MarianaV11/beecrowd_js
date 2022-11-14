//Entrada de Dados

var prompt = function(texto){return lines.shift();};
var ID = parseInt(prompt());
var horasTrabalhadas = parseInt(prompt());
var valorPorHora = parseFloat(prompt());

//Processamento de Dados

var salario = horasTrabalhadas*valorPorHora;

//Saída de Dados

console.log('NUMBER = '+ID);
console.log('SALARY = U$ '+salario.toFixed(2));