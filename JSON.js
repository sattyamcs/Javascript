// Javascript object notation
// JSON is the text format for storing and transporting data
// JSON is self describing easy to undersatnd


// 1. JSON.stringify()-- Turns a javascript object into a JSON Text,stores that text into string.

var my_object = {key_1:"Sattyam",key_2:"Singh",key_3:"Chauhan"};
var object_as_string= JSON.stringify(my_object);

console.log(object_as_string); //object changes into JSON

console.log(typeof(object_as_string));


// 2.JSON.parse  //turns a string of JSON text into javascript object.

var object_as_string_as_object = JSON.parse(object_as_string);
console.log(object_as_string_as_object);
console.log(typeof(object_as_string_as_object));

