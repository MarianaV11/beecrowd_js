var prompt = function(texto){return lines.shift();};
var Line = parseInt(prompt());
var option = prompt();

var M = Array (12);
var sum = 0;
var i = 0;

for (var L = 0; L < M.length; L++) {
    M[L] = Array (12);
    for (var C = 0; C < M.length; C++) {
        M[L][C] = parseFloat(prompt());
    }
}

while (i < 12) {
    sum = sum + M[Line][i];
    i++;
}

if (option == 'S') {
    console.log(sum);
} else {
    console.log((sum/12).toFixed(1));
}
