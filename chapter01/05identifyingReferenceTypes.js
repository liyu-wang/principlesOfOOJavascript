function reflect(vlaue) {
    return vlaue;
}

console.log(typeof reflect); // "function"

var items = [];
var object = {};
console.log(typeof items);
console.log(typeof object);

// other reference types are trickier to identify because for
// all reference types other than functions, typeof returns "object"

var items = [];
var object = {};

function reflect(value) {
    return value;
}

// “To identify reference types more easily, you can use JavaScript’s instanceof operator.
// The instanceof operator takes an object and a constructor as parameters.”

console.log(items instanceof Array); // true
console.log(object instanceof Object); // true
console.log(reflect instanceof Function) // true

// instanceof operator can identify inherited types.
// that means every object is actually an instance of Object
// because every reference type inherits from Object.

console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(object instanceof Object); // true
console.log(object instanceof Array); // false
console.log(reflect instanceof Function); // true
console.log(reflect instanceof Object); // true