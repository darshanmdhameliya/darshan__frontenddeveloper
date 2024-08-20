/* javascript AJAX */

// {
//     var https = new XMLHttpRequest();

//     https.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//         } else {
//         console.log("Page Not Found!");
//         }
//     };

//     https.open("GET", "./input.txt", true);
//     https.send();
// }

// {
//   var https = new XMLHttpRequest();

//   https.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//     }
//     if (this.readyState == 4 && this.status == 404) {
//       console.log("Page Not Found!");
//     }
//   };

//   https.open("GET", "./input.txt", true);
//   https.send();
// }

/* javascript Function Method */

/* Apply ,call ,Bind */

// The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).


// apply(thisArg)
// apply(thisArg, argsArray)

// complusry array[] ma write krvanu //line no:57

// {
//   let profile = {
//     firstname: 'darshan',
//     lastname: 'dhameliya'
//   }


//   function profileapply(a, b) {
//     console.log(`${a}=${b}  ${this.firstname} = ${this.lastname}`);
//   }

//   let Funcapply = profileapply.apply(profile, ['hi', 'how are you!'])

//   console.log(Funcapply);
// }

/* call method */
// Array[] Ma print kravi to undefine aave //line no: 76

// {
//   let profile = {
//     firstname: 'darshan',
//     lastname: 'dhameliya'
//   }


//   function profileapply(a, b) {
//     console.log(`${this.firstname}=${this.lastname}  ${a}=${b} `);
//   }

//   let Funcapply = profileapply.call(profile, 'hi', 'how are you!')

//   console.log(Funcapply);
// }

/* Bind method */

{
  const student1 = {
    name: "janvi",
    grade: "5",
    itroduction: function () {
      console.log(this.name + " student in grade " + this.grade + ".");
    },
  };

  const student2 = {
    name: "darshan",
    grade: "6",
  }

  const student3 = {
    name: "sweety",
    grade: "12",
  }

  let result = student1.itroduction.bind(student2)

  result();

}