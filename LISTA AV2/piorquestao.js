var prompt = function(texto){return lines.shift();};
var n = 1;

for (var i = 0; i < n; i++) {
    var x = 28;

    var y = 1;
    while (y < x - 1) {
        y++;
        var r = x % y;
        if (r == 0) {
            console.log(x+' nao eh primo');
            break;
        }
    }

    if (r != 0) {
        console.log(x+' eh primo');
    }
}