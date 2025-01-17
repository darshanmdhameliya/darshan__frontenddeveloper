/* Javascript Number Method */

/* Number Constructor() */

//Defination :- The Number() constructor creates Number objects. When called as a function, it returns primitive values of type Number.

//Syntax :- new Number(value)
//       :- Number(value)

// {
//     let numbers = new Number(false)
//     let numbers1 = Number(false)
//     console.log(numbers);
//     console.log(numbers1);
// }

// {
//     let number = new Number('123')
//     let number1 = Number('123')
//     console.log(number);
//     console.log(typeof number);
//     console.log(number1);
//     console.log(typeof number1);
// }

/* Number-exponential method() */

//Defination :- The toExponential() method of Number values returns a string representing this number in exponential notation.

// Syntax :- toExponential()
//        :- toExponential(fractionDigits)

// {
//     let number=250000

//     let expo1=number.toExponential(1)  // point pachi ketla ank rakhva te nakki karva mate
//     console.log(expo1);
// }

/* tofixed() */ //point pachi ketla ank rakhva te fix karva mate

// {
//   let number = 20.465456;

//   let fixed1 = number.toFixed(0);
//   let fixed2 = number.toFixed(1);
//   let fixed3 = number.toFixed(2);

//   console.log(fixed1);
//   console.log(fixed2);
//   console.log(fixed3);
// }

/* toPrecision() */

// {
//   let number = 20.465456;

//   let Precision1 = number.toPrecision(1); // point pachi ketla number rakhva te 2e+1
//   let Precision2 = number.toPrecision(4); // point pachi ketla number rakhva te 20.47

//   console.log(Precision1);
//   console.log(Precision2);

// }

/* tostring() */  //number to string ma convert krva mate

// {
//     let number =122

//     // console.log(typeof number);

//     let string1=number.toString()

//     console.log(string1);
//     // console.log(typeof string1);

// }

