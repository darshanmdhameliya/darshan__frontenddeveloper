/*1.  Add two numbers input by the user */

// {
//   let first = prompt("you are add the first number" )
//   let second = prompt("you are add the second number")

//   let a=parseInt(first)
//   let b=parseInt(second)
//   console.log(a)
//   console.log(b)

// }

/*2. Calculate the area of a rectangle */

// {
//     let a=prompt("enter the length")
//     let b=prompt("enter the width")

//     let a1=parseInt(a)
//     let a2=parseInt(b)

//     console.log(a1*a2);

// }

/*3. convert temperature when one number is divided by another */

//(0°C × 9/5) + 32

// {
//     let a=prompt("enter the celsius")

//     let a1=parseInt(a)
//     let b=(a * 9/5) + 32

//     console.log(b);

// }

/*4. Find the remainder when one number is divided by another */

//  {
//     let a=prompt("enter the first number you want to divied two number")
//     let b=prompt("enter the second number you want to divied two number")

//     let a1=parseInt(a)
//     let a2=parseInt(b)

//     console.log(`the remainder is ${a1%a2}`);
//  }

/*5. Calculate the power of a number */

//  {
//     let a=prompt("enter the base number")
//     let b=prompt("enter the exponent number ")

//     let a1=parseInt(a)
//     let a2=parseInt(b)
//     let a3=a1**a2

//     console.log(`the power of number is ${a3}`);
//  }

/*6. Combination of Arithmetic Operators */

// {
//     let a=10
//     let b=20
//     let c=30
//     let d=40
//     let e=50

//     console.log(a+b-c*d/e);
// }

/*7. Comparing Numbers [5 number] */

// {
//     let a=prompt("enter the first number")
//     let b=prompt("enter the second number ")
//     let c=prompt("enter the third number ")
//     let d=prompt("enter the fourth number ")
//     let e=prompt("enter the fifth number ")

//     let z=10
//     let a1=parseInt(a)
//     let a2=parseInt(b)
//     let a3=parseInt(c)
//     let a4=parseInt(d)
//     let a5=parseInt(e)

//     let aa1= (a1 == z)
//     let aa2= (a2 === z)
//     let aa3= ((a3=(a1+a2)) == z)
//     let aa4= (a4 > z)
//     let aa5= (a5 <= z)

//     console.log("⬇ this all number are equal by 10 ⬇");
//     console.log(aa1);
//     console.log(aa2);
//     console.log(aa3);
//     console.log(aa4);
//     console.log(aa5);
// }

/*8. Comparing Strings [5 String] */

// {
//   let a = prompt("enter the first string");
//   let b = prompt("enter the second string ");
//   let c = prompt("enter the third string ");
//   let d = prompt("enter the fourth string ");
//   let e = prompt("enter the fifth string ");

//   let aa1 = (a == c);
//   let aa2 = (b === e);
//   let aa3 = (c == b);
//   let aa4 = (d == a);
//   let aa5 = (e == d);

//   console.log(aa1);
//   console.log(aa2);
//   console.log(aa3);
//   console.log(aa4);
//   console.log(aa5);
// }

/*9. Comparing Different Types [4 types] */

// {
//   let a = prompt("enter the first type");
//   let b = prompt("enter the second type ");
//   let c = prompt("enter the third type ");
//   let d = prompt("enter the fourth type ");
//   let e = prompt("enter the fifth type ");

//   let aa1 = a == c;
//   let aa2 = b === e;
//   let aa3 = c == b;
//   let aa4 = d == a;
//   let aa5 = e == d;

//   console.log(aa1);
//   console.log(aa2);
//   console.log(aa3);
//   console.log(aa4);
//   console.log(aa5);
// }

/*10. Using Multiple Operators [4 types] */

// {
//     let a=10
//     let b=20

//     console.log(a+b);
//     console.log(a==b);
//     console.log(a+=b);
//     console.log(a/b);
//     console.log(a||b);
//     console.log(a<b);
//     console.log(a>=b);
//     console.log(a**b);
// }


/*11. Complex Assignments[2 types] */

// {
//     let a=10
//     let b=20

//     console.log(a <= b);
//     console.log(a >= b);
//     console.log(a == b);
// }

/* 1 to 5  if ..else progam */

/* 1. Check if a number is odd or even in JavaScript */

// {
//     let number = prompt("enter the number")

//     if (number % 2 == 0){
//         console.log("number is even");
//     }
//     else{
//         console.log("number is odd");
//     }
// }

/* 2. Find the larger of two number */

// {
//     let number1 = prompt("enter the number1")
//     let number2 = prompt("enter the number2")

//     if(number1>number2){
//         console.log(`number1 is larger ${number1}>${number2}`);
//     }else{
//         console.log(`number2 is larger ${number2}>${number1}`);
//     }

// }

/* 3. Perform arithmetic operations on two numbers */

// {
//     let number1 = prompt("enter the number1")
//     let number2 = prompt("enter the number2")

//     let number3 = number1 ** number2

//     console.log(number3);
// }

/* 4. Find the grade for input marks */

// {
//     let number1 = prompt("enter the marks of subject1")
//     let number2 = prompt("enter the marks of subject2")
//     let number3 = prompt("enter the marks of subject3")
//     let number4 = prompt("enter the marks of subject4")
//     let number5 = prompt("enter the marks of subject5")

//     let total = total(number1 + number2 + number3 + number4 + number5)

//     console.log(`total is = ${total}`);

//     let per = (total / 5) * 100

//     if (per > 35) {
//         console.log(`student is failed`);
//     }
//     else if (per < 60) {
//         console.log(`gradeis C`);
//     }
//     else if (per < 80) {
//         console.log(`gradeis B`);
//     }
//     else if (per < 90) {
//         console.log(`gradeis A`);
//     }
// }

/* 5. Sort three numbers */

// {
//     let number = [60, 40, 20]

//     let sort = number.sort()

//     console.log(sort);
// }


/* JAVASCRIPT LOGICAL PROGRAM */

// Evaluate each of the following JavaScript expressions and show the value.

// 1. ‐9*3 ‐27
// 2. “Value is “+ 50 “value is 50”
// 3. 17 % 5 2
// 4. 5 % 17 5
// 5. 5/10 0.5
// 6. (4 == 4) true
// 7. (4! = 5) true
// 8. (7 <= 8) true

/* 1. ‐9*3 = ‐27 */

// {
//     let number1 = prompt("enter the first value")
//     let number2 = prompt("enter the second value")

//     let result = -number1 * number2

//     console.log(result);

// }

/* 2. “Value is “+ 50  = “value is 50” */

/* 3. 17 % 5 = 2 */

// {
//     let number1 = prompt("enter the first value")
//     let number2 = prompt("enter the second value")

//     let result =  number1 % number2

//     console.log(result);

// }

/* 4. 5 % 17 5 */
// {
//     let number1 = prompt("enter the first value")
//     let number2 = prompt("enter the second value")

//     let result =  number1 % number2

//     console.log(result);

// }

/* 5. 5/10 =  0.5 */

// {
//     let number1 = prompt("enter the first value")
//     let number2 = prompt("enter the second value")

//     let result =  number1 / number2

//     console.log(result); 
// }

/*  6. (4 == 4)  = true */

/* 7. (4! = 5) true */

{
    let number1 = prompt("enter the first value")
    let number2 = prompt("enter the second value")

    let result =  number1 != number2

    console.log(result); 
    
}