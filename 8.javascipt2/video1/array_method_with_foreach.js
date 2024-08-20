// const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//method1
// const result = myarray.filter((nums) => nums > 5)
//method2
// const result = myarray.filter((nums) => {
//     return nums > 5
// })
//method3
// const arr = []
// myarray.forEach((nums)=>{
//     if(nums>5){
//         arr.push(nums)
//     }
// })

// console.log(arr);

// const objects_list = [
//     { 'id': 1, 'name': 'Alice', 'age': 30 },
//     { 'id': 2, 'name': 'darshan', 'age': 25 },
//     { 'id': 3, 'name': 'Charlie', 'age': 35 },
//     { 'id': 4, 'name': 'darshan', 'age': 66 },
//     { 'id': 5, 'name': 'dhameliya', 'age': 72 },
//     { 'id': 6, 'name': 'yash', 'age': 25 },
//     { 'id': 7, 'name': 'meet', 'age': 96 },
//     { 'id': 9, 'name': 'harsh', 'age': 15 },
//     { 'id': 10, 'name': 'darshan', 'age': 76 },
// ]

// let user = objects_list.filter((ob) => ob.age === 25)
// let user = objects_list.filter((ob) => ob.age > 65 && ob.name === "darshan" && ob.id == 4)
// console.log(user);


//map() method

let array =[1,2,3,4,5,6,7,8,9,10]

let result =array.map((nums)=>nums+10)
console.log(result);
