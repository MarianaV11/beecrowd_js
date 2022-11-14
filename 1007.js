//Input

var prompt = function(texto){return lines.shift();};
var A = parseInt(prompt());
var B = parseInt(prompt());
var C = parseInt(prompt());
var D = parseInt(prompt());

//Data processing

var difference = (A*B)-(C*D);

//Output

console.log('DIFERENCA = '+difference);