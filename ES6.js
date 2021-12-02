//1. Let const and var
// var=Function scope,      let and const=block scope;

function bioData(){
    var firstName="Sattyam"
    console.log(firstName);

    if(true){
       const lastName = "Chauhan";  //here const having scope that is under these curlybraces and cannot be accessed outside the box
        console.log('inner'+ lastName)
        console.log('inner'+ firstName)
    }
    console.log('innerouter'+lastName)
}

// bioData();

// 2.Template literals or template strings
// As we recently created a for loops to print table now here we use template
// strings or literals that are backticks to print a table

for(var num = 1; num <= 10; num++){
    var tableOf=12;
    console.log(`${tableOf}*${num}= ${tableOf*num}`)
}


//3.Fat Arrow function

const sum = () =>`The sum of two numbers is ${(a=2)+(b=5)}`;

console.log(sum());
