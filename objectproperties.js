//1. OBJECT PROPERTIES

// Here we are going to perform so dynamic action in an object. It will be given in square brackets

myName = "Sattyam";
mybioData = {
    [myName]:"Shivam",   //access values with square brackets
    [26+2]:"Is my age"  // arithmetic action can also be performed in square brackets
}
console.log(mybioData);


//2. No need to write key and values if both are same
const myFriend="Sattyam";
const myBestFriend="Mohan"

const myList={myFriend,myBestFriend};
console.log(myList);


// 3.SPREAD OPERATORS
// these are used to add more data of two array using an operator.

let colors=["pink","white","blue"];
console.log(colors);
let newColors=[...colors,"black","white"];// using spread opertors by giving (...colors)
console.log(newColors);


// ES7/2016 new features added
// 1.Array include
let isInclude = colors.includes("white");
console.log(isInclude); // gives true if not it returns false


// ES8/2017 Features Added
// Object.values
// Object.entries
let values = {name:"sattyam",class:"Eng"};
console.log(Object.values(values)); //returns values of a object
console.log(Object.entries(values)); //returns entries in a array format

// ES9/2018 Features added
// Spread operator for object launched , firstly it was only for arrays
let person={name:"Sattyam",sName:"Chauhan"};
let sPerson ={...person};
console.log(person);
console.log(sPerson);


