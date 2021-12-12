console.log("Hey here we are going to learn async await");

// asyn always returns promise
// . then is called when the promise is resolved
// await is used for the function to wait till it gets prepared to return


// async is always giving before the function , in arrow function it is given just after the =
const btn=document.querySelector('.btn');
const phrase=document.querySelector('.phrase');

 async function Sattyam(){
    console.log("Calling Sattyam")
    const response= await fetch('https://type.fit/api/quotes');
    console.log("Before Response");
    const user = await response.json();
    console.log("user resolved");
    // phrase.innerHTML=user.text;
    return user;
 }


// var a = Sattyam();
console.log("Before calling Sattyam");
console.log(Sattyam());
Sattyam().then(data=>console.log(data));
console.log("After calling Sattyam")

btn.addEventListener('click',Sattyam);

