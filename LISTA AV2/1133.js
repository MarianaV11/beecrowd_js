var prompt = function(texto){return lines.shift();};
var inteiro = parseInt(prompt('Informe um inteiro para o valor inicial: '));
var inteiro2 = parseInt(prompt('Informe outro inteiro para o valor final'));

var aux = 0;

if (inteiro > inteiro2) {
    aux = inteiro2;
    inteiro2 = inteiro;
    inteiro = aux;
}

while (inteiro < inteiro2) {
    inteiro++;
    if (inteiro%5 == 2 || inteiro%5 == 3) {
        console.log(inteiro);
    }
}

/* 
Atenção! dentro do bloco if só roda uma vez, então
o "incremento" deve ficar fora para ser repetido a condição do while!
*/

/*
Ponto importane: O incremento no while veio antes - pq? pq 
eu quero números ENTRE não igual aos valores dado, logo é um
intervalo aberto..
Eu poderia adicionar +1, quando pego meu inteiro OUUU poderia só incrementar antes do meu if...
*/
