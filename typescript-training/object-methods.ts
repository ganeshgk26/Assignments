//1. Creating the new object.

interface Address{
    street: string;
    city: string;
    country:string;
}
interface Person{
    firstName?:string;
    lastNmae:string;
    age?:number;
    email?:string;
    address:Address;
    fullName():string;
}

let person1:Person={
    firstName:"Sowmya",
    lastNmae:"Kumar",
    age:30,
    address:{
        street:"123 main street",
        city:"NY",
        country: "Newyork",
    },
    fullName() :string{
        return this.firstName + " " + this.lastNmae;
        
    }
};

//2.Accessing object properties
console.log(person1.firstName);
console.log(person1["lastNmae"]);
console.log(person1.address.city);

//3. Adding new property to the object
person1.email = "ganesh26@gmail.com";
person1.age=35;
person1.age= 40;
console.log(person1);

//4. Deleting property from the object
delete person1.email;
console.log(person1);

//5.Check whether particular properties are available or not.
console.log("age" in person1);
console.log("gender" in person1);

//6. getting object keys
let keys = Object.keys(person1);
console.log(keys);

//7. Getting object values
let values = Object.values(person1);
console.log(values);

//8. Getting Object entries
console.log("Entries==========================");

let entries = Object.entries(person1);
console.log(entries);

//9.cloning the object
console.log("========cloning the object=============");
let personCopy = {...person1};
console.log(personCopy);

//10. Merging object
console.log("==============merging===========");
let additionalInfo = {occupation:"developer", hobbies:["reading", "coding"]};
let mergedPerson = {...person1, ...additionalInfo};
console.log(mergedPerson);

//11. Iterating over object 
console.log("Iterate====================================")
for (let key in person1){
  //  console.log([key+ " : "+ person1[key as keyof Person]]);
  console.log('${key}: ${person1[key]}');
}

//12. checking object type
console.log(typeof person1);
console.log(typeof person1.age);
console.log(person1 instanceof Object);