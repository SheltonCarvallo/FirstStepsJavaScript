/*
Arrow functions are a special way of writing functions that can be confusing at first. Their use looks like this:
(param1, param2) => body of the function;
Or for no parameters:

() => body of the function;
Or for one parameter (no parentheses are needed here):

param => body of the function;
Or for a multiline function with two parameters:

(param1, param2) => {
  // line 1;
  // any number of lines;
};
 */

/*
function doingStuff(x) {
  console.log(x);
}
To rewrite this as an arrow function, you will have to store it in a variable
or send it in as an argument if you want to be able to use it
*/

let doingArrowStuff = x => console.log(x);
doingArrowStuff("Great!");

let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(5, 3);
//If there are no arguments, you must use the parentheses, like this
let sayHi = () => console.log("hi");

//As a final example, we can combine the arrow function with certain built-in methods.
const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(e => console.log(e));

