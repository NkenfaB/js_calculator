var x = prompt("Enter First number.", "e.g.123");
var y = prompt("Enter Second number.", "e.g.123");
var oper = prompt("Enter an Operator ", " * , - , / , + ");

var z;

if (oper == "+") {
  z = x + y;
} else if (oper == "/") {
  z = x / y;
} else if (oper == "*") {
  z = x * y;
} else if (oper == "-") {
  z = x - y;
}

console.log(`${x} ${oper} ${y} = ${z}`);
window.alert(z);
