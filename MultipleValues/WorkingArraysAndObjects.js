//Objects in Objects

let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipCode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
}

//Accessing properties of the address, there are two approaches
company.address.zipCode = "33117";
company['address']['number'] = '100';

console.log(company);

//Arrays in objects

let company2 = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing", "improving kid's health", "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipCode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
}
let activity1 = company2.activities[1]
console.log(activity1);

//Object in arrays
let addresses = [
    {
        street: '2nd street',
        number: '123',
        zipCode: '33116',
        city: "Miami",
        state: "Florida"
    },
    {
        street: '1st West avenue',
        number: '5',
        zipCode: '77001',
        city: 'Addison',
        state: 'Texas'
    }
];

let streetName = addresses[0].street;
console.log(streetName);

//Objects in arrays in objects

company3 = {
    companyName: "Healthy Candy",
    activity: ["food manufacturing", "improving kid's health", "manufacturing toys"],
    address: [
        {
            street: '2nd street',
            number: '123',
            zipCode: '33116',
            city: "Miami",
            state: "Florida"
        },
        {
            street: '1st West avenue',
            number: '5',
            zipCode: '77001',
            city: "Addison",
            state: 'Texas'
        }
    ],
    yearOfEstablishment: 2021
}

let streetName2 = company3.address[0].street;
console.log(streetName2);