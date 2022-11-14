var prompt = function(texto){return lines.shift();};

var contPares = 0;

for (var i = 0; i < 5; i++) {
    var x = parseInt(prompt('Informe os valores inteiros: '));
    if (x % 2 == 0) {
        contPares++;
    }
}

console.log(contPares+' valores pares');