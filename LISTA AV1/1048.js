//Entrada de Dados
var prompt = function(texto){return lines.shift();};
var salario = parseFloat(prompt());

//Processamento de Dados

if (salario>=0 && salario<=400) {
    var novoS1 = salario*1.15;
    var reajuste1 = 0.15*salario;
    console.log('Novo salario: '+novoS1.toFixed(2));
    console.log('Reajuste ganho: '+reajuste1.toFixed(2));
    console.log('Em percentual: 15%');
} else if (salario>=400.01 && salario<=800) {
        var novoS2 = salario*1.12;
        var reajuste2 = salario*0.12;
        console.log('Novo salario: '+novoS2.toFixed(2));
        console.log('Reajuste ganho: '+reajuste2.toFixed(2));
        console.log('Em percentual: 12%');
    } else if (salario>=800.01 && salario<=1200) {
            var novoS3 = salario*1.1;
            var reajuste3 = salario*0.1;
            console.log('Novo salario: '+novoS3.toFixed(2));
            console.log('Reajuste ganho: '+reajuste3.toFixed(2));
            console.log('Em percentual: 10%');
        } else if (salario>=1200.01 && salario<=2000) {
                var novoS4 = salario*1.07;
                var reajuste4 = salario*0.07;
                console.log('Novo salario: '+novoS4.toFixed(2));
                console.log('Reajuste ganho: '+reajuste4.toFixed(2));
                console.log('Em percentual: 7%');
            } else {
                var novoS5 = salario*1.04;
                var reajuste5 = salario*0.04
                console.log('Novo salario: '+novoS5.toFixed(2));
                console.log('Reajuste ganho: '+reajuste5.toFixed(2));
                console.log('Em percentual: 4%');
            }