
var Y = 0;

while (Y == 0) {
    var prompt = function(texto){return lines.shift();};
    var nota1 = parseFloat(prompt('Informe a nota do aluno: '));
    var nota2 = parseFloat(prompt('Informe a segunda nota do aluno: '));

    while (nota1 < 0 || nota1 > 10) {
        console.log('nota invalida');
        nota1 = parseFloat(prompt('Informe a nota do aluno: '));
    }
    while (nota2 < 0 || nota2 > 10) {
        console.log('nota invalida');
        nota2 = parseFloat(prompt('Informe a segunda nota do aluno: '));
    }
    break;
}


console.log('media = '+((nota1+nota2)/2).toFixed(2));