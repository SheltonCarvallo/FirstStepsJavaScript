//If you want to check whether a value is present in an array, you can use the find() method
//What will go in the find() method is somewhat different.
//It is actually a function. This function will be executed on every element in the array until it finds a match
// and if it doesn't, then it will return undefined

arr8 = [2,6,7,8];
let findValue = arr8.find(function(e) {return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);

let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex3);

//The last occurrence
let animals = ['dog', 'horse', 'cat', 'platypus', 'dog'];
let lastDog = animals.lastIndexOf('dog');
console.log(lastDog);


//Sorting
let names = ['James', 'Alicia', 'Fatiha', 'Bert', 'Maria'];
console.log(names.sort());

let ages = [18,27,33,56,40];
console.log(ages);

//Reversing
console.log(names.reverse());
console.log(ages.reverse());
