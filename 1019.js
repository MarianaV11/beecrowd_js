var prompt = function(texto){return lines.shift();};
var seconds = parseInt(prompt());

var hour = parseInt(seconds/3600);
seconds = seconds % 3600;

var minute = parseInt(seconds/60);
seconds = seconds % 60;

console.log(hour+':'+minute+':'+seconds);
