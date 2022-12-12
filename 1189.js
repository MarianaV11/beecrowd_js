var prompt = function(texto){return lines.shift();};
var M = Array (12);
var sum = 0;
var aux = 0;

var option = prompt();

for (var L = 0; L < 12; L++) {
    M[L] = Array (12);
    for (var C = 0; C < 12; C++) {
        M[L][C] = parseFloat(prompt());
    }
}

for (L = 1; L <= 10; L++) {
    for (C = 0; C <= aux; C++) {
        sum += M[L][C];
    }
	if (L <= 4) {
		aux++;
	} else if (L >= 6) {
		aux--;
	}
}

if (option == 'S') {
    console.log(sum.toFixed(1));
} else {
    console.log((sum/30).toFixed(1));
}
