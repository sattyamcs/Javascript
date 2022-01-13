// Map key->values

let myMap=new Map([["a1","Sattyam"],["a2","Shivam"]])
console.log(myMap);
//  some prototypes method that are used to access or change in map

myMap.set("a3","Rahul"); //adds value to map
myMap.delete("a2")

console.log(myMap.get("a3")); // iterate the value of a3
console.log(myMap);


//Iterating the values with for and foreach
for([keys,values] of myMap){
    console.log(`keys${keys} : values${values}`)
}

myMap.forEach((key,value)=>{
    console.log(key,value)
})


// Weak map
// Same as the weak set it only stores objects
// we cannot iterate data with the for and forEach loop here also

let weakMap = new WeakMap();

var obj= {name:"Sattyam"}
var obj2={};

weakMap.set(obj,"shivam")
weakMap.set(obj2,"Rajat")

console.log(weakMap);





