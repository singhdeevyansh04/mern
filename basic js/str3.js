// Arrays in js

// Example: Creating an array with elements
const fruits = ["apple", "banana", "cherry"];

// Accessing array elements
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
console.log(fruits[2]); // Output: "cherry"



// Example: Creating an array with mixed data types
const mixedArr = [1, "hello", true, {name: "Deevyansh"}];

console.log(mixedArr[0]); // Output: 1
console.log(mixedArr[1]); // Output: "hello"
console.log(mixedArr[2]); // Output: true
console.log(mixedArr[3]); // Output: {name: "Deevyansh"}


// Creating an empty array with the new keyword
const emptyArr = new Array();
console.log(emptyArr); //Outp

const newAraay = new Array(3);
console.log(newAraay);

// creating array using Array.from()

const str = "hello";
const newArr = Array.from(str);
console.log(newArr); // Output: ["h", "e", "l", "l", "o"] // this is how array.from create array from string

function greet(name, age) {
    console.log(Array.from(arguments)); // Output: ["name", "age"] (assuming arguments are "John", 30)
}

greet("John", 30);  //[john,30]// would be printed in form of array
//3

const numbers = [1, 4, 9];  // using map functions
const doubledNumbers = Array.from(numbers, num => num * 2);
console.log(doubledNumbers); // Output: [2, 8, 18]  

/*Array.from() creates a new array, it doesn't modify the original object.
The mapping function allows you to transform elements during array creation. */  // important


// acessing array elements.
const studentAge = [20,30,25]
const studentFage = studentAge[0];
const arrLength = studentAge.length;
console.log(arrLength); // give length of array
console.log(studentFage);


// pusing elemets in array in js

const fruits1 = ['mango','banana','apple'];
console.log('orignal fruits',fruits1)
const modiefiedFruits1=fruits1.push('kiwi','orange')// this method will modify orignal array
console.log('orignal fruits',fruits1)  

// pop

const animal = ['cat','dog','lion'];
console.log('orignal animal',animal);
const popAnimal = animal.pop(); // will remove last elemnt hence lion would be removed
console.log('popped animal is', popAnimal);
console.log('animals after pop',animal) // will print all elements except lion

// modifying length of array

const colors = ['red','blue','green'];
colors.length = 2;
console.log(colors); // only read and blue will be printed as i hv modified length of array