//Similar to the spread operator, we have the rest parameter. It has the same symbol as the spread operator,
// but it is used inside the function parameter list.

function someFunction(param1, param2) {
    console.log(param1, param2);
}
someFunction("hi", "there!", "How are you?");


//That's right. Nothing really: it would just pretend we only sent in two arguments and log hi there!
// If we use the rest parameter
// it allows us to send in any number of arguments and translate them into a parameter array. Here is an example:

function someFunction2(param1, ...param2) {
    console.log(param1, param2);
}
someFunction2("hi", "there!", "How are you?");

//As you can see, the second parameter has changed into an array, containing our second and third arguments.
// This can be useful whenever you are not sure what number of arguments you will get.
// Using the rest parameter allows you to process this variable number of arguments, for example, using a loop.