// The Set object lets you store unique values of any type, whether primitive values or object references.
// It contains only unique values
// Object constructer

// Set is also used to remove duplicates .
let myArray=[1,2,3,4,5,6]

let obj=new Set(myArray);
obj.add(7)
obj.delete(3);
console.log(obj);

let obj1={name:"Sattyam"}
obj.add(obj1) // also add an object in a set
console.log(obj)

for(element in obj){
    console.log(element)
}
obj.forEach((elem)=>{
    console.log(elem)
})

obj.clear();//clears the set

obj.has(7); // used to check wheather element is present or not


//WEAK SET
// It only stores objects
// It cannot be itrated with the for and forEach loops type

let weakSet= new WeakSet();

// console.log(weakSet);
var ob1={name:"Aman"};
var ob2={name:"Pawan"};

weakSet.add(ob1)
weakSet.add(ob2)
console.log(weakSet);
