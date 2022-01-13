// Prototpe is a mechanism by which javascript objects inherit features from one to another

// Objects in JS can be defined in various ways
// const obj = new Object({
//     name:"Sattyam"
// })
// const obj = new Object();
const obj={
    name:"Sattyam",
    getName:function(){
        return this.name
    },
    getRoll:function(){
        return this.roll // Here this will access the roll in another object but first it searched in its own object.
    }
}
console.log(obj);

const obj2={
    roll:2,
    __proto__:obj               // Here we access obj as a prototype in obj2
}
console.log(obj2.getRoll());

const obj3={
    class:"Engineering",
    __proto__:obj2  // Total inheritance here we access all the properties and methods of obj1 and obj2 
}
console.log(obj3)// will returns object of obj2 and obj1 also, we can access all the method and properties of all the objects from here
console.log(obj3.getRoll())
console.log(obj3.getName())


const array1=["SattyamChauhan"]
console.log(array1);

// Here we can access all the predefined prototype of array objects and functions like this
const object = new Object();
console.log(object);

const array= new Array(); 
console.log(array);


// polyphill to make your own prototype
Array.prototype.show=function(){
    return this
}
const cities=["Delhi"]
console.log(cities.show())

