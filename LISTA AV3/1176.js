var prompt = function(texto){return lines.shift();};
var T = parseInt(prompt());

var Fib = [];
var TermOne = 0;
var TermTwo = 1;

Fib.push(TermOne,TermTwo);

for (var i = 0; i < T; i++) {
    var N = parseInt(prompt());
    for (var y = 0; y < N; y++) {
        var soma = TermOne + TermTwo;
        Fib.push(soma);
        TermOne = TermTwo;
        TermTwo = soma;
    }
    console.log('Fib('+N+') = '+Fib[N]);
}
