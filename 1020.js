var prompt = function(texto){return lines.shift();};
var AgeInDays = parseInt(prompt());

var years = parseInt(AgeInDays/365);
var days = AgeInDays % 365;

var months = parseInt(days/30);
days = days % 30;

console.log(years+' ano(s)');
console.log(months+' mês(es)');
console.log(days+' dia(s)');
