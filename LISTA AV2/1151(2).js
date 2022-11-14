var prompt = function(texto){return lines.shift();};
var N = parseInt(prompt('Informe a quantidade de números em sua sequência.'));

var termoUm = 0;
var termoDois = 1;

for (i = 0; i<N; i++) {
    var soma = termoUm + termoDois;
    console.log(soma);
    termoUm = termoDois;
    termoDois = soma;
}