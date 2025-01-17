/* javascript Callback Hell */

/* callback function */

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// {
//   function sum(Callback) {
//     return console.log("hello"), 
//     Callback();
//   }

//   function Print() {
//     return console.log("world")                      ;
//   }

//   sum(Print);
// }

/* IIFE [ Imeediatly Invoked Function Expression] */

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.

// {
//   (function greek() {
//     return console.log("This is IITE Function");
//   })();

//   const sum = (() => console.log("IIEF"))();  

// }

/* Constructor Function */

// The constructor method is a special method of a class for creating and initializing an object instance of that class.

// constructor() { /* … */ }
// constructor(argument0) { /* … */ }
// constructor(argument0, argument1) { /* … */ }
// constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }

// {
//   let array = [10, 20, 30];

//   let array1 = [...array];

//   console.log(array1);

//   function sum(x, y, z) {
//     return console.log(x + y + z);
//   }

//   sum(...array);
// }

/* kitchen pinchin 7 steps to making your ow pizza */

// Start with a crust. ...
// Add a sauce. ...
// Add some veggies, such as:
// Try some fruit on your pizza, such as:
// Add some protein, such as:
// Add cheese. ...
// Bake your creation in a hot oven (450 F or above). ...

// {
//   let store = "open";

//   function pizzarecipe() {
//     if (store == "open") {
//       setTimeout(function steps1() {
//         console.log("start with a crust.");
//         setTimeout(function steps2() {
//           console.log("Add a sauce. ");
//           setTimeout(function steps3() {
//             console.log(
//               "Add some veggies, such as: tomato , capsicum and corn"
//             );
//             setTimeout(function steps4() {
//               console.log("Try some fruit on your pizza, such as: mango");
//               setTimeout(function steps5() {
//                 console.log("Add some protein, such as:panner");
//                 setTimeout(function steps6() {
//                   console.log(" Add cheese. ");
//                   setTimeout(function steps7() {
//                     console.log(
//                       "Bake your creation in a hot oven (450 F or above)."
//                     );
//                     setTimeout(function steps8() {
//                       console.log("Pizza Ready For Eat");
//                     }, 2000);
//                   }, 6000);
//                 }, 5000);
//               }, 3000);
//             }, 2000);
//           }, 3000);
//         }, 3000);
//       }, 2000);
//     } else {
//       console.log("Shop has been closed!!!");
//     }
//   }

//   pizzarecipe();
// }
