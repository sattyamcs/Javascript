// 1. Assignment operator #this means to assign a value to the left operand 
x=6;//x is the opernd and assigned with the value of 6

// 2.Arithmetic operator #this takes numerical values as as their operand and returns singal opernd value  
console.log(4+4);
console.log(4-4);
console.log(4*4);
console.log(4/4);

// Increment and Decrement Operators
// postfix x++
// First used the original value then the variable is incremented


// Prefix operator ++x
// The increment operator increments and returns the value after incrementing 
var num = 15;
var newNum = ++num;
console.group(num);
console.log(newNum);

// Comparison opeerators
// it usually compares the operands and returns the value based on the comparison is true  
var a = 30;
var b = 40;
// console.log(a==b);
// console.log(a=!b);
// console.log(a>b);
// console.log(a>=b);

// Logical Operator 
// Logical operator typically used with boolean , They used to mainly returns boolean values  
// 1. && Operator // That manily requires more thsan two expression to excute and returns value in the boolean values 

console.log(a>b && b>0);

// 2.Logcal OR Operator (given as ||)
// Returns true if it gets any of the expressio as true otherwise it return false 
console.log((a>b)||(b<0));

// 3.Logical NOT (!)
// Returns the vice versa as true returns to false and false returns to true
console.log(! (true)); //returns the false value

// String Concatination Operator 
// It will gives you the string out of two strings by concatinating them 
console.log("Sattyam " + "Chauhan");


// Difference between == and ===
// == used to check value only whereas === used to check values and datatype also
var s= 5;
var t="5";
console.log(typeof(s));
console.log(typeof(t));
console.log(s==t);   //returns true 
console.log(s===t);  //returns false 