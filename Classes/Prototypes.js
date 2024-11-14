//A prototype is the mechanism in JavaScript that makes it possible to have objects.
//When nothing is specified when creating a class, the objects inherit from the Object.prototype prototype.

//There is a prototype property available on all classes, and it is always named "prototype." We can access it like this:
//ClassName.prototype

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log("Hi there!");
    }
}
//And here is how to add a function to this class using prototype:

Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
};

//prototype is a property holding all the properties and methods of an object.
//So, adding a function to prototype is adding a function to the class.
// You can use prototype to add properties or methods to an object

Person.prototype.favoriteColor = "green";


let p = new Person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();

/*
And it will be as if you had defined the class with a favorite color holding a default value, and a function, introduce
They have been added to the class and are available for all instances and future instances.
*/
