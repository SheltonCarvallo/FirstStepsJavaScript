//Here is an example of passing a function as an argument to another function:

let functionVariable = function () {
    console.log("Not so secret though.");
};

function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log("Inside doFlexibleStuffFunction.");
}
//If we call this new function with our previously made anonymous function, functionVariable, like this:
doFlexibleStuff(functionVariable);

let anotherFunctionVariable = function() {
    console.log("Another anonymous function implementation.");
}
doFlexibleStuff(anotherFunctionVariable);

//It probably looks rather lame in the examples you have seen so far.
//Once we get to asynchronous functions later on, this concept is going to be of great help

//To still satisfy your need for a more concrete example, we will give you one

// setTimeout() function. It is a very special function
// that is executing a certain function after a specified amount of time that it will wait first.
let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
};
setTimeout(youGotThis, 3000);
setInterval(youGotThis, 2000) //executing the specified function once, it will keep on executing it with the specified interval

//This concept of the function executing the function after having been called itself is very useful
// for managing asynchronous program execution.