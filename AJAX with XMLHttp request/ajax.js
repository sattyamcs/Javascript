// AJAX stands for asynchronus javascript snd XML
// AJAX helps i fetching data without interfcaing with the exsisting page
// No page reload/refresh
// Modern website using JSON or XML for data transfer


console.log("Hello Sattyam");

const prmiBtn = document.getElementById('primBtn');
prmiBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log("Primary button clicked")

    // Initialise an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET','Sattyam.txt',true)   //Non-bloking//this true is for asynchorous ,not to blok other tasks

    // What to do on progress
    xhr.onprogress= function(){
        console.log("On Progressl")
    }

    // what to do when response is ready
    xhr.onload=function(){
        if (this.status ===200){
        console.log(this.responseText)
    }else{
        console.log('Some error Found');
    }
};

    xhr.send();

}


// Now Here wew are fetching Data from Api

const sec=document.getElementById('Sec');
sec.addEventListener('click',secData);

function secData(){
    console.log("You have clicked the second button")

    // Initialise an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET','https://gorest.co.in/public/v1/posts',true)   //Non-bloking//this true is for asynchorous ,not to blok other tasks

    

    // what to do when response is ready
    xhr.onload=function(){
        if (this.status ===200){
            let obj=JSON.parse (this.responseText);
        console.log(obj)
        let lists=document.getElementById('lists');
        str=""
        for (key in obj){
            str==`<li>${obj[key].object.body}</li>`
        }
        lists.innerHTML=str;
    }else{
        console.log('Some error Found');
    }
};

    xhr.send();

}