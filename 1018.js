var n = 576

if (n/100 != 0) {
    var resto1 = n % 100;
    console.log((n/100|0)+' nota(s) de R$ 100,00');
}

if (resto1/50 != 0) {
    var resto2 = resto1 % 50;
    console.log((resto1/50|0)+' nota(s) de R$ 50,00');
}

if (resto2/20 != 0) {
    var resto3 = resto2 % 20;
    console.log((resto2/20|0)+' nota(s) de R$ 20,00');
}

if (resto3/10 != 0 || resto3/10 == 0) {
    var resto4 = resto3 % 10;
    console.log((resto3/10|0)+' nota(s) de R$ 10,00');
}


if (resto4/5 != 0) {
    var resto5 = resto4 % 5;
    console.log((resto4/10|0)+' nota(s) de R$ 5,00');
}


 if (resto5/2 != 0) {
    var resto6 = resto5 % 2;
    console.log((resto5/2|0)+' nota(s) de R$ 2,00');
}

if (resto6/1 == 0) {
     console.log(resto6/1+' nota(s) de R$ 1,00');
}