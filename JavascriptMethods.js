//STRING METHODS
// trim()- used to trim or remove the whitespaces from both ends of
//the string and returns a new string
let msg = "    hello   world  ";
msg.trim();
let password = prompt("Enter password: ");
console.log(password.trim());

//Upper and Lower case
let str = "This is the new phone";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//String Methods with arguments
//indexOf- returns the first occurence of some value in string
let a = "I love coding";
console.log(a.indexOf("love"));
console.log(a.indexOf("J"));

//Method chaining
let newMsg = "  hello ";
let newMsg1 = newMsg.trim().toUpperCase();
console.log(newMsg1);

//Slice - Returns a part of the original string as a new string
let str1 = "HelloWorld";
console.log(str1.slice(5)); //end index is assumed to be string's length
console.log(str1.slice(1, 4)); //start and end index are given as args
console.log(str1.slice(-2)); //string length-2 = 10-2 = 8

//Replace Method - Searches first occurence of a value in the string and returns 
//a new string with value replaced
console.log(a.replace("love", "do"));

//Repeat methods - repeats the value given number of times.
console.log(a.repeat(5));


