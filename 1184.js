var prompt = function(texto){return lines.shift();};

var M = Array (12);
var Sum = 0;
var aux = 0;

var option = prompt();

for (var L = 0; L < 12; L++) {
    M[L] = Array (12);
    for (var C = 0; C < 12; C++) {
        M[L][C] = parseFloat(prompt());
    }
}

for (L = 1; L < 12; L++) {
    for (C = 0; C <= aux; C++) {
        Sum += M[L][C];
    }
    aux++;
}

if (option == 'S') {
    console.log(Sum.toFixed(1));
} else {
    console.log((Sum/66).toFixed(1));
}
