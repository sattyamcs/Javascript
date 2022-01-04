// SPLICE METHOD OF ARRAY
const months = ['Jan','march','April','June','July'];

var arraySlicing=months.slice(1,4)//used to take the values from start to end month.slice(start index, end index)
console.log(arraySlicing);

// Splice method is used to delete or add some values inside the array/ between the array returns existing array
// OR we can say saplice is used to insert values between array
// splice(index,how many/delete,new value)

// const newMonths = months.splice(3,2,"hey");
// console.log(months);
// console.log(newMonths);

const indexOfMonths = months.indexOf('April');
if (indexOfMonths != -1){
    const updateMonth= months.splice(indexOfMonths,2,"Sattyam","Shivam");
    console.log(months);
    console.log(updateMonth);
}else{
    console.log('No such data found');
}