//Call Method
const person = {
    fullName: function(city, country) {
     console.log(`My name is ${this.firstName} ${this.lastName} I am from ${city}, ${country}`);
    }
  }
  
  const person1 = {
    firstName:"Sattyam",
    lastName: "Chauhan"
  }
  //Call method takes arguments with single comma 
  person.fullName.call(person1, "Farrukhabad", "India");

//   Call and apply both are same but only difference is aplly takes arguments in array 
person.fullName.apply(person1,[ "Farrukhabad", "India"]);




//Fetching data from the web
// fetch return promises then we use async await or .then and .catch method to fetch data
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
