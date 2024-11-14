//Properties, sometimes also called fields, hold the data of the class
//Often, it is not desirable to provide direct access to our properties.
//We want our class to be in control of the values of properties for several reasons

class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
}
//Right now, the firstname and lastname properties cannot be accessed from outside the class.
//This is done by adding # in front of the property.

let p = new Person("Maria", "Saga");
console.log(p.firstname); //We'll get undefined

//Now for example if we wanted to make sure we could only create objects with name starting with a "M"

class PersonM {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        if(firstname.startsWith("M")){
            this.#firstname = firstname;
        } else {
            this.#firstname = "M" + firstname;
        }
        this.#lastname = lastname;
    }
}

let p2 = new PersonM("kay", "Moon");

