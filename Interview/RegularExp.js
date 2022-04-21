console.log("Testing Console")

// Regular Expression is the pattern of characters

// The pattern is used to do pattern-matching "search-and-replace" functions on text.
//                            Syntax == /pattern/modifier(s);



// let reg = /sattyam/                  //This is regular exp lietrals written btwn slashes
 reg = /Sattyam/g                  //global modifiers
//  reg = /Sattyam/i                 //Case sensitive
//  reg = /Sattyam/m               //Multiple matching

console.log(reg)


let str = "Sattyam is a good devleoper and he is the Sattyam only"


// Function to match expressions OR Regular expression object methods

// 1. exec()==This function returns an array for match or null or no match 

console.log(reg.exec(str));
console.log(reg.exec(str));

// 2.test()== This mainly return the true and flase if the the reg available in string 
console.log(reg.test(str))

// 3.match() == retruns array of result or null
// writting its exp is quite different like str.match(reg)
console.log(str.match(reg))

// 4.search()== returns index number of first match else -1
console.log(str.search(reg))

// 5.replace()== returns the replaced string with all the replacements 
console.log(str.replace(reg,"Shubham"))