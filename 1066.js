var prompt = function(texto){return lines.shift();};

var contPares = 0;
var contImpares = 0;
var contPositivos = 0;
var contNegativos = 0;

for (var i = 0; i < 5; i++) {
    var x = parseInt(prompt('Informe os valores inteiros: '));
    if (x % 2 == 0) {
        contPares++;
    } else {
        contImpares++;
    }

    if (x > 0) {
        contPositivos++;
    } else if (x < 0) {
        contNegativos++;
    }
}

console.log(contPares+' valor(es) par(es)');
console.log(contImpares+' valor(es) impar(es)');
console.log(contPositivos+' valor(es) positivo(s)');
console.log(contNegativos+' valor(es) negativo(s)');