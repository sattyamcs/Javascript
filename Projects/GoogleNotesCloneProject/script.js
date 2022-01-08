const addButton = document.getElementById('add');

const updateLSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');//query selector all is becaus here we are going take reference of different nodes.
    console.log(textAreaData)// returns the node list means how many boxses are there
    const notes=[];// empty array created for storing data
    textAreaData.forEach((note)=>{
        return notes.push(note.value);  //psuh is used to store values to the notes array
    })
    console.log(notes)// Finally our data is saved to the array

    // Now form here we are going to save this data to local Storage, get and set method is used to store and get data from local storage
    localStorage.setItem('notes',JSON.stringify(notes));// Here data stored in local storage
}

const addNewnote=(text = '')=>{
// Here we are giving this text as a parameter because it is been used in the main idv and text area for toggle the written part and hidden part 

    // Now here we are going to add that div part here by using js
    const note = document.createElement('div')//used to create elements
    note.classList.add('note') //used to add class to div

    const htmlData=` 
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "":"hidden"}"></div>
    <textarea class="${text? "hidden":" "}"></textarea> `;

    //when the main div text is present then we write and when the text is not present we are not able to write.As we used ternary operator for this.
    // Data inside Div can be written under string literals

    note.insertAdjacentHTML("afterbegin",htmlData); //This is used to insert data between the div.
    // console.log(note);

    // Now getting the refrences for edit delete and more 
    //Here we use note instead of document because we are getting element from note
    const deleteBtn=note.querySelector('.delete');
    const editBtn=note.querySelector('.edit');
    const mainDiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');

    deleteBtn.addEventListener('click',()=>{
        note.remove();
        updateLSData(); // called to delete data from the local storage
    })

//Toggle using edit button
    textArea.value=text;
    mainDiv.innerHTML=text;

        editBtn.addEventListener('click',()=>{
            mainDiv.classList.toggle('hidden')
            textArea.classList.toggle('hidden')
        })

        // Now the change in textarea, means after writting some text 
        // Change event is used after the change is done 
        textArea.addEventListener('change',(event)=>{
            const value=event.target.value;
            // console.log(value)
            mainDiv.innerHTML=value;// Now this return to the main div in the box maens value saved to the box
            //Now after this we have to store data to the local storage
            updateLSData();  //function called to store value to local storage and function is defined at upper
        })



    // Now append this div to the body by using the method appendChild();
    document.body.appendChild(note);
    // it appends a node as a last child of a node

}

// Getting data from local storage
const getData=JSON.parse (localStorage.getItem('notes'));
if (getData){getData.forEach((note)=>addNewnote(note))}

addButton.addEventListener('click',()=>addNewnote());


