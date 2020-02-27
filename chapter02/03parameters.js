/*
 “Another unique aspect of JavaScript functions is that you can pass any number of 
 parameters to any function without causing an error. That’s because function parameters 
 are actually stored as an array-like structure called arguments.”
 */

// “ The number of arguments a function expects is stored on the function’s length property. ”

function reflect(value) {
    return value;
}

console.log(reflect("Hi!"));
console.log(reflect("Hi!", 25));
console.log(reflect.length); // 1

reflect = function() {
    return arguments[0];
};

console.log(reflect("Hi!"));
console.log(reflect("Hi!", 25));
console.log(reflect.length); // 0


function sum() {
    var result = 0,
        i = 0,
        len = arguments.length;
    
    while (i < len) {
        result += arguments[i];
        i++;
    }

    return result;
}

console.log(sum(1, 2));
console.log(sum(3, 4, 5, 5));
console.log(sum(50));
console.log(sum());