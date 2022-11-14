var prompt = function(texto){return lines.shift();};
var N = parseInt(prompt('Informe a quantidade de números a serem lidos.'));

var inn = 0;
var out = 0;

for (var i = 0; i<N; i++) {
    var X = parseInt(prompt('Informe os números a serem classificados.'));
    if (X >= 10 && X<=20) {
        inn++;
    } else {
        out++;
    }
}
console.log(inn+' in');
console.log(out+' out');