var person1 = {
    name: "Nicholas"
};

console.log("name" in person1); // true

delete person1.name // true - out output

console.log("name" in person1) // false
console.log(person1.mame) // undefined