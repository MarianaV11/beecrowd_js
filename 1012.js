var prompt = function(texto){return lines.shift();};
var [A, B, C] = prompt().split(' ').map(Number);

var areaT = A*C/2;
var areaC = 3.14159*C**2;
var areaTP = (A+B)*C/2;
var areaQ = B**2;
var areaR = A*B;

console.log('TRIANGULO: '+areaT.toFixed(3));
console.log('CIRCULO: '+areaC.toFixed(3));
console.log('TRAPEZIO: '+areaTP.toFixed(3));
console.log('QUADRADO: '+areaQ.toFixed(3));
console.log('RETANGULO: '+areaR.toFixed(3));