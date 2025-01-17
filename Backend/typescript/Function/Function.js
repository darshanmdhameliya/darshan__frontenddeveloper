// let greet=():void=>{
//     console.log("Good Morning");
// };
// greet();
var printStudent = function (student) {
    // let msg:string= ` Name:${student.name} \n Age:${student.age} \n course:${student.course}`
    // console.log(msg);
    return student;
};
var studentOne = {
    name: "Darshan",
    age: 20,
    course: "Full Stack"
};
var stud = printStudent(studentOne);
console.log(stud);
