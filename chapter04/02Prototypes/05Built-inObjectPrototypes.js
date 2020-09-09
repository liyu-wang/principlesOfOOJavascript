Array.prototype.sum = function() {
    return this.reduce(function(previous, current){
        return previous + current;
    });
};

var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.sum();

console.log(result);


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1);
};

var message = "hello world!";
console.log(message.capitalize()); // "Hello world!"