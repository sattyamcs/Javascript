// ARRAY DESTRUCTURING

// Destructuring means that extracting of data from Array, objects and map.

// const mybioData = ["Sattyam","Chauhan",25];
// Now for accesing the array we were calling with different index numbers
// let myName= mybioData[0]
// let mySername= mybioData[1]
// let myAge= mybioData[2]
// console.log(myName);

// Array destructuring is here defined as we are calling the array with the different variables

// let[myName,mySerName,myAge, myDegree="Engineering"]=mybioData; // this is array destructuring and adding a new element 
// console.log(myDegree);


// OBJECT DESTRUCTURING
const mybioData={
    fName:"Sattyam",
    fLast:"Chauhan",
    fAge:24
}
console.log(mybioData.fName);

// Here destructuring object as follows
let{fName,fLast,fAge}=mybioData;
console.log(fAge);