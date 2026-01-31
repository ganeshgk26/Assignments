//1. Named Function

function greetThePerson (name:string):string{
    return (" Hello "+ name + "! Good Morning");
}
function printTheGreeeting (name:string): void{
    console.log(" Hello " + name + "! Good Morning");
}
let greetMsg = greetThePerson("Ganesh");
console.log(greetMsg);
printTheGreeeting("kumar");


//2. Regular function
function sum (a:number, b:number):number{
    let c:number = a+b;
    return c;
}

//Arrow function
let sumOfNumber = (a:number, b:number):number => a+b;

// Calculate the square of  numbers and return the output in the form of a number. 
function square( a:number):number{
let c:number = a*a;
return c;
}

// Arrow function
let squareOfNumber = (a:number):number => a*a;

console.log(sum(1,2));
console.log(sumOfNumber(5,10));
console.log(squareOfNumber(5));

// 3. Anonymous functions:
// Anonymous functions are functions that are defined without a name. They are often used as arguments to other functions or assigned to variables.
// Syntax:
// let functionName = function(parameters):returnType {
//   // function body
// }

//Syntax : function as parameter of another function
// function outerFunction(paramFunction: functionType): returnType {
//   // function body
// }

// Example: Using an anonymous function as parameter of another function
function run(  greet: (name: string) => void  ): void {
    greet("Charlie");
}

function printName(name: string): void {
    console.log("Hello, "+name+"! Good Morning.");
}

//calling the function
run(

function(name:string):void{
    console.log("Hello, "+name+"! Good Morning.");
}

)

printName("Bharath"); // Output: Hello, David! Good Morning.