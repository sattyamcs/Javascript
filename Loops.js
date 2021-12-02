// 1.If else Statements
// if (condition){
// Statement
// }else{
// Statement
// };

var tom = 'raining';

if(tom == 'raining'){
    console.log("All of you needs to wear Raincoat")
}else{
    console.log("No needs to wear Raincot")
};


// Write a program that works or weather a given year is a leap year or not?

var year = 2020;

if (year % 4 === 0 ){
    if(year % 100 ===0){
        if(year % 400===0){
            console.log("The year is a leap year")
        }else{
            console.log("The year is not a leap year")
        }

    }else{
        console.log("The year is a leap year")
    }

}else{
    console.log("This is not a leap Year")
}


// 5Falsy values 0,"",null,undefined,NaN these 5 valsues always run the else part wherever applied to the statement
if (score=undefined){
    console.log("We loose the game ")
}else{
    console.log("We won the game")
}

// 2.Conditional (Ternay Operator)
// this is the only operator in js that takes 3 operands
// variable = (Condition) ? value1: value2;

var age = 17;
console.log((age>=19) ? "You can vote" : "You cannot vote");


// 3.Switch Statements
// Evaluates an expression that have a matching with the conditions and executes with the associated case
// We have to use break statements to get the data  of particular individuals

var area = "rectangle";
var PI = 3.14, l=5, b=5, r=3;

switch(area){
    case "rectangle":
        console.log("Area for reactangle " + (l*b));
        break;

    case "circle":
        console.log("Area of circle " + (PI *  r ** 2));
        break;

    case "triangle":
        console.log("Area of triangle "+ ((l*b)/2));
        break;

    default:
        console.log("Please enter a valid number")
}

// 4.While Loop
// This statement create a loop that executes a specified statement as long as the condition get false 
// it executes till the condition get false 

var num=0;

while(num <= 10){
    console.log(num);
    num++;
}

// 5.do-while loop
// in this the loops implements first then condition is checked 

var num = 0;

do{
    console.log(num);
    num++;
}while(num<=10);

// 6. For Loop
//this is mostly used loop that is works like while loop, this will be the body for loop
// for(initializer; condition; iteration){

// }
for (var num=0; num<=10;num++){
    console.log(num)
}

// javascript program to print a table of the given number 

for(var num=1; num<=10; num ++){
    var tableOf = 9;
    console.log(tableOf + "*" + num + "=" + tableOf*num);
}


