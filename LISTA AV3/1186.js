var prompt = function(texto){return lines.shift();};
var option = prompt();

var M = Array (12);
var sum = 0;
var aux = 11;

for (var L = 0; L < 12; L++) {
	M[L] = Array (12);
	for (var C = 0; C < 12; C++) {
		M[L][C] = parseFloat(prompt());
	}
}

for (var i = 1; i < 12; i++) {
	for (var j = 11; j >= aux; j--) {
		sum += M[i][j]; 
	}
	aux--;
}

if (option == 'S') {
	console.log(sum);
} else {
	console.log((sum/66).toFixed(1));
}
