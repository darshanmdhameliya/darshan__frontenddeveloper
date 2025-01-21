// console.log("Hello")
// let technology:string = "TypeScript";
// technology = 10;
// console.log(technology);
var studentOne = {
    name: "Rajan",
    age: 21,
    course: "CSC"
};
var printStudent = function (student) {
    // let msg:string = `Name : ${student.name} AGE : ${student.age} COURSE : ${student.course}`;
    // console.log(msg);
    return student;
};
var stud = printStudent(studentOne);
console.log(stud);
