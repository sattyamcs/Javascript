// 1.Constructor-- Whenever we creates a object of any class they are automatically called
//  constructor(){
//     console.log("Hello i am constructor");
// }


// 2.Prototype-- These are defined by your giving name and called when we call
// Message(){
//     console.log("I am a prototype and defined according to you")
// }


// 3.Static-- This is called by giving the name static . This is different from these two because it can be called without creating the object
// static name(){
//     console.log("Hello")
// }

class student{
    constructor(profession,age){//Taking a param that is passed through argument in object
        let name;
        this.myProfession=profession; // Here we assign the value of parameter in a var 
        this.myAge=age; 
        console.log("I am constructor , I am called whenever a object is created")
    }
    Hello(){//This is prototype method
        console.log(`My name is ${this.name}`)// var defines under class can be accessed with this 
        console.log(`My Profession  is ${this.myProfession} and my age is ${this.myAge}`)//
    }
    static staticMethod(){
        console.log("Here we defining static method")
    }
}
let a = new student("Engineer",25);// Here we passed argument
let b = new student();
a.name="Sattyam" // Here we defining the value of the method we called after creating object
a.Hello();  //Here we called our method

student.staticMethod();// static method is used to call like this (className.staticName) without creating any object