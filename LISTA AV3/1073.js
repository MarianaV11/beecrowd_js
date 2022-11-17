var prompt = function(texto){return lines.shift();};
var n = parseInt(prompt('Informe um valor inteiro'));
for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        var quadrado = i**2;
        console.log(i+'^2 = '+quadrado);
    }
}