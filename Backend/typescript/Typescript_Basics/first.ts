// console.log("Hello")
// let technology:string = "TypeScript";
// technology = 10;
// console.log(technology);

// let a = 10;
// a = "skill";
// console.log(a);

// object
// interface Mobile {
//     brand : string;
//     color? : string; // optional
//     price : number;
// }
// const mobileOne:Mobile = {
//     brand : "Apple",
//     price : 45000
// };
// mobileOne.brand = "Lenovo";
// console.log(mobileOne);


// Enum -> for const values
// enum Months {
//     JAN="JANUARY",
//     FEB="FEBRUARY",
//     MAR="MARCH"
// }
// console.log(Months.JAN);

// let wishMsg = (name:string):string => {
//     let result:string = `Hello ${name} Good Morning`;
//     return result;
// };
// let greetMsg:string = wishMsg("John");
// console.log(greetMsg);

// let wishMsg1  = (name:any):string => {
//     let result:string = `Hello ${name} Good Morning`;
//     return result;
// };
// let greetMsg1:string = wishMsg1("John");
// console.log(greetMsg1);


interface Student{
    name: string;
    age: number;
    course : string;
}
const studentOne:Student = {
    name : "Rajan",
    age : 21,
    course : "CSC"
};
const printStudent = (student:Student):Student => {
    // let msg:string = `Name : ${student.name} AGE : ${student.age} COURSE : ${student.course}`;
    // console.log(msg);
    return student;

};
let stud:Student = printStudent(studentOne);
console.log(stud)
