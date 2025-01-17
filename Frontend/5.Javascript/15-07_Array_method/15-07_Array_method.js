/* javascript Array.forEach() method */

// The forEach() method of Array instances executes a provided function once for each array element.

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// {
//   let array = [45, 69, 78, 85, 36];

//   array.forEach((item) => console.log(item * 10));
// }

/* javascript Array.includes() method */

// answer true or flase ma aave

// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// includes(searchElement) // answer true or flase ma aave // tame find kreli value array ma che ke ny te check kre
// includes(searchElement, fromIndex) // tame value nakhya pachi aeni index check kri ke aa index pachi te value array ma che ke ny te check kre

// {
//     let array = [45, 69, 78, 85, 36];

//     let includes =array.includes(85 ,1)

//     console.log(includes);
// }

/* javascript Array.indexof() method */

// tame nakhelo number ketla index uper che te find kri ne aapse

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

// {
//     let array = [45, 69, 78, 85, 36];

//     let indexOf =array.indexOf(85)

//     console.log(indexOf);
// }

/* javascript Array.join() method */

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// join()
// join(separator)

// {
//     let array = [45, 69, 78, 85, 36];

//     let join =array.join(',')

//     console.log(join);
// }

/*javascript Array.reduce() method */

// all value ne sathe operation kre ne initialvalue add kre

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// {
//   let array = [11, 12, 13, 14, 15];

//   let initialValue = 10;

//   let reduce = array.reduce((prev, next) => prev + next, initialValue);

//   console.log(reduce);

// }

/*javascript Array.reduceright() method */

// all value ne sathe operation kre ne initialvalue add kre but right side thi

// The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// reduceRight(callbackFn)
// reduceRight(callbackFn, initialValue)

// {

//   // let array = [11, 12, 13, 14, 15];

//   // let initialValue = 9;

//   // let reduceRight = array.reduceRight((prev, next) => prev - next, initialValue);

//   // console.log(reduceRight);

// }
