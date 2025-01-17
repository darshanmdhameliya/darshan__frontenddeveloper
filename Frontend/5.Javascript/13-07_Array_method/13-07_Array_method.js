/* javascript Array.filter() method */

//function throw compair kri skay aapda array ne

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// Syntax :-filter(callbackFn)
//          filter(callbackFn, thisArg)

// {
  // let array = ["html", "css", "javascript", "sass", "development"];

  // let result = array.filter((subject) => subject.length > 5);

  // console.log(result);

//   let num = [20, 66, 35, 41, 23, 78];

//   let numresult = num.filter((item) => item > 50);

//   let mapresult = numresult.map((item) => item * 2);

//   console.log(numresult);
//   console.log(mapresult);
// }

/* javascript Array.slice() method */

//jetla slice nakhya hoy te j index print kre and last value print no kre

// {
//     let array = ["html", "css", "javascript", "sass", "development"];

//     let result =array.slice(1,3)

//     console.log(result);
// }

/*  javascript Array.shift() method */

// first mathi index delete kre

// {
//     let array = ["html", "css", "javascript", "sass", "development"];

//     array.shift()
//     array.shift()

//     console.log(array);

// }

/*  javascript Array.pop() method */

// last mathi index delete kre

// {
//     let array = ["html", "css", "javascript", "sass", "development"];

//     array.pop()

//     console.log(array);

// }

/*  javascript Array.push() method */

//last ma index add kre

// {
//     let array = ["html", "css", "javascript", "sass", "development"];

//     array.push('nodeJs')

//     console.log(array);

// }

/*  javascript Array.unshift() method */

// first ma index add krse

// {
//     let array = ["html", "css", "javascript", "sass", "development"];

//     array.unshift('reactJs')

//     console.log(array);

// }

/*  javascript Array.sort() method */

// array sort kre line ma lave a , b , c .. pramane

// {
  // let array = ["html", "css", "javascript", "sass", "development"];

  // array.sort();

  // console.log(array);

  // let num = [100, 45, 35, 72];

  // let result = num.sort((a,b) => a-b);

  // console.log(num);
// }

/* javascript Array.some() method */

//  badha j number mathi any one number 100 up hoy to pn condition true thase

// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// Syntax :- some(callbackFn)
//           some(callbackFn, thisArg)

// {
//   let num = [165, 123, 53, 67, 545];

//   let result = num.some((nums) => nums > 100);

//   console.log(result);
// }

/* javascript Array.reverse() method */

// reverse ma show thase  

// {
//   let array = ["html", "css", "javascript", "sass", "development"];

//   array.reverse();

//   console.log(array);
// }

/* javascript Array.find() method */

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// Syntax :- find(callbackFn)
//           find(callbackFn, thisArg)

// {
//   let num = [165, 123, 53, 67, 545];

//   let result = num.find((item) => item == 165);

//   console.log(result);
// }

/* javascript Array.findIndexmethod / Array.findLastIndexmethod / Array.findLast() method */

// findIndex     :-  start mathi tame nakheli value ni  index show kre
// findLastIndex :-  last mathi tame nakheli value ni  index show kre
// findLast      :-  tame nakheli value tema che ke ny te check kre jo hoy to tej value return kre otherwise undefined aave

// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// {
//   let num = [165, 123, 352, 67, 352, 545];

//   let result1 = num.findIndex((item) => item == 352);
//   let result2 = num.findLastIndex((item) => item == 352);
//   let result3 = num.findLast((item) => item == 352);

//   console.log(result1);
//   console.log(result2);
//   console.log(result3);
// }

/* javascript Array.flat() method */

// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

// Syntax:- flat()
//          flat(depth)

// {
//   let num = [12, 13, 14, 15, [16, 17, 18, [19, 20, 21, [22, 23, 24]]]];

//   console.log(num[4][3][3][2]);

//   let result = num.flat(4);
//   console.log(result);
// }

/* javascrip Array.flat() method */

// The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

// Syntax :- flatMap(callbackFn)
//           flatMap(callbackFn, thisArg)

{
  // let num = [12, 13, 14, 14, 13, 17, 18];

  // let result = num.flatMap((item) => (item==14) ? [14,14] : item)

  // console.log(result);

  // let num = [12, 13, 14, 15, [16, 17, 18, [19, 20, 21, [22, 23, 24]]]].flat(4);

  // let result = num.map((nums) => nums * 2);

  // console.log(result);

}
