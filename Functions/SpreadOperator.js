//he spread operator is a special operator. It consists of three dots used before a referenced expression or string,
// and it spreads out the arguments or elements of an array.
// This might sound very complicated, so let's look at a simple example:
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];

console.log(message);

//The spread operator spreads the array to individual elements in the new array.
//It can also be used to send multiple arguments to a function

function addTwoNumbers(x, y) {
    console.log(x + y);
}

let arr = [5, 9];
addTwoNumbers(...arr);

//This operator avoids having to copy a long array or string into a function, which saves time and reduces code complexity.

function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
}
let arr2 = [5, 9];
let arr3 = [6, 7];
addFourNumbers(...arr2, ...arr3);