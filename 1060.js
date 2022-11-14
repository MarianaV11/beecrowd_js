var prompt = function(texto){return lines.shift();};
var i = 0;
var cont = 0;

while (i < 6) {
    var x = parseFloat(prompt('Informe os valores'));
    if (x > 0) {
        cont++;
    }
    i++;
}

console.log(cont+' valores positivos');