//LOOPS - used to iterate a piece of code
for(let i = 1; i<=10; i++){
    console.log(i);
}

//print all odd numbers
for(let i=1; i<=15; i++){
    if(i%2!=0){
        console.log(i);
    }
}
for(let i=15; i>=1; i--){
    if(i%2!=0){
        console.log(i);
    }
}
//Writing a table for a given number
let n = prompt("Enter number: ");
n = parseInt(n); //converting the string from prompt into int
for(let i=n; i<=n*10; i++){
    if(i%n == 0){
        console.log(i);
    }
}

//Nested Loop
for(let i = 1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

//While Loop
//print the sum of digits of number
let number = 23456;
let sum = 0;
// Create a copy of the original number to manipulate in the loop
let copy = number;
// Start a while loop that runs as long as 'copy' is greater than 0
while(copy > 0) {
    // Get the last digit of 'copy' using the modulo operator
    digit = copy % 10;
    // Add the extracted digit to 'sum'
    sum += digit;
    // Remove the last digit from 'copy' by dividing it by 10 and taking the floor of the result
    copy = Math.floor(copy / 10);
}

//Loops with Arrays
let fruits=["apple", "banana", "cherry", "orange"];
for(let i = 0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

//Nested Loops with Arrays
let nums = [[1,2,3,4,5], [11,12,13,14,15], [21,22,23,24,25]];
for(let i =0; i<nums.length; i++){
    console.log(i, nums[i]);
    for(let j =0; j<nums[i].length; j++){
        console.log(j, nums[i][j]); //imp
    }
}

//For Of Loop- used in collection of strings, nums etc
for(fruit of fruits){
    console.log(fruit);
}
for(num of nums){
    console.log(nums);
    for(n of num){
        console.log(n, num);
    }
}

