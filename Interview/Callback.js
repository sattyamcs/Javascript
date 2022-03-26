// Callbacks is the function that is to be executed after another function completes its execution
// This is normal function as js is a single thereaded language it executes its code line by line 

function first(){
    console.log(1)
}

function second(){
    console.log(2)
}
// As per the expectations function first execute first then second 
// first();
// second();

// Now what if the first conatin some set of code that cannot be executed instantly, so that function is called again after a given time period 

function one(){
    setTimeout(()=>{
        console.log("I am delayed")
    },3000)
}
function two(){
    console.log("I am two")
}
one(); //This will be called after a given time period
two();
