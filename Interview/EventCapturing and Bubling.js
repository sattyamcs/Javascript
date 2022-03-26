// Event Bubling , Capturing And Event Propagation

// Event Bubbling >>Propagation moves from child to parent

const div = document.querySelector("div");
const btn = document.querySelector("button");

div.addEventListener("click",()=>{
    console.log("clicked on div")
})
// When we makes it true it changes propagation to >>Capturing that is parent to child 


// If we want to make to stop the propagation then we mention it to stop the propagation , That allows you to stop the propagation and performs only where the event is listend
btn.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("clicked on Button")
},true)
btn.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("clicked on Button1")
},true)
// We can use stopimmediatePropagation to stop propagation. like for button we have 2 event listeners and we dont want more to propagate


