// string
let employeeName:string = "John";
console.log(employeeName);

// number
let employeeSalary:number = 50000;
console.log(`Salary : ${employeeSalary}`);

// boolean
let isManager:boolean = true;
console.log(`IsManager : ${isManager}`);

// arrays
let techs:string[] = ["html", "css", "JavaScript"];
console.log(techs);

// object
interface Mobile {
    brand : string;
    color? : string; // optional
    price : number;
}
const mobileOne:Mobile = {
    brand : "Apple",
    price : 45000
};
mobileOne.brand = "Lenovo";
console.log(mobileOne);

// Enum -> for const values
enum Months {
    JAN="JANUARY",
    FEB="FEBRUARY",
    MAR="MARCH"
}
console.log(Months.JAN);

// any
let abc:any = 10;
abc = 20;
abc = "test";
abc = true;
abc = {};
abc = [];














