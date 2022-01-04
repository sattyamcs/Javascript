// Variables declares with "var" is having functional scope 
// Variables declares with "let and const " is having bloked scope

// var name="Sattyam";
// name="Chauhan";
// console.log(name) // shows Chauhan

// let name="Sattyam";
// name="Chauhan";
// console.log(name) //  also shows Chauhan

// const name="Sattyam";
// name="Chauhan";
// console.log(name) // This will gaves you a Typeerror

// function diffJs(param){    //this is whole function scope
//     if(param){             // Here if is a block scope
//         var name="Sattyam"  
//         var lname="Chauhan"
//         console.log(`My name is ${name} ${lname}`);
//     }
//     console.log(`My name is ${name} ${lname} Again`)
// }

diffJs(true);


function diffJs(param){    //diffJs is whole function scope
    if(param){             // Here if block is a block scope
        let  name="Sattyam"  
        const lname="Chauhan"
        console.log(`My name is ${name} ${lname}`);
    }
    console.log(`My name is ${name} ${lname} Again`)
    //This throws an error like name is not difined because let and const is having blok scopes
}
diffJs(true);


// var can be accessed in the whole function anywhere
// let and const can be accesed to the particular block only