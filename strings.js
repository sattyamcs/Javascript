// zero or more characters written inside quotes
// JS strings are used to storing and manipulating texts
// You can use single or double quotes
// String can be created as primitives , from string literals , as a object , using the string constructor

let myName = "Sattyam";
let myProfession = "Engineer";
let newName = new String ("Sattyam Thakur");//this is string with the help of string constructor

console.log(myProfession);
console.log(newName);

// METHODS TO BE USED IN STRINGS
// 1.length of the string

console.log(myName.length);

// ESCAPE chracters used as;
let str = "Here we are learning \"JS \"  from basics"
console.log(str);

// Finding a string in a string
console.log(str.indexOf("learning"));

//Searching a string in a string
console.log(str.search("learning"));

// EXTRACTING STRING PARTS
// 1.slicing of strings
console.log(str.slice(0,4));

// ques. Display only 200 characters that is mentioned in a tweeter String;
const myTweeter = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo nihil voluptas sapiente nulla? Non consectetur esse at adipisci! Dignissimos dolorum officia possimus, earum dolorem eum, sed in molestiae debitis assumenda laudantium voluptate iste maiores commodi"
const newTweeter = (myTweeter.slice(0,200));
console.log(myTweeter.length);
console.log(newTweeter.length); //here we got the length of 200 characters

// 2.SUBSTRINGS
// the difference is that this cannot accept negative values
// if negative values are given then it usually counts with 0 index
let values = "Sattyam,Shivam,Chauhan";
const newValues = values.substring(8,-3);
console.log(newValues);// will return the string starting with the 0 index till 8;

// 3.REPLACE STRING
// It doesnot change the string
// it replaces the first match
// this is a case sensitive;

let myData = "My name is Sattyam Singh Chauhan Sattyam";
const myNewData = myData.replace("Sattyam","Shivam");
console.log(myNewData);//replaces Sattyam with Shivam.

// 4. Character at - this method used to return the value that we have at the certain index number
console.log(myData.charAt(11));

//OTHER METHODS IN STRINGS
// 1.to upper case
console.log(myData.toLowerCase());
console.log(myData.toUpperCase());

// 2.Converting a string to a array
let txt = "a,b,c,d,e,f,g,h";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));