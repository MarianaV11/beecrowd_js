var prompt = function(texto){return lines.shift();};
var i = 0;
var posiçao = 0;
var max = 0;

while (i < 100) {
    var number = parseInt(prompt());
    if (number > max) {
        max = number;
        posiçao = i + 1;
    }
    i++;
}

console.log(max);
console.log(posiçao);
