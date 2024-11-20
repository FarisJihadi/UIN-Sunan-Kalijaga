// mengubah nilai antar tipe data
// mengubah ke string secara ekspilit
const number = 123;
const boolean = true;

const strnumber = String(number);
const strboolean = boolean.toString();

console.log(strnumber); // "123"
console.log(strboolean); // "boolean"

console.log(typeof strnumber); // string
console.log(typeof strboolean); // string

// mengubah ke number secara ekspilit
const strNumber = "123";
const strFloat = "3.14";
const boolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); //output: 123
console.log(floatFromString); //output: 3.14

// membuktikan tipe data
console.log(typeof numFromString);
console.log(typeof floatFromString);

// mengubah ke boolean secara ekspilit
const number = "123";
const string = "Dicoding";
const empty = null;

const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); //output: true
console.log(boolFromString); //output: true
console.log(boolFromNull); //output: false

// mengubah number ke string secara implisit
const age = 20;
const message = "umurku: " + age;
console.log(message); // umurku: 20
