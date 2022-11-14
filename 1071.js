var prompt = function(texto){return lines.shift();};
var x = parseInt(prompt());
var y = parseInt(prompt());

var cont1 = 0;
var cont2 = 0;

for (var a = 0; a < x; a++) {
    if (a % 2 == 1) {
        cont1++;
    }
}

for (var b = 0; b < y; b++) {
    if (b % 2 == 1) {
        cont2++;
    }
}

console.log(cont1+cont2);