// let greet = ():void => {
//     console.log("Good Morning");
// };
// greet();

// let greet1 = () => {
//     return "Good Morning";
// };
// console.log(greet());





let wishMsg = (name:string):string => {
    let result:string = `Hello ${name} Good Morning`;
    return result;
};
let greetMsg:string = wishMsg("John");
console.log(greetMsg);

let wishMsg1  = (name):string => {
    let result:string = `Hello ${name} Good Morning`;
    return result;
};
let greetMsg1:string = wishMsg1("John");
console.log(greetMsg);


// print obj
interface Student{
    name: string;
    age: number;
    course : string;
}

const printStudent = (student:Student):void => {
    let msg:string = `Name : ${student.name} AGE : ${student.age} COURSE : ${student.course}`;
    console.log(msg);
};

const studentOne:Student = {
    name : "Rajan",
    age : 21,
    course : "CSC"
};
printStudent(studentOne);


















