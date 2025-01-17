/* javascript Promises */

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

/* Promises Examples */

// const promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('This Promise has Been resolved!!!')
//     }, 4000);
// })
// promise.then((result)=>{
//     console.log(result);
// })
// .then(()=>{
//     console.log('And after effect');
// })
// .then(()=>{
//     console.log('And second after effect');
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(()=> {
//     console.log('Finally promise complete.');
// })


/* catch */

// catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns another Promise object, allowing you to chain calls to other promise methods. It is a shortcut for Promise.prototype.then(undefined, onRejected).

/* then */

// The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns another Promise object, allowing you to chain calls to other promise methods.

/* finally */

// The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns another Promise object, allowing you to chain calls to other promise methods.

// let promise = new Promise(function(resolve,reject){
//     let kayo = 'healthy'
//     if(kayo == 'healthy'){
//         resolve()
//     }else{
//         reject('kayo is sick!!!')
//     }
// })

// promise.then(()=>{
//     console.log('kayo is healthy!!!');
// }).then(()=>{
//     console.log('I have a cake and i am happy!!!');
// }).catch((error)=> {
//     console.log(error);
// }).finally(()=>{
//     console.log('I still Have A party!!');
// })

/* async and await */

// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

// The await keyword is used inside the asnyc function to wait for the asynchronous operation.

// async function name(parameter1, parameter2, ...paramaterN) {
//     // statements
// }

// {
//     let greek = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve('Promise Has been resolved..')
//         },5000)
//     })

//     async function print(value1,value2){
//         let result = await greek
//         console.log(result);
//         console.log('hello async and await!!!');
//     }
//     print()
// }

/* try and catch method */

// while using the async function, you write the code in a synchronous manner. And you can also use the catch() method to catch the error.

// {
//     let greek = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve('promise has been resolved..')
//         },5000)
//     })

//     async function Print(){
//         try{
//             let result = await greek
//             console.log(result);
//             console.log('hello async and await!!!');
//         }
//         catch(error){
//             console.log(error);
//         }
//         finally{
//             console.log('finally complete@@');
//         }
//     }
    
//     Print()
// }



