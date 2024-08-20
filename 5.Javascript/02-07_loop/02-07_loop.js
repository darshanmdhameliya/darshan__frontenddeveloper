/* javascript loop */

/* 

while loop
do-while loop 
for loop
for-in loop
for-of loop

*/

/* while loop */

//Syntax :-
// while(condition){
// statement;
// afterthought;
// }

//Example
// {
//     let count=0;
//     while(count<10){
//         console.log(`this is while loop ${count}`);
//         count++;
//     }
// }

/* do-while loop */

//Syntax :-
// do{
// statement;
// afterthought;
// }while(condition)

//Example
// {
//     let count=0;
//     do{
//         console.log(`this is do-while loop ${count}`);
//         count++;
//     }while(count<5)
// }

/* for loop */

//Syntax :- 

// {
//     for(initialization,condition,afterthougth){
//         statement;
//     }
// }

//Example
// {
//     let count = 3
//     for (count; count < 10; count++) {
//         console.log(`this is for loop ${count}`);
//         console.log(count += count);
//     }
// }

/* mfor-in loop */

//Syntax
// {
//     for(variable in object)
//         statement
// }

//Example
// {
// let obj ={ key1:'one',  key2:'two' , key3:'three' , key4:'four',  key5:'five',  key6:'six'}

// console.log(obj);
// obj.key1="two"
// console.log(obj);
// console.log(obj.key1);
// console.log(obj['key1']);
// obj.key1="three"
// console.log(obj);

// console.log(obj.key1);
// console.log(obj.key2);
// console.log(obj.key3);
// console.log(obj.key4);
// console.log(obj.key5);
// console.log(obj.key6);

// Synatax :-
// for(initialization in object)
//     statement;

// for(let props in obj){
//     console.log(`${obj[props]}`);
// }
// }

/* for-of loop */

// Syntax :-

{
    // let array=[]
    // console.log(array);

    // array.length=10

    // console.log(array);

    // array[2]=20
    // array[3]=30
    // array[4]=40

    // console.log(array);

    // let newArray =[ 'html' , 'css' , 'saas' , 'Tailwind' , 'javascript' ]

    // console.log(newArray);

    // console.log(newArray[0]);
    // console.log(newArray[1]);
    // console.log(newArray[2]);
    // console.log(newArray[3]);
    // console.log(newArray[4]);

    // for(let value of newArray){
    //     console.log(value);
    //     // console.log(`${value}`);
    // }

    // let num = [10, 20, 30, 40, 50]

    // for(let i of num){
    //     console.log(i*2);
    // }

    // let str=`this is string!`

    // console.log(str);

    // for(let i of str){
    //     console.log([i]);
    // }
}


