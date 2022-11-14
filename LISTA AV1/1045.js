//Entrada de Dados

var prompt = function(texto){return lines.shift();};
var [A,B,C] = prompt().split(' ');
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

//Processamento de Dados

var aux = 0;

if (A<B && B>C) {
    aux = A;
    A = B;
    B = aux;
} else if (A<C && C>B) {
        aux = A;
        A = C;
        C = aux;    
    } if (A>=(B+C)) {
			console.log('NAO FORMA TRIANGULO');
        } else if ((A*A)==(B*B)+(C*C)) {
				console.log('TRIANGULO RETANGULO');
            } else if ((A*A)>(B*B)+(C*C)) {
                    console.log('TRIANGULO OBTUSANGULO');
                } else if ((A*A)<(B*B)+(C*C)) {
                        console.log('TRIANGULO ACUTANGULO');
					}
						
if (A==B && A==C) {
    console.log('TRIANGULO EQUILATERO');
} else if (B==C && A!=B || A==C && B!=A || B==A && C!=B) {
            console.log('TRIANGULO ISOSCELES');
        }