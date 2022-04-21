// Call Apply and Bind functons

// With the call() method, you can write a method that can be used on different objects.

let getDetails={
    name:"Sattyam",
    class:"Engineering",
}
//Here we define a method that will be used in different object
let subName=function(state,country){
    console.log(`${this.name} from ${state} in ${country}`)// in objects this is use to access method and properties 
}

subName.call(getDetails,"Delhi","India");// Call the function whrever in object you need to place

let getDetails2={
    name:"Sameer",
    class:"Architect",
}

// Function borrowing Or call function()
subName.call(getDetails2,"Delhi","India");// Call the function whrever in object you need to place

// Apply function
// Only difference between call and apply is Apply will give the arguments in the array formats 
subName.apply(getDetails2,["kanpur","UttarPradesh"])

// Bind Function()
// This function says that store this in a variable and use whenever required
let bindFunc=subName.bind(getDetails,"Mainpuri","UttarPradesh")
bindFunc();
