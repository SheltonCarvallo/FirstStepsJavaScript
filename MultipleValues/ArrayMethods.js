//Methods are functions on a certain object. Instead of holding a value,
//like properties, they perform actions.

//Adding elements
favoriteFruits =  ['grapefruit', 'orange', 'lemon']
console.log(favoriteFruits);
//favoriteFruits.push('tangerine');
//The push method returns the new length of the array
//The value gets added at the end of the array
let newLength = favoriteFruits.push('tangerine');
console.log(favoriteFruits);
console.log('new length: ' + newLength);

//What if you would want to add elements at a certain index
let arrOfShapes = ['circle', 'triangle', 'rectangle', 'pentagon'];
arrOfShapes.splice(2, 0, 'square', 'trapezoid');
console.log(arrOfShapes);

//Adding another array

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

arr4 = arr3.concat(7, 8, 9);
console.log(arr4);

//Deleting elements
//Removing the last element is done with pop()
 arr4.pop();
 console.log(arr4);

 //Removing the first element can be done with shift()
arr4.shift();
console.log(arr4);

//We can specify the index from where we want to start deleting, and
// the number of elements we want to delete
arr4.splice(1, 3)
console.log(arr4);

//This is not a method, but you can use it to change the value f a certain position of the array to undefined
delete arr4[1];
console.log(arr4);