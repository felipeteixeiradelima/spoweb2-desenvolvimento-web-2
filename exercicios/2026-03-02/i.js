// Testar instanceof

// String
console.log("String:");
console.log("teste" instanceof String); // false
console.log(new String("teste") instanceof String); // true

// Number
console.log("\nNumber:");
console.log(67 instanceof Number); // false
console.log(new Number(67) instanceof Number); // true

// Boolean
console.log("\nBoolean:");
console.log(true instanceof Boolean); // false
console.log(new Boolean(true) instanceof Boolean); // true

// Function
console.log("\nFunction:");
console.log(function () {"Hello World!"} instanceof Function); // true
console.log(new Function("return \"Hello World!\"") instanceof Function); // true

// Array
console.log("\nArray:");
console.log([1,2,3] instanceof Array); // true
console.log(new Array(1,2,3) instanceof Array); // true
