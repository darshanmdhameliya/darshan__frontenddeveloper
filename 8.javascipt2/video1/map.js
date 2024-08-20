//map method.

// const map = new Map()
// map.set('darshan', "dhameliya")
// map.set('yash', "mandani")
// map.set('meet', "sutariya")
// map.set('harsh', "dankhra")

// console.log(map);

// for of loop

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

//object are not allow in for of loop
// const myobject = {
//     "name": "darshan",
//     "surname": "dhameliya",
//     age: 19
// }

// // console.log(myobject);

// for (const [key, value] of myobject) {
//     console.log(key, ":-", value);
// }


//for in loop

const myobject = {
    "name": "darshan",
    "surname": "dhameliya",
    age: 19
}

// console.log(myobject);

// for (const key in myobject) {
//     console.log(`${key} is ${myobject[key]}`);
// }


//array in for in loop

// const myarray = [1, 2, 3, 4, 5]

// for (const key in myarray) {
//     console.log(myarray[key]);

// }

// map in for in loop not allow

// const map = new Map()
// map.set('darshan', "dhameliya")
// map.set('yash', "mandani")
// map.set('meet', "sutariya")
// map.set('harsh', "dankhra")

// console.log(map);

// for (const [key, value] in map) {
//     console.log(key, ':-', value);
// }



// for each loop

// const myarray = ["darshan", "dhameliya", "yash", "mandani"]

//method1
// myarray.forEach(function (val) {
//     console.log(val);
// })

//method2
// myarray.forEach((val) => {
//     console.log(val);
// })

//method3
// function printme(print) {
//     console.log(print);
// }
// myarray.forEach(printme)

//method4
// myarray.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

//method5
const mycoding = [
    {
        languagename: 'javascript',
        languagefilename: 'js'
    },
    {
        languagename: 'java',
        languagefilename: 'css'
    },
    {
        languagename: 'jqery',
        languagefilename: 'js'
    }
]

mycoding.forEach((item) => {
    console.log(item.languagename);

})

