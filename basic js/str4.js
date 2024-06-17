// loops in arrays
const arr1 = [23,3,3,3,4,4,4];

for(let i=0;i<arr1.length-1;i++){
    console.log('nos are',arr1[i])
}

// for each loop
for (let i = 0; i < 5; i++) {
    console.log("Number:", i);
  }
 
const numbers = [1, 2, 3, 4, 5]; // using for each loop to iterate over arrays  

  numbers.forEach(function(number) { // number is basically a variable that iterated over our array numbers
    console.log(number * 2);
  });
    

// array.map() for looping // in for each orignal array is modified but here it creates a new array

const numbers1 = [1,2,3,4,5,6,];
const newArrmap = numbers1.map(function(num,idx,arr){ // giving other 2 arguments are not compulsary to be given
    return num * 10 // num is nothig but iterator variable

})
console.log(numbers1); // no change
console.log(newArrmap);

// coverting uppercase to lower using map
const fruits = ['apple','orange','mango']
const newUppercase = fruits.map(function(fruit,idx,arr){
    return fruit.toUpperCase()

})
console.log(newUppercase)


// filter method  // keeping orignal array and creating a new array with some filters

const number2 = [2,12,77,99,80]
const evenNumbers = number2.filter(function(num,idx,arr){
    return num%2 === 0 // only return even nos in array
})
console.log(number2)  // orignal
console.log(evenNumbers) // modified

const mixedArr = [0,1,'apple',"",null,'banana']
const truthValue = mixedArr.filter(function(value){
    return Boolean(value) // boolean function considers only those value that  return to true 
})

console.log(truthValue);


// using reduce function to sum up arrays

const num3= [1,2,3,4,5,5,6];

const sum = num3.reduce(function(acc,current){  // acc has initial value which is set to 0  // cuurent has value of each element is iteration upon
    console.log(acc) // at initial acc value 0
    console.log(current) // current 1 
    return acc+current; //so ans 1 now acc 1 current 2 ans 3

},0) // this 0 is nothing but initial value of acc

console.log(sum);


// reduce to find max value in an array
const maxNum = num3.reduce(function(acc,current){
    if(current>acc){
        return current;
    }
    else{
        return acc;
    }


},0)