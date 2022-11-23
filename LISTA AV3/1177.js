var prompt = function(texto){return lines.shift();};
var T = parseInt(prompt());

var N = Array (1000);
var V = 0;

for (var i = 0; i < N.length; i++) {
    N[i] = V;
    V++;
    console.log('N['+i+'] = '+N[i]);
    if (V == T) {
        V = 0;
    }
}
