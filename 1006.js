//Input

var prompt = function(texto){return lines.shift();};
var A = parseFloat(prompt(A));
var B = parseFloat(prompt(B));
var C = parseFloat(prompt(C));

//Data processing

var average = (A*2+B*3+C*5)/10;

//Output

console.log('MEDIA = '+average.toFixed(1));