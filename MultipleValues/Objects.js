//Objects can be used to describe real-life objects as well as more complex abstract concepts
//that allow for more flexibility in your code

//An object is a chance to group multiple variables into one

let dog = {
    dogName: 'JS',
    weight: 2.4,
    color: 'brown',
    breed: 'chihuahua',
    age: 3,
    burglarBiter: true
};

//We can the properties if this object in the following ways:

let dogColor1 = dog['color'];
let dogColor2 = dog.color;
console.log(dogColor1, dogColor2);

//Updating objects

dog["color"] = 'black';
dog.weight = 5;
console.log(dog);


//If we change the data type of one of our properties
dog['age'] = "three";
//JS will just change the whole value and the data type to the new situation
console.log(dog);

//We can work with variables to achieve the following
let variable = 'age';
console.log(dog[variable]);
let variable2 = 'breed';
console.log(dog[variable2]);