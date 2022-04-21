// Promises are the JS object that represents the completion or failure of an asynchronus function and resulting its value. Promises are used to handel asynchronous operations in js

// let promise = new Promise((resolve,rejected)=>{
//     //Your code
// })

// Practical Promises 
//Executor
//Promise Produce
let Prom1 = new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        let students = [1,2,3,4,5,6,7,8]
       resolve(students);
       rejected("There is an error found")
    },2000)
})

//Promise consume.
//then is for console the fetched data and catch is for the error that catched 

Prom1.then((resolve_data)=>{
    console.log(resolve_data)
}).catch((error_data)=>{
    console.log(error_data)
})
