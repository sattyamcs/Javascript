// Promise is a object that represents the eventual completion (or failure) of an asynchronus operation and its resulting value. It is having two properties state and result.

// A js promise can be 1.pending  2.fullfilled   3.rejected

const one =()=>{
    return "I am one";
}

// Here we are making a promise 
const two=()=>{
    return new Promise ((resolve,rejected)=>{
        setTimeout(()=>{
            resolve("I am two")
        },2000), rejected=(err)=>{
                console.log(err);
        }
    })
};

const three=()=>{
    return "I am three";
}


//async makes a function return a promise

const callMe= async ()=>{
    let valueOne=one();
    console.log(valueOne);

    //await makes a function wait for a  promise
    let valueTwo= await two();
    console.log(valueTwo)

    let valueThree=three();
    console.log(valueThree);
}

callMe();