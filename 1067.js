var prompt = function(texto){return lines.shift();};
var x = parseInt(prompt('Informe um valor inteiro: '));

var i = 0;
while (i <= x) {

    if (i % 2 == 1) {
        console.log(i);
    }

    i++;
}