//Getters and setters are special properties that we can use to get data from a class and to set data fields on the class.
//Getters and setters are computed properties.
// So, they are more like properties than they are like functions. We call them accessors.

class Person {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        this.#lastname = lastname;
    }
}

let p = new Person("Maria", "Saga");
console.log(p.firstname);
p.firstname = "Adnane";
console.log(p.firstname);

//At this point, nothing special is happening in the setter. We could do a similar validation as in the constructor before

class Person2 {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        if (firstname.startsWith("M")) {
            this.#firstname = firstname;
        } else {
            this.#firstname = "M" + firstname;
        }
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        this.#lastname = lastname;
    }
}

