var prompt = function(texto){return lines.shift();};
var produto = parseInt(prompt('Informe a preferência de combustível: 1.Álcool, 2.Gasolina e 3.Diesel '));

var cont1 = 0;
var cont2 = 0;
var cont3 = 0;

while (produto != 4) {
    var produto = parseInt(prompt('Informe a preferência de combustível: 1.Álcool, 2.Gasolina e 3.Diesel '));
    if (produto == 1) {
        cont1++;
    } else if (produto == 2) {
        cont2++;
        } else if (produto == 3) {
            cont3++;
        }
}

console.log('MUITO OBRIGADO');
console.log('Alcool: '+cont1);
console.log('Gasolina: '+cont2);
console.log('Diesel: '+cont3);