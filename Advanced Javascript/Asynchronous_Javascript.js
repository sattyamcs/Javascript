// How JAVASCRIPT WORKS AND ASYNCHRONOUS PROGRAMMING

// Hoisting in javascript
// We have a creation phase and a execution phase 

// Hoisting in javascript is a mechanism where variables and functions declaration are moved on the top of their scope before execute

// For example 
console.log(myName);
var myName;
myName="Sattyam"

// FROM ES6/2015 the hoisting is avoided by using the let keyward is introduced  that is having block spcae
// If we are using let in the same code it will returns to the error of calling variable without defining 



// SCOPE CHAIN AND LEXICAL SCOPING
// Scope chain is lexically defined in js such as the value of PI=3.14
// At the top we have global scope , which is the window object in the browser
// Lexical scoping means , the inner function can get access to their parent function variable but the vice-versa is not true  //

// for example
// let a ="Sattyam  ";  //global scope , the variable at the top can be said as at the gobal scope

// const first =()=>{
//     let b = "how are you ? "

//     const second=()=>{
//         let c ="Hello Everyone"
//         console.log(a+b+c);   //child function got the access of every parent function
//     }
//     second();
//    // console.log(a+b+c);// WWe got an error where it says C is not defined. 
// }
// first();
// // This is called lexical scoping where the child can access the variables and parameter of its parent child.




// // CLOSURE IN JAVASCRIPT
// // closure gives you an access to the outer function scope from an inner function
// // closure are created everytime when a function is created

// // It is same like lexical scoping, as we can access the variable and parameter to its parent child
// const outerFun=(a)=>{
//     let b=10;
//     const innerFun=()=>{
//         let sum=a+b;
//         console.log(`The sum of a and b is ${sum}`)
//     }
//     innerFun();
// }
// outerFun(5);


//Now for the closure defining by taking the same example
const outerFun=(a)=>{
    let b=10;
    const innerFun=()=>{
        let sum=a+b;
        console.log(`The sum of a and b is ${sum}`)
    }
     return innerFun;
}
let checkClouser = outerFun(5);
console.dir(checkClouser);              //console.dir returns the detailed information about the data
//check the code in console of the window you will get the deatailed information about the clousre as it stores the values of a and b that is of outer function 

 