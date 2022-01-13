// Closure is the combination of functions bundled together with references to its surrounding state(its lexical environment)
// Closure give you access to the outer funtion scope from inner function

function outer(b){
    // var a = 19; //outer function and it varies with the surrounding means it can be declared below and easily accessed
    function inner(){
        console.log(a , b);// inner function having access of var values from its inner function
    } return inner();
}var a=29;// it can also be accessed here because clousre accessed the surrounding environment of a function


outer("HelloWorld");

