
var prompt = function(texto){return lines.shift();};
var int = parseInt(prompt('Informe um inteiro: '));

var impar = 0;
while (impar < 6) {
    if (int%2!=0) {
        console.log(int);
        impar++;
    }
    int++;
}