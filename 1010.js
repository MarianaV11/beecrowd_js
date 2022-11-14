//Input
var prompt = function(texto){return lines.shift();};
var [code1,unity1,price1] = prompt().split(' ');
var [code2,unity2,price2] = prompt().split(' ');
code1 = parseInt(code1);
unity1 = parseInt(unity1);
price1 = parseFloat(price1);
code2 = parseInt(code2);
unity2 = parseInt(unity2);
price2 = parseFloat(price2);

//Data processing

var value = (unity1*price1)+(unity2*price2);

//Output
console.log('VALOR A PAGAR: R$ '+value.toFixed(2));