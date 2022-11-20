var prompt = function(texto){return lines.shift();};
var A = [];
var p = 0;

while (p < 100) {
    A[p] = parseFloat(prompt());
    if (A[p] <= 10) {
        console.log('A['+p+'] = '+(A[p]).toFixed(1));
    }
    p++;
}