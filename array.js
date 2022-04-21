// Collection of multiple data in single variable is called array
// in js we have an array as a class, array are the protype of this class
// var Names= ['sattyam','shivam','Developer','Engineer'];
// console.log(Names);

// 1. Traversal of Array
// Navigation of data in array , search any element , change data and many more 
var Names= ['sattyam','shivam','Developer','Engineer'];
// console.log(Names[3]);     //get element with its index number

// Length of array-- used by the property
// console.log(Names.length);


// 2.For loop to navigate an array
// var Names= ['sattyam','shivam','Developer','Engineer'];

// for (i=0;i<[Names.length];i++){
//     console.log(Names[i])
// }

// After ES6 we have for in and for of loops for array
// 1.for in loop-- this returns the index number
var myProfessions = ['engineer','doctor','architect','defence forces'];

// for(let elements in myProfessions){
//     console.log(elements);
// }

// 2.for of loop-- this returns the values of the array
// for(let elements of myProfessions){
//     console.log(elements)
// }

// 3. for each loop--this returns both index and array
// myProfessions.forEach(function(element,index,array){
//     console.log(element,index,array);
// })


// Array subsections [Searching and filters in array]
// It starts with -1
// console.log(Array.prototype.indexOf('engineer'));
// console.log(Array.prototype.lastIndexof(myProfessions));

// 4.Array subsections CRUD functions of array
// Array.prototype.push()--the push method adds one or more data at the last of the list and return new length of the array

const animals = ['chickens','dogs','parrots'];
// animals.push('elephants');
// console.log(animals);

// Array.prototype.unshift()--this push the data to the starting to the array and returns the new length of the array  
animals.unshift('minamals','mammals');
// console.log(animals);

// Array.prototype.pop()-- removes the last element of and array and returns the new length of an arrray
const myNumbers = [1,3,4,56,7,8,9,0];
// console.log(myNumbers);
// console.log(myNumbers.pop());
// console.log(myNumbers);

// Array.prototype.shift()-- it removes the first element of the array and returns the new length of the array
console.log(myNumbers.shift());

// problem1.add dec at the end of array
// 2.return value of splice method
// 3.update march to March(update)
// 4.delete june from an array
const months = ['Jan','march','April','June','July'];


var arraySlicing=months.slice(1,4)//used to take the values from start to end month.slice(start index, end index)
console.log(arraySlicing);


// Array.splice(innex number/start number,delet Count , what to add new);-- this is used as slice to delete update and insert a number

// const newMonths = months.splice(3,1,"hey");
// console.log(months);
// console.log(newMonths);
// As per the output index number 3 is deleted and replaced with hey

// now here we are putting the same thing in conditions
const indexOfMonths = months.indexOf('April');

if (indexOfMonths != -1){
    const updateMonth= months.splice(indexOfMonths,2);
    console.log(months);
    console.log(updateMonth);
}else{
    console.log('No such data found');
}


// MAP and REDUCE method 

// 1.MAP METHOD
// returns new array containing the results of calling a function on every element of this array
//returns the new array without mutating the original array
// SYNTAX is given as 
// Array.prototype.map();
// const newArray= Array.map(callback function,(currentvalue,[index,[Array]]));

const array = [1,2,3,4,5,67,77];

const newArray = array.map((curElm,index,array) => {
    return `Index number${index} of ${curElm} in the given array ${array}`
});
console.log(newArray);

// ques2. Find the square root df the array;
let arr = [64,49,4,9,81];

const newArr = arr.map((curElm)=>{
    return Math.sqrt(curElm);
})
console.log(newArr);

// ques2.multiply each element by 2 and return only those element which are greater than 10 and then return the sum of returned array?
let arry = [2,3,4,6,8];
// Here we are using array chaining that after return an array we can do filter method with the same array.
// used chaining--map-filter-reduce method at the same problem
const newArr2 = arry.map((curElmnt)=>{
    return curElmnt *2;
}).filter((curElment)=>{
    return curElment>10;
}).reduce((Accumulator,curElement)=>{
    return Accumulator+=curElement;
})
console.log(newArr2);


// 2.REDUCE METHOD
// Flatten an array means to convert the 3d and 2d array into a single dimensional array.
// This method executes to the single output value
// parameters that is used by the reduce methods are 1.Accumulator,2.index,3.value,4.Array

let array1 = [5,4,3]; //if we having a value in string then we add to intialise like we have 7
const sum = array1.reduce((Accumulator,curElement,index,array1)=>{
    return Accumulator+=curElement;
    // return Accumulator*=curElement;
},7);
// 7 is saved in accumulator as a intial value 
console.log(sum);



// Flat method in array that is defining in 2019.
const array5 = [
    ["zone1","zone2"],
    ["zone3","zone4"["zone5","zone6"]]
];
console.log(array5);
console.log(array5.flat()); //gives your array as a list of elements
console.log(array5.flat(2));
console.log(array5.flat(Infinity));//for infinity array under arrays 