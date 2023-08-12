let x;

//---------Type Conversion: Explicit Conversion------
//---------String Conversion--------
/*
Method-1
String(Number/Boolean/Date/Array/Float/null/undefined)

Method-2
variable.toString()
*/
x = String(1234567);
console.log(x, typeof x);

x = String(true);
console.log(x, typeof x);

x = String(new Date());
console.log(x, typeof x);

x = String([1, 2, 3, 4, true]);
console.log(x, typeof x);

x = String(1.23344);
console.log(x, typeof x);

x = String(null);
console.log(x, typeof x);

x = String(undefined);
console.log(x, typeof x);

//Method-2
x = 1234;
x = x.toString();
console.log(x, typeof x);

x = true;
x = x.toString();
console.log(x, typeof x);

// x = null;               //ERROR
// x = x.toString();
// console.log(x, typeof x);

// x = undefined;           //ERROR
// x = x.toString();
// console.log(x, typeof x);

x = new Date();
x = x.toString();
console.log(x, typeof x);

x = [12, 12, 3, 4];
x = x.toString();
console.log(x, typeof x);
console.log(`\n\n\n`);

//-----------Number Conversion-------
/*
Method-1
Number(String/Boolean/Date/Float)

Method-2 :-apply on numbers
parseInt(`3.141697655`)         //output: 3

Method-3 :-apply on numbers
x= parseFloat(`3.141697655`)    //output: 3.141697655
x.toFixed(3)                    //output: 3.141

*/
x = Number(`mohib`);
console.log(x, typeof x);

x = Number(` `);
console.log(x, typeof x);

x = Number(`1.23344`);
console.log(x, typeof x);

x = Number(true);
console.log(x, typeof x);

x = Number(new Date());
console.log(x, typeof x);

//gives same output
x = new Date();
x = x.getTime();
console.log(x, typeof x);

x = Number([1, 2, 3, 4, true]);
console.log(x, typeof x);

x = Number(null);
console.log(x, typeof x);

x = Number(undefined);
console.log(x, typeof x);

// Method-2
x = parseInt(`3.141697655`);
console.log(x, typeof x);

//Method-3
x = parseFloat(`3.141697655`);
console.log(x, typeof x);

x = parseFloat(`3.141697655`);
console.log(x.toFixed(3), typeof x);

//-----------Boolean Conversion-------
/*
Method:
Boolean(Number/String/Null/Undefined)
*/

x = Boolean(`mohib`);
console.log(x, typeof x);

x = Boolean(` `);
console.log(x, typeof x);

x = Boolean(123);
console.log(x, typeof x);

x = Boolean(1);
console.log(x, typeof x);

x = Boolean(0);
console.log(x, typeof x);

x = Boolean(null);
console.log(x, typeof x);

x = Boolean(undefined);
console.log(x, typeof x);