/*
    “Function declarations are hoisted to the top of the context (either the function 
    in which the declaration occurs or the global scope) when the code is executed. 
    That means you can actually define a function after it is used in code without 
    generating an error.”
*/

var result = add(5, 5)

function add(num1, num2) {
    return num1 + num2;
}

// how the Javascript engine interprets the code

function add(num1, num2) {
    return num1 + num2;
}

var result = add(5, 5)