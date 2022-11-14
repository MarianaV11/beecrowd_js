var prompt = function(texto){return lines.shift();};
var N = parseInt(prompt('Informe a quantidade de números a serem lidos: '));
var total = 0;
var inn = 0;
var out = 0;

while (total < N && N < 10000) {
    var X = parseInt(prompt('Informe os números a serem lidos: '));
    if (X >= 10 && X <= 20) {
        inn++;
    } else {
        out++;
    }
    total++;
}
console.log(inn+' in');
console.log(out+' out');