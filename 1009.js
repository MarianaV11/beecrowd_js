//Input
var prompt = function(texto){return lines.shift();};
var name = prompt('What is your name?');
var salary = parseFloat(prompt('What is your fixed salary?'));
var sales = parseFloat(prompt('Sales in one month: '))

//Data processing
var total = (0.15*sales)+salary;

//Output
console.log('TOTAL = R$ '+total.toFixed(2));
