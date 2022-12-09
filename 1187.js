var prompt = function(texto){return lines.shift();};
var M = Array (12);
var Sum = 0;
var aux = 1;
var aux2 = 10;

var option = prompt();

for (var L = 0; L < 12; L++) {
    M[L] = Array (12);
    for (var C = 0; C < 12; C++) {
        M[L][C] = parseFloat(prompt());
    }
}

for (L = 0; L <= 4; L++) {
    for (C = aux; C <= aux2; C++) {
        Sum += M[L][C];
    }
    aux++;
    aux2--;
}

if (option == 'S') {
    console.log(Sum.toFixed(1));
} else {
    console.log((Sum/30).toFixed(1));
}
