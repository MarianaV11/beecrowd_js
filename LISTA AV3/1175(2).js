var prompt = function(texto){return lines.shift();};
var N = Array (20);
var aux = 0;
var Change = N.length - 1;

for (var i = 0; i < N.length; i++) {
    N[i] = parseFloat(prompt());
}

for (i = 0; i < (N.length)/2 ; i++) {
    aux = N[i];
    N[i] = N[Change - i];
    N[Change - i] = aux;
}

for (i = 0; i < N.length; i++) {
    console.log('N['+i+'] = '+N[i]);
}
