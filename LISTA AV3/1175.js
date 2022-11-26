var prompt = function(texto){return lines.shift();};
var N = Array (20);
var aux = 0;

for (var i = 0; i < 20; i++) {
    N[i] = parseFloat(prompt());
}

for (i = 0; i < 10; i++) {
    aux = N[i];
    N[i] = N[19 - i];
    N[19 - i] = aux;
}

for (i = 0; i < 20; i++) {
    console.log('N['+i+'] = '+N[i]);
}
