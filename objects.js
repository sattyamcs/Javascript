// Object literals are simply the key value pairs data structures
// storing variables and functions together in a conatiner is object , Example; a schoool bag;

// 1st Way to create an object 
// let bioData = {
//     myName: "Sattyam", // these all are literals 
//     myAge:24,
//     mySchool: "Army Public School",
//     //now functions be defined like this in a object
//     myResidence:function(){
//         console.log("New Fauji Colony , Farrukhabad")
//     }
// }
//Now here we are going to call our object literals 
// console.log(bioData.myName);
// bioData.myResidence();



// 2nd way to write object where no need to write function as per the ES6;
// let bioData = {
//     myName: "Sattyam", // these all are literals 
//     myAge:24,
//     mySchool: "Army Public School",
//     //now functions be defined like this in a object
//     myResidence(){
//         console.log(`My name is ${bioData.myName} and i completed schooling from ${bioData.mySchool}`)
//     }
// }
// bioData.myResidence();



// What if i want to create objects as a value of a object
const myFriends={
    firstFriend:"Paras Chaturvedi",
    secondFriend:"Shubham Rathore ",
    thirdFriend:"Anshu Dubey",
    //Defining objects under object
    closeFriends:{
        first:"Manthua Dude",
        second:"HAdella"
    }
}

console.log(myFriends.closeFriends.second); // Calling that objects 




// THIS object
// The defination of this object is that it contains the current context
// The this object contains different values depends upon its scope where it is placed

// for example1
console.log(this); //it returns to the current context that is its window object.

// for example2
// function myName(){
//     console.log(this)
// }
// myName(); // it again return the windows as its current context.

// for example3
var myNames="Sattyam";
function mySerName(){
    console.log(this.myNames) //it gives the name sattyam as because it is defined in global object var
}
mySerName();

// for example4// This object under a object
// const obj = {
//     myAge:26,
//     myProfession(){
//         console.log(this.myAge) // current context of this is the current object
//     }
// }
// obj.myProfession();


// Example5
// THIS object will not work with the arrow function
const obj={
    myAge:23,
    myProfession:()=>{
        console.log(this.myAge)
    }
}
obj.myProfession();//it will return undefined because THIS object will not works with the fatt arrow function



// Ques . Find what it returns
const bioData={
    myName:{
        realNamee:"Sattyam Thakur",
        realProfession:"Engineer"
    },
    myAge:24,
    getData(){
        console.log(`My name is ${this.myName.realNamee} and my profession is ${this.myName.realProfession}`)
    } 
}
bioData.getData();// this will return the ouput that mentioned here