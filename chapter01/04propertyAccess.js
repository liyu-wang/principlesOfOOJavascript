// Dot notation
var array = [];
array.push(12345);

// bracket notation
array["push"](12345);

// dynamically decide which property to access with bracket notation
var method = "push";
array[method](12345);

console.log(array);