//----------Explaining Data Types in JS-------

/*
there are 7 Primitive Data Types in JS
String
Number
Boolean
undefined
null
Symbol
Bigint

and 1 Non-Primitive Data Type in JS
Object: Array
        Object Literals
        Dates
        Function
*/

//------------String--------
const stringVariable = `mohib`;
console.log(stringVariable);

//------------Number---------
const numVariable = 77;
console.log(numVariable);

//------------Boolean---------
const boolVariable = true;
console.log(boolVariable);

//------------Null----------
const nullVariable = null;
console.log(nullVariable);

//------------Undefined--------
let undefinedVariable;
console.log(undefinedVariable);

//------------BigInt----------
const bigintVariable = BigInt(9999999999999999999);
console.log(bigintVariable);

//------------Symbol()----------
const symbolVariable = Symbol();
console.log(symbolVariable);

//Object
//------------Array---------
const arr = [1, 2, 3, 4, Symbol("@"), null, true, undefined, `mohib`];
console.log(arr);
console.log(arr[4]);

//------------Object Literals----
const studentDetails = {
  name: "mohib",
  age: 21,
};
console.log(studentDetails);

//-----------Dates--------
const dateValue = new Date();
console.log(dateValue);

//----------Function--------
const funct = (name = name) => {
  console.log(`Hello ${name} I am Function`);
};
funct(`mohib`);

console.log(`\n\n`);
//---------typeOf in JS--------
console.log(typeof `srt`);
console.log(typeof 77);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof BigInt(99));
console.log(typeof arr);
console.log(typeof studentDetails);
console.log(typeof dateValue);
console.log(typeof funct);
