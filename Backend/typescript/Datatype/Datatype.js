// console.log("hello word")
// let technology:string = "Typescript";
// console.log(technology);
// let technology:string = "Typescript";
// technology = 10;
// console.log(technology);
//string
// let employeeName:string = "darshan";
// console.log(employeeName);
//number
// let employeeSalary:number = 60000;
// console.log(employeeSalary);
//boolean
// let isManager:boolean = true;
// console.log(`IsManager : ${isManager}`);
//arrays
// let techs:string[]=["html","css","javascript"];
// console.log(techs);
// let techs:string[]=["html","css","javascript",10];
// console.log(techs);
//object
// interface Mobile {
//     brand: string;
//     color?: string; //optional
//     price: number;
// }
// const mobileOne:Mobile={
//     brand:"Apple",
//     price:45000
// }
// mobileOne.brand="Vivo";
// console.log(mobileOne);
//any
// let abc:any=10;
// abc = 20;
// abc="test";
// console.log(abc);
//error aavse beacuse ke jyare first time value assign thase tyare teni datatye ly lese atle
// let a=10;
// a="skill";
// console.log(a);
//Enum => for const values
var Months;
(function (Months) {
    Months["JAN"] = "JANUARY";
    Months["FEB"] = "FEBRUARY";
    Months["MAR"] = "MARCH";
})(Months || (Months = {}));
console.log(Months.JAN);
