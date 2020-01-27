function sayHi() {
    console.log("Hi!");
}

sayHi();
var sayHi2 = sayHi;
sayHi2()

// same code rewritten to use the Function constructor

var sayHi = new Function("console.log(\"Hi!\")");

sayHi();
var sayHi2 = sayHi;
sayHi2();

// sort function

var numbers = [1, 5, 8, 4, 7, 10, 2, 6];
numbers.sort(function(first, second) {
    return first - second;
});
console.log(numbers);

numbers.sort();
console.log(numbers);