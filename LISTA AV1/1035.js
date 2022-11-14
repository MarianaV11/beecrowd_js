//Entrada de Dados
var prompt = function(texto){return lines.shift();};
var [A,B,C,D] = prompt('Informe quatro valores:').split(' ')
A = parseInt(1);
B = parseInt(2);
C = parseInt(3);
D = parseInt(4);

//Processamento de Dados
if(B>C && D>A && C+D>A+B && C>0 && D>0 && A%2===0) {
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}