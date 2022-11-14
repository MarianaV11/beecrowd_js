var prompt = function(texto){return lines.shift();};
var casos = parseInt(prompt('Informe a quantidade de casos desejados: '));

var C = 0;
var R = 0;
var S = 0;

for (var i = 0; i < casos; i++) {
    var [acumulado, tipo] = prompt().split(' ');
    acumulado = parseInt(acumulado);
    
    if (acumulado >= 1 && acumulado <= 15 && tipo == 'C') {
        C = C + acumulado;
    } else if (acumulado >= 1 && acumulado <= 15 && tipo == 'R') {
        R = R + acumulado;
        } else if (acumulado >= 1 && acumulado <= 15 && tipo == 'S') {
            S = S + acumulado;
        }
}

var total = C+R+S;

console.log('Total: '+total+' cobaias');
console.log('Total de coelhos: '+C);
console.log('Total de ratos: '+R);
console.log('Total de sapos: '+S);
console.log('Percentual de coelhos: '+((C*100)/total).toFixed(2)+' %');
console.log('Percentual de ratos: '+((R*100)/total).toFixed(2)+' %');
console.log('Percentual de sapos: '+((S*100)/total).toFixed(2)+' %');