//1. Number

let number=45;
console.log(number + 20);
console.log(number);
let percentage = 91.25;
console.log("percentage:"+percentage);

//2. string

let name1 = "ganesh";
let name2 ="kumar";
console.log(name1+name2);

//3. Boolean

let doYouHavePassport = true;
console.log(doYouHavePassport);

//4. Null
let empName = null;
console.log(empName);

//5 . undefimed
let age;
console.log(age);

//6. symbol
var countryOfOrigin= Symbol();
let productDetails = {
    productName:"One plus",
    productPrice:6000,
    [countryOfOrigin]:'Japan',
    eligibleForReturn:false

}
console.log(productDetails);
console.log(productDetails[countryOfOrigin]);





