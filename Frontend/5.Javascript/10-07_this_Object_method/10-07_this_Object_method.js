/* javascript this keyword */

// {
    // let x=this
    // console.log(x);
// }

// {
    // let profile = {
    //     firstname:'darshan',
    //     lastname :'dhameliya',
    //     age:19,
    //     innerfunc:function(){
    //         console.log(`my first name ${this.firstname} and my last name ${this.lastname} and age ${this.age}`);
    //     }
    // }
    // profile.innerfunc()
// }

/* javascript object method */

// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

// {
//     let name = {
//         name1: 'darshan',
//         name2: 'yash',
//         name3: 'harsh',
//         name4: 'parth',
//     }

//     // console.log(name.name4);  // dot method

//     console.log(name[`name4`]); // brakets method single , bouble or tilde(``) qoute

// }

/* javascript assign() method */

// 2 object aek sathe print kri ne aape 

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//Syntax :- // Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

// {
//     let obj1 = {
//         value1: 'objectassign1'
//     }

//     let obj2 = {
//         value2: 'objectmethods'
//     }

//     let obj=Object.assign(obj1,obj2)

//     console.log(obj);

//     // console.log(obj1);
// }

/* javascript object.create() method */

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

/* Syntax :-   Object.create(proto)
               Object.create(proto, propertiesObject) */

// {
//     let profile = {
//         firstname : 'darshan dhameliya',
//         fullname:function(){
//             console.log(`${this.firstname}`);
//         }
//     }
//     profile.fullname()

//     let secondprofile = Object.create(profile)

//     secondprofile.firstname = 'dhameliya darshan'

//     console.log(profile);

//     console.log(secondprofile);
//     secondprofile.fullname()
// }

/* javascript defineproperties() method */

// The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.

// Syntax :- Object.defineProperties(obj, props)

// {
//     let Object1 = {};

//     Object.defineProperties(Object1, {
//         property1:{
//             name:'skillqode',
//             value:500,
//         },

//         property2:{
//             value:200,
//             name:'darshan',
//         }
//     })

//     console.log(Object1.property1);

//     console.log(Object1);
// }

/* javascript defineproperty() method */

// The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

//Syntax :- Object.defineProperty(obj, prop, descriptor)

{
    let Object1 = {};

    Object.defineProperty(Object1,'property1', {
        value: 500,
        writable: false
    })

    Object1.property1 = 400

    console.log(Object1.property1);

    console.log(Object1);
}
