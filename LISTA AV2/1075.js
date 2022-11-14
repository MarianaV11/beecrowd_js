var prompt = function(texto){return lines.shift();};
var inteiro = parseInt(prompt('Informe um inteiro: '));

for (var N = 1; N<=10000; N++) {
    if (N%inteiro == 2) {
        console.log(N);
    }
}

/* A chave dessa questão não é a divisão do inteiro pelo N,
mas do N pelo inteiro, no caso 2/13, o resto será o própio 2,
e como N a cada volta que ele dá ele vai subir 1, logo,
encontraremos o resto da divisão por 2, dos números de 1
a 10000!! 
ex: N(1)/13 -> Não entra, vai somando até entrar os números.
*/