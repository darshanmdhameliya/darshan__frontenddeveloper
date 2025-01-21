interface Address{
    street? : string;
    city : string;
    state : string;
}

interface Student{
    name: string;
    age: string | null;
    course? : string;
    address : Address;
}

const studentOne:Student = {
    name : "Rajan",
    age : "20",
    address : {
        city : "Hyderabad",
        state : "TS"
    }
};
console.log(studentOne);

/**
 * https://jvilk.com/MakeTypes/
 * https://www.convertsimple.com/convert-json-to-javascript/
 * http://jsonviewer.stack.hu/
 */

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: Company;
}
export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
export interface Geo {
    lat: string;
    lng: string;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

const user:IUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
console.log(user);
