//You can look at objects as collection of properties and methods.

//An array is a type of object, which allow you to store multiple values


//Arrays are list of values. These values can be of all types and one array can even
//contain different data types. It's often very useful to store multiple values inside on variable.

arr2 = ['black', 'orange', 'pink'];
arr3 = new Array(10);
arr4 = [10]

console.log(arr2);
console.log(arr3);
console.log(arr4);

arr3[0] = 'black';
console.log(arr3);

let arr = ['Hi there', 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

//this is allowed
arr = ['brown'];
console.log(arr);

const arr5 = ['Hi there'];
arr5[0] = 'new value';
console.log(arr5[0]);

//This is not allowed
/*arr5 = ['The newest value'];
console.log(arr5);*/

let cars = [ 'Toyota', 'Renault', 'Volkswagen'];
console.log(cars[1]);
cars[1] = 'Tesla';
console.log(cars[1]);

//This is not the right way to add elements to an array
/*cars[-1] = 'Fiat';
cars[3] = 'Kia';
console.log(cars[3]);
console.log(cars[-1]);
console.log(cars);*/


//Built-in length property

colors = ['black', 'orange', 'pink', 'blue']

console.log('Length of colors ' + colors.length);
console.log('Length of cars ' + cars.length);

numbers = [12, 24, 36]
numbers[5] = 48;
console.log(numbers.length);