/*You may wonder if classes do the exact same thing as simply defining an object, why do we even need classes?
The answer is that classes are essentially blueprints for object creation. This means that we need to do much less typing
if we need to create 20 dogs when we have a dog class. If we have to create the objects, we will have to specify all the properties' names each time.
And it would be easy to make a typo and misspell a property name. Classes come in handy in these sorts of situations.*/

/*class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}*/

//The constructor method is a special method that we use to initialize objects with our class blueprint.
//This constructor contains properties that will be set when initiating the class.


//You can specify default values in constructor. You would do it like this:

class Person2 {
    constructor(firstname, lastname = "Doe") {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let p3 = new Person2("Maaike2");

console.log(p3);

//Methods

//Functions on a class are called methods. When defining these methods, we don't use the function keyword

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }
}

let p = new Person("Maaike", "van Putten");
p.greet();
let compliment = p.compliment("Harry", "hat");
console.log(compliment);

