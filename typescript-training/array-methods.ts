//1. Creating an Array

let numbers : number[]= [1,2,3,4,5];
let numbers1: number[]=[7,8,9,10];
let fruits: string[]= ["apple", "banana", "Orangge"];
console.log(numbers);
console.log(fruits);

//2. Accessing Array Elements
console.log(numbers[0]);
console.log(fruits[2]);

//3. Removing elements from the end:
let lastNumber = numbers.pop();
console.log(lastNumber);
console.log(numbers);

//4. Adding elements to the beginning
numbers.unshift(0);
console.log(numbers);

//5. Removing elements form the beginning
let firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers);

//6.finfing the index of an element
let indexOfThree = numbers.indexOf(3);
console.log(indexOfThree);
console.log(numbers);

//7. Removing elements by index
let addNumber = numbers.splice(3,0,10,20);
console.log(addNumber);
console.log(numbers);

//8. copying part of an array
let slicedNumbers = numbers.slice(1,4);
console.log(slicedNumbers);
console.log(numbers);

//9. concatenate arrays
let combinedArrays = numbers.concat(numbers1);
console.log(combinedArrays);
console.log(numbers);

//10. Iterating over elements
numbers.forEach((Element)=>{
    console.log(Element);
});

//. 11. Filter elements
let filteredNumbers = numbers.filter((num)=>num>5);
console.log(filteredNumbers);

//12. Mapping element
let squaredNumber = numbers.map((num)=>num*num);
console.log(squaredNumber);





