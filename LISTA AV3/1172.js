var prompt = function(texto){return lines.shift();};
var X = Array(10);

for (var i = 0; i < 10; i++) {
    X[i] = parseFloat(prompt());
    var NuloOuNegativo = (X[i] <= 0) ? X[i] = 1 : X[i];
    console.log('X['+i+'] = '+X[i]);
}