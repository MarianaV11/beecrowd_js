var prompt = function(texto){return lines.shift();};
var N = parseInt(prompt('Informe o número de casos desejados: '));

for (var i = 0; i < N; i++) {
    var [A,B,C] = prompt().split(' ');

    var mediaP = [(A*2)+(B*3)+(C*5)]/10;

    console.log(mediaP.toFixed(1));
}

//Não preciso transformar A,B,C em number?