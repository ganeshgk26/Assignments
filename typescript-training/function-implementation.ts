//1. Function without parameters and without return type
//Creating a function that is not going to take any input, 
// at the same time it is not going to give you any output data as well. 

function sayHello():void {
    console.log("Hello World");
}
//calling the function
sayHello();

//2. Function with parameters and without return type
//Creating a function that is going to take some input parameters, 
// but it is not going to give you any output data.
function greetUser(name:string):void{
    console.log("Hello, "+ name+ "!");
}
//calling the function
greetUser("Ganesh");

//3. Function without parameters and with return type
//Creating a function that is not going to take any input,
//  but it is going to give you some output data.
function getCurrentYear():number{
    let currentDate = new Date();
    return currentDate.getFullYear();
}

//calling the function
let year = getCurrentYear();
console.log("Current Year: " + year); // Output: Current Year: 2024 (or the current year)


//4. Function with parameters and with return type
//Creating a function that is going to take some input parameters 
// and it is also going to give you some output data.
function addNumbers(a:number, b:number):number{
    return a + b;
}

//calling the function
let sum = addNumbers(5, 10);
console.log("Sum: " + sum); // Output: Sum: 15


//5. Function with optional parameters. 
//Creating a function that can take some input parameters and some parameters are optional to enter. 
// ? represents that the parameter is optional.
function printEmployeeDetails(name:string, age?:number):void{
    if(age !== undefined){
        console.log("Employee Name: " + name + ", Age: " + age);
    } else {
        console.log("Employee Name: " + name + ", Age: Not Provided");
    }
}

//calling the function
printEmployeeDetails("John", 30); // Output: Employee Name: John, Age: 30
printEmployeeDetails("Doe"); // Output: Employee Name: Doe, Age: Not Provided

//6. Function with default parameters.
//Creating a function that can take some input parameters 
// and some parameters have default values if not provided.
function printEmployeeInfo(name:string, visaStatus:boolean = false): void{
    console.log(" employee name " + name + " Visa Status "+ visaStatus);
}
//calling the function
printEmployeeInfo("ganesh", true);
printEmployeeInfo("Kumar");

//7. Function with rest parameters.
//Creating a function that can take multiple input parameters as an array.

function sumOfNumbers(...numbers: number[]):void{
    let sum:number=0;
    for (let num of numbers){
        sum +=num;
    }
    console.log("Sum: "+ sum);
}

//calling the function
sumOfNumbers(1,2,3,4,5,6);
sumOfNumbers(20,50);
sumOfNumbers(10.25,10.15);