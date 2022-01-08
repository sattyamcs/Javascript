// Rest and Spread Operator

// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
// Rest Example
function addNumber(a,b,c,...rest){
    console.log(rest)
    return a+b+c;
}

let sum =addNumber(2,3,4,5,6,7);
console.log(sum);

// Spread Example
let names=["Sattyam","Shivam","Sundaram"];
let moreName=[...names,"Rahul","Kallu"];   //This is spread operator
console.log(names);
console.log(moreName);