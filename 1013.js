var prompt = function(texto){return lines.shift();};
var [A, B, C] = prompt().split(' ').map(Number);

var maiorAB = (Math.abs(A-B)+A+B)/2;
var maiorC = (Math.abs(maiorAB-C)+maiorAB+C)/2;

if (maiorAB > maiorC) {
    console.log(maiorAB+' eh o maior');
} else {
    console.log(maiorC+' eh o maior');
}