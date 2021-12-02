// Date objects contains a number that represents milliseconds since 1 january 1970
// There are 4 ways to create date objects
// 1.new Date();
// 2.new Date(year,month,day,hours,minutes,seconds,milliseconds);
// 3.new Date(milliseconds);
// 4.new Date (date strings);

// 1.new Date();
// Date objects can be created with the new Date constructor as given below
// let currDate = new Date();
// console.log(currDate);

// console.log((new Date().toLocaleString()));
// console.log(new Date.toString());
// console.log(Date.now())


// 2.new Date(year,month,day,hour,minute,second,millisecond);
// month satarts with 0 and goes till 11.
// new Date(2021,11,19,16,47,40,40);
// console.log(new Date);


// METHODS TO GET DATE
let curDate = new Date();
console.log(curDate.toLocaleDateString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDay());
console.log(curDate.getTime());

// METHOD TO SET THE DATE
console.log(curDate.setFullYear(2021,10,5));
console.log(curDate.setMonth(10));
console.log(curDate.setDate(5));
console.log(curDate.setHours(13));


// All methods are same for the time also

let curTime = new Date;
console.log(curTime.toString()); //returns the proper IST time.

// METHODS TO GET THE TIME
console.log(currTime.toLocaleDateString());
console.log(curTime.getFullYear());
console.log(curTime.getMonth());
console.log(curTime.getDay());
console.log(curTime.getTime());