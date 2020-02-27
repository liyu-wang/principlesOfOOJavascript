function reflect(vlaue) {
    return vlaue;
}

console.log(typeof reflect) // "function"

// other reference types are trickier to identify because for
// all reference types other than functions, typeof returns "object"

var items = [];
var object = {};

function relect(value) {
    return value;
}

console.log(items instanceof Array); // true
console.log(object instanceof Object); // true
console.log(relect instanceof Function) // true

// instanceof operator can identify inherited types.
// that means every object is actually an intance of Object
// because every reference type inherits from Object.

console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(object instanceof Object); // true
console.log(object instanceof Array); // false
console.log(reflect instanceof Function); // true
console.log(reflect instanceof Object); // true