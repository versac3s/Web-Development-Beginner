//Arrays are of object type in JS

let students = ["aman", 1, "preeti"]; //mixed datatype in array
console.log(students);
students.length;
console.log(students[0][0]); //access string on index 0, and then access 0th index of this string

let newArr = []; //empty array

//Arrays are Mutable i.e changes can be made within the original array only
students[1] = 3;
console.log(students);

//ARRAY METHODS
//Push: add to the end
let cars = ["audi", "bmw", "maruti", "porsche"];
cars.push("toyota");
console.log(cars);

//Unshift: add to the start
cars.unshift("ferrari");
console.log(cars);

//Pop: delete from end and return it
cars.pop();
console.log(cars);
let removed = cars.pop();
console.log(removed);

//Shift: delete from start and returns it
cars.shift();
console.log(cars);

//indexOf method : return index of element
cars.indexOf("bmw");

//Includes method : returns a boolean value to show if value exists or not
console.log(cars.includes("mercedes"));

//Concat Method : merges two arrays
console.log(cars.concat(students)); //add students into cars

//Reverse an Array
console.log(cars.reverse()); //inplaced reversal

//Slice method : copies a portion of an array
cars.slice(2);
cars.slice(1, 3);
cars.slice(-2);

//Splice method : Removes/replaces/add elements in place
//splice(start, deleteCount, item0...itemN)
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(4)); //working like slice
console.log(colors);
//from starting index delete n number of elements
console.log(colors.splice(0, 1));
console.log(colors);
//in colors add black and grey from index 0
console.log(colors.splice(1, 0, "black", "grey"));
console.log(colors);

//Sort Method
//sorting an array in ascending or descending order
console.log(colors.sort());
let num = [99, 54, 21, 78, 100];
//the answer to this would not be as expected because 
//for sorting, the sort method first converts the array into string format
//and then perform sorting. thus only useful when sorting string of character.
console.log(num.sort());

let start = ["january", "july", "march", "august"];
start.splice(0,2,"july","june");
console.log(start);

//Array References 
