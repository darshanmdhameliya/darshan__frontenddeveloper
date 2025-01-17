// function myfuntion(number1,number2){
//     console.log(number1+number2); 
// }

// *****************************
// function myfuntion(number1,number2){
//     // let result =number1+number2
//     // console.log("darshan"); // allow to  print beacuse return pela print kre
//     // return result;
//     // console.log("darshan"); // not print beacuse return pachi game te write kro allow no kre

//     return number1+number2

// }

// const result=myfuntion(5,3)
// console.log(result);


//**************************************** 
// function loginusername(username){
//     return `${username} just logged in`
// }

// loginusername("darshan")// not execute beacuse value return thy gy che pn kyay print krayvi nathi

// // console.log(loginusername("darshan")); // aa execute thase 

// // console.log(loginusername("")); // aa execute thase  pn empty aaavse beacuse string khali che 

// console.log(loginusername()); // aa execute thase pn undefined aavse beacuse value j nathi


//********************************************
// function loginusername(username){
//     if(!username){
//     // if(username === undefined){ // otherwise
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginusername());


//defualt value:- when tame argument ma aek pn value nakheli no hoy tyre te value ly le *****************************************
// function myfuntion(username = "dhameliya"){
//     return `${username} just logged in`
// }

// console.log(myfuntion("darshan"));



//***************************************
//spred(rest) oprator :- tame parameter ma bhle aek parameter aapelo hoy but argument ma jetli value pas kreli hoy tetli print thase array na form ma

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,2000));

// function calculateCartPrice(value1,value2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,2000));  // output:- [ 500 , 2000 ] beacuse value1 ma 200 and value2 ma 400 vya jase atle baki na array ma aavi jase


//******************************
// function with object

// const user = {
//     username: "darshan",
//     price: 200
// }


// function handleobject(anyobject) {
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleobject(user) //otherwise dirext object pass kravi skay
//  handleobject({
//     username:"dhameliya",
//     price:300    
//  }) 


//*************************************
// function with array

// let array =[200,400,500,800]

// function returnarrayvalue(getarray){
//      return getarray[3]
// }

// console.log(returnarrayvalue(array)); // otherwise argument maj array pass kray deva no
// console.log(returnarrayvalue([200,400,500,800]));
