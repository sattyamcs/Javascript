const array = [1,2,3,4,5,6,7,8,9,0];

// #MAP method== It applies a given function on each element of an array and returns a new array

const mapArray = array.map((element)=>{
    return element*2;
})
console.log(mapArray);


//FILTER method == It filters all the elements of array that return false condition of the applied function and returns the true conditions

const filterArray = array.filter((elem)=>{
    return elem%2;// for odds numbers
    // return elem%2==0;// for even numbers
})
console.log(filterArray);
// Or we can say write like this 
const anotherArray = array.filter((elem)=>elem>=2);
console.log(anotherArray);



// SORTED method in array,, converts to the increasing order
const sorted = array.sort();
console.log(sorted);


const reverse = array.reverse();
console.log(reverse);


// REDUCE METHOD==It reduces the array down to just one value like the examples are sum , suub ,mult;
// Normally we use loop for sum 
let sum=0;
for(let i=0;i<array.length;i++){
    sum=sum+i
}
console.log(sum)

// Now this is done with the reduce methos as follows
const sumAt = array.reduce((negOf,index)=>{
    return negOf-=index
},0); // 0 is the initial value as it is taken in upper as sum =0;
console.log(sumAt);











// ForEach==this will helps you to iterate the both index and the aray
// use to access every element of an array
array.forEach(function(element,index){
    console.log(element);
})


