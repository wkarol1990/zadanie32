var num1 = 2;
var num2 = 5;
document.getElementById("demo").innerHTML = findMax(num1, num2);
function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return console.log(max);
} 