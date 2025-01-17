// let greet=():void=>{
//     console.log("Good Morning");
// };
// greet();

// let greet1=():any=>{
//     return "Good Morning";
// };
// console.log(greet1());


// let wishMsg =(name:string):string=>{
//     let result:string=`Hello ${name} Good Morning`;
//     return result;
// };
// let greetMsg:string =wishMsg("John");
// console.log(greetMsg);

// let wishMsg =(name:string,age:number):string=>{
//     let result:string=`Hello ${name} Good Morning your age is ${age}`;
//     return result;
// };
// let greetMsg:string =wishMsg("John",20);
// console.log(greetMsg);


// interface Student{
//     name:string;
//     age:number;
//     course:string;
// }

// const printStudent=(student:Student):void =>{
//     let msg:string= ` Name:${student.name} \n Age:${student.age} \n course:${student.course}`
//     console.log(msg);
// }

// const studentOne:Student={
//     name:"Darshan",
//     age:20,
//     course:"Full Stack"
// }
// printStudent(studentOne)


interface Student{
    name:string;
    age:number;
    course:string;
}

const printStudent=(student:Student):Student =>{
    // let msg:string= ` Name:${student.name} \n Age:${student.age} \n course:${student.course}`
    // console.log(msg);

    return student;
}

const studentOne:Student={
    name:"Darshan",
    age:20,
    course:"Full Stack"
}
let stud:Student=printStudent(studentOne)
console.log(stud);
