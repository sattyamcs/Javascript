// Functions -- a function is a block of code that is used to perform any task.
// syntax 

// function function name(){
    //statements
// }


// Calling function -- defining function does not executes , you need to call a function to execute

//defining a functions 
// function sum(){
//     var a = 30;
//     var b = 20;
//     total=(a + b);
//     console.log(total)
// }

//Calling a function
// sum();

//Difference b/w function parameter and function arguments
// function parameter are the values that are given during defing function, whereas function arguments 
// are the real values that can be passed to the functions.

// function sum(a,b){
//     total=(a+b);
//     console.log(total);
// }

// sum(20,10);
// sum(2);

// why do we need functions
// functions is used because define it once and can we used many times , wherever required 
// in the code, different argument can be passed for different results

//function expression-- it simply means create an function and put it into variable 

// var funExp = sum(10,80);
// funExp;

// Return Keyword
function sum(a,b){
    return(a+b);
}
var funExp = sum(90,10);
console.log('the sum of numbers is'+ funExp);