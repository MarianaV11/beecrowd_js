var prompt = function(texto){return lines.shift();};
var [X,Y] = prompt().split(' ');

while (X,Y != null && X,Y !== undefined) {
    if (X>0 && Y>0) {
        console.log('primeiro');
    } else if (X<0 && Y>0) {
            console.log('segundo');
        } else if (X<0 && Y<0) {
                console.log('terceiro');
            } else if (X>0 && Y<0) {
                console.log('quarto');
            }
var [X,Y] = prompt().split(' ');
}