/*
Here is a non-anonymous function:

function doingStuffAnonymously() {
  console.log("Not so secret though.");
}

Here is how to turn the previous function into an anonymous function:

function () {
  console.log("Not so secret though.");
};
*/

//It is anonymous. So you may wonder how you can invoke this function. Well actually, you can't like this!

//We will have to store it in a variable in order to call the anonymous function; we can store it like this:

let functionVariable = function () {
    console.log("Not so secret though.");
};
//An anonymous function can be called using the variable name, like this:
functionVariable();


//This might seem a bit useless, but it is a very powerful JavaScript construct.
//Storing functions inside variables enables us to do very cool things, like passing in functions as parameters.
//This concept adds another abstract layer to coding. This concept is called callbacks
