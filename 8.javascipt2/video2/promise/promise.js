//promiseone
// const promiseone = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async task1 is complete');
//         resolve();
//     }, 2000);
// })

// promiseone.then(function () {
//     console.log('promise1 consumed');
// })

//promisetwo
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async task2 is complete');
//         resolve();
//     }, 5000)
// }).then(function () {
//     console.log('promise2 comsumed');
// })


//promisethree
// const promisethree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: 'drashan', rollnumber: 92 });
//     }, 2000)
// })

// promisethree.then(function (user) {
//     console.log(user);

// })

//promisefour
// const promisefour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: 'darshan', rollnumber: 92 })
//         } else {
//             reject('Error!! something went wrong')
//         }
//     }, 2000);
// })

// promisefour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log('the promise is either resolved or rejected'));



const promisefive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "dhmaleiya", rollnumber: 92 });
        } else {
            reject('Eroor!! JS went wrong');
        }
    }, 2000);
})

async function consumiingpromisefive() {
    try {
        const respose = await promisefive;
        console.log(respose);
    } catch (error) {
        console.log(error);

    }
}

consumiingpromisefive()
