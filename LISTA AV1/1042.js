//Entrada de Dados

var [A,B,C] = prompt().split(' ');
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);

//Processamento de Dados

if (A>B && B>C) {
    console.log(C);
    console.log(B);
    console.log(A);
} else if (B>A && A>C) {
        console.log(C);
        console.log(A);
        console.log(B);
    } else if (C>A && A>B) {
            console.log(B);
            console.log(A);
            console.log(C);
        } else if (A>C && C>B) {
                console.log(B);
                console.log(C);
                console.log(A);
            } else if (C>B && B>A) {
                    console.log(A);
                    console.log(B);
                    console.log(C);
                } else if (B>C && C>A) {
                    console.log(A);
                    console.log(C);
                    console.log(B);
                }

console.log();
console.log(A);
console.log(B);
console.log(C);