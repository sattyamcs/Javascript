// SYNCHRONUS AND ASYNCHRONUS JAVASCRIPT

// Function running in parallel with other function is called ASYNCHRONUS
// whereas the SYNCHRONUS means the one function is running at a time 


// set setTimeout()is the best example for asynchronus 
// Here in the example func 1 is called and due to settimeout the func two takes time but this will not stop in calling of function 1. Both function is working at the same time this is called asynchronus.
// const func2 =()=>{
//     setTimeout(()=>{
//         console.log("Function 2 is called ")
//     },2000)
// }

// const func1=()=>{
//     console.log("Function 1 is called ")
//     func2();
//     console.log("Func 1 is called again")
// }
// func1();


// Now here in synchronus one function works at the same time. Here in example function 2 is called in between the function1.
const func2=()=>{
    console.log("Function 2 is called")
}
const func1=()=>{
    console.log("Function 1 is called ")
    func2();
    console.log("Function 2 is called again")
}
func1();
