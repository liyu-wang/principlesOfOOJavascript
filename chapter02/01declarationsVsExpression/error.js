/*
“Function hoisting happens only for function declarations because 
the function name is known ahead of time. Function expressions, 
on the other hand, cannot be hoisted because the functions can be 
referenced only through a variable. So this code causes an error:”
*/

// error!
var result = add(5, 5);

var add = function(num1, num2) {
    return num1 + num2;
};