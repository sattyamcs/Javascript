// Hoisting is a mechanism where variable and functions declaration is moved to top of their scope before executing

// The default behaviour of moving all the declaration to top before execution is called hoisting

// A variable can be declared after it has been used 

function getName(){
    console.log("func1")
}

var a = 5;
getName();
console.log(a);

// Simply return the value as the function and the a both as the global execution context get this code execute from top to bottom it returns the same values provided 

// But now if we took the console and invoke function to the top
funcName2();
console.log(c)
var c=6;
 function funcName2(){
     console.log("func2")
 }

//  Here as the global execution context executes the code from top it returns the functon as well but the value of a = undefined becuse the memory located to a is undefined because it is declared with values later, if we removes the declaration of a it gives error.

console.log(b)
var b=3;