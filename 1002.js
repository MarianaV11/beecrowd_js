//Data input

var prompt = function(texto){return lines.shift();};
var radius = parseFloat(prompt());

//Data processing

const pi = 3.14159;
var area = pi*(radius**2);

//Output

console.log('A='+area.toFixed(4));