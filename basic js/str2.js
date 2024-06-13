// numbers in js

/*
1. js no is a premitive data type
2. js no is not an object
3. js no is not an array
4. js no is not a function
5. range from 10^308 to 10^308 including more like nan and infinity

*/

// using String.toString() method

const age = 42
console.log(age.toString())

const price = 19.9
const dispPrice = "u r pice is :"+price.toString();
console.log(dispPrice);

// coverting a no to binary no using toString() method

const num = 42
console.log(num.toString(2)) // to covert to hexa just pass in 16

const bigInt = BigInt(1234567890123456789012345678901234567890)
console.log(bigInt.toString())

// .toFixed() method is used to round off a number
const num1 = 42.123456789
console.log(num1.toFixed(2))  // round off to 42.12 second place / same as any parameters can be passed with in it

// number to exponential

let num11 = 5.56789;
let n = num11.toExponential();
console.log(n); // Output: 5.56789e+0

//
let num2 = 1.234567;
let n2 = num2.toExponential(3); // just thing would be rounded off till value 3
console.log(n2); // Output: 1.235e+0


// parseInt() method
const strNumber = "007";
const parsedNumber = parseInt(strNumber);
console.log(parsedNumber); // Output: 7  // basically converting string to no

//

const hexString = "1A"; // Hexadecimal representation of 26
const parsedHex = parseInt(hexString, 16);
console.log(parsedHex); // Output: 26

//
const nonNumericString = "Hello123";
const parsedNonNumeric = parseInt(nonNumericString);
console.log(parsedNonNumeric); // Output: NaN


//

const spacedString = "  42  ";
const parsedSpaced = parseInt(spacedString);  // parse int ignores trailing spaces
console.log(parsedSpaced); // Output: 42

// Number.parseFloat() method
//The parseFloat() function takes a string as its argument and returns a floating-point number.

const strNumber1 = "12.57";
const parsedNumber1 = parseFloat(strNumber);
console.log(parsedNumber1); // Output: 12.57

//
const nonNumericString1 = "abc";
const parsedNonNumeric1 = parseFloat(nonNumericString);
console.log(parsedNonNumeric1); // Output: NaN

/*Adjusting Decimal Precision:
The parseFloat() function does not allow you to adjust the number of decimal places directly.
If you need a specific number of decimal places, consider using the .toFixed() method after parsing. */

const stringNumber = "37.5930";
const floatNumber = parseFloat(stringNumber);
const fixedFloatString = floatNumber.toFixed(2); // "37.59"  // using.toFixed() again float number will get converted to string
const fixedFloat = parseFloat(fixedFloatString); // again convert string to float
console.log(fixedFloat); // Output: 37.59

//When the result of parseFloat() is NaN, you might want to replace it with 0 in certain cases.
function multiplyByTwo(x) {
    if (isNaN(parseFloat(x))) {
        x = 0;  // when we pass a string like "abc" it will convert to 0
    }
    return parseFloat(x) * 2; // if we pass a string like "3.21" it will convert to 6.42
}
console.log(multiplyByTwo("abc")); // Output: 0
console.log(multiplyByTwo("3.21")); // Output: 6.42


// basic usage .Nan method
const x = 0 / 0;
console.log(Number.isNaN(x)); // Output: true











