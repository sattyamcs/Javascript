// FUNCTION CURRYING 

// function currying is a technique of evaluating function with multiple arguments , into a sequence of function with single argument

// In other words , a function taking an argument and return a new function that takes arguments as third one and so on

// Find the sum of sum(5)(3)(8);

function sum(num1){
        // console.log(num1)
        return function(num2){
            // console.log(num2);
            return function(num3){
                console.log(num1+num2+num3);
            }
        }
}

// Or this can be written in one line code 

const sum =(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);


sum(5)(3)(8);