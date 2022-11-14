
var a = 1;
var b = 1;
var divisao = 0;
while(b < 28){

    divisao = divisao + (b/a);
    a = a * 2;
    b = b + 2;
}
console.log((divisao).toFixed(2));