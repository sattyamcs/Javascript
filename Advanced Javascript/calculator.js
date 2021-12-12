//HIGH ORDER FUNCTION AND CALL BACK FUNCTION

// A high oreder function is a function that takes another function as a argument and return another function to the caller
//Call-back function is a function that is passed to another function as a argument.

const  add =(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const mult=(a,b)=>{
    return a*b;
}

//Here calculator is a high oreder function and the operator is a call back function as its is calling different function.
const calculator =(num1,num2,operator)=>{          
    return operator(num1,num2);
}
console.log(calculator(5,4,add));// Here we are passing call back function as parameters
