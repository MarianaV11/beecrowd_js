var prompt = function(texto){return lines.shift();};
var A = Array(100);

for (var i = 0; i < A.length; i++) {
    A[i] = parseFloat(prompt());
    if (A[i] <= 10) {
        console.log('A['+i+'] = '+A[i]);
    }
}