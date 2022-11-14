var prompt = function(texto){return lines.shift();};
var N = parseInt(prompt('Informe a quantidade de termos desejada: '))
var termoUm = 0;
var termoDois = 1;

var frase = []; //declarei uma variável ARREY que é a minha lista.

frase.push(termoUm,termoDois); //Push adiciona elementos a minha lista.

for (i = 1; i<N-1; i++) {
    var soma = termoUm + termoDois;
    frase.push(soma); //Adicionei mais elementos a mkinha lista
    termoUm = termoDois;
    termoDois = soma;
}

console.log(frase.join(' ')); //Aqui está declarando todo o meu arrey dentro do console nota: só funciona com: ('') dentro.
//Outra nota: Eu juntei todos os elementos e os separei.