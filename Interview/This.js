// This keyword refers to the object it belongs to.
// It is having different values and depends upon where it is being used.
// Alone this refers to the global object
// In strict mode it will  be undefined


console.log(this); //Here it represents a window object or we can say as a global object

// Inside a regular function it again return the same window or global object
sum=function sum(){
   var add = 2+2;
   console.log(`sum of two numbers${add}`)
   console.log(this)
}
sum();

// But inside a object it refers to the current object

const sattyam={
    name:"Sattyam",
    class:"general",
    sum:function(){
        var add = 2+2;
        console.log(add)
        console.log(this.name)
        console.log(this)// here it represents the whole object 
    }
}
// Calling a object
sattyam.sum();