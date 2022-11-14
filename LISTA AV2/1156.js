var A = 1;
var B = 3;
var S = 0;
var total = 0;

while (B <= 41) {
    var S = S + (A + B);

    A = A + A;
    B = B + 2;
}

var total = total + (S/(A+B));

console.log(total.toFixed(2));