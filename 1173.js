var prompt = function(texto){return lines.shift();};
let V = parseInt(prompt());

let N = new Array(10);
N[0] = V;
console.log('N[0] = '+N[0]);

for (let i = 1; i <= 9; i++) {
    V *= 2;
    N[i] = V;
    console.log('N['+i+'] = '+N[i]);
}
