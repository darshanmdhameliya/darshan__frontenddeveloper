/* javascript Object.freeze() method */

// aama  Object.freeze() method  pachi  change , delete , add kay no kri skay 

// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

// Syntax :- Object.freeze(obj)
//           Object.isFrozen(obj)


// {
//     let obj = {
//         firstname: 'rahul',
//         lastname: 'dhameliya',
//         age: 19
//     }

//     console.log(obj);

//     obj.firstname = 'darshan'
//     console.log(obj);

//     obj.address = ' surat'
//     console.log(obj);

//     // let obj1=Object.freeze(obj)
//     // console.log(obj1);

//     obj.firstname = 'rajan'
//     console.log(obj);

//     obj.gender = 'male'
//     console.log(obj);

//     delete obj.firstname
//     console.log(obj);

//     let obj2 = Object.isFrozen(obj)
//     console.log(obj2);

// }

/*  javascript Object.seal() method */

//aama Object.seal() method change kri skay but delete and add no thay

// The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.

// Syntax :- Object.seal(obj)
//           Object.isSealed(obj)

// {
//     let obj = {
//         firstname: 'rahul',
//         lastname: 'dhameliya',
//         age: 19
//     }

//     console.log(obj);

//     obj.firstname = 'darshan'
//     console.log(obj);

//     obj.address = ' surat'
//     console.log(obj);

//     let obj1=Object.seal(obj)
//     console.log(obj1);

//     obj.firstname = 'rajan'
//     console.log(obj);

//     obj.gender = 'male'
//     console.log(obj);

//     delete obj.firstname
//     console.log(obj);

//     let obj2 = Object.isSealed(obj)
//     console.log(obj2);

// }

/* javascript Object.entries() method */

// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// Syntax :- Object.entries(obj)

//key and values method key and values show krva mate thay 

// Object.keys()
// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
// Syntax :- Object.keys(obj)

//Object.values()
// The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
// Syntax :- Object.values(obj)


// {
//     let obj = {
//         firstname: 'darshan',
//         lastname: 'dhameliya',
//         age: 19
//     }

//     for (let [key, value] of Object.entries(obj)) {
//         console.log(`${key} = ${value}`);
//     }

//     console.log(Object.keys(obj));

//     console.log(Object.values(obj));
// }

/* javascript getObject.getOwnPropertyNames() method */

// The Object.getOwnPropertyNames() static method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

// Syntax :- Object.getOwnPropertyNames(obj)

// {
//     let obj = {
//         firstname: 'darshan',
//         lastname: 'dhameliya',
//         age: 19
//     }

//     console.log(Object.getOwnPropertyNames(obj));
//     // console.log(Object.getOwnPropertySymbols(obj));
//     // console.log(Object.getOwnPropertyDescriptors(obj));
//     // console.log(Object.getOwnPropertyDescriptor(obj));
// }

/* javascript Object.is() method */

// The Object.is() static method determines whether two values are the same value.

// Syntax :- Object.is(value1, value2)

// {
//     console.log(Object.is('1', 1));
//     console.log(Object.is(NaN, NaN));
//     console.log(Object.is({}, {}));
//     console.log(Object.is([], []));
//     console.log(Object.is({}, []));
//     console.log(Object.is(undefined, undefined));
// }
