//Entrada de Dados
var prompt = function(texto){return lines.shift();};
var [A,B,C] = prompt().split(' ')
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

//Processamento de Dados
var area = ((A+B)*C/2);
var P = A+B+C;

if (A+B>C && A+C>B && B+C>A) {
    console.log('Perimetro = '+P.toFixed(1));
} else {
    console.log('Area = '+area.toFixed(1));
}