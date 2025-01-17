/* javascript dom model */

// {
//     // let dom1 = document.getElementsByClassName("text");

//   let dom1 = (document.getElementsByClassName("text")[1].style.backgroundColor ="red");

//   console.log();
// }

// {
//   let demo2 = document.getElementsByTagName("h1")[2];

//   demo2.style.backgroundColor = "green";

//   console.log(dom2);
// }

/* QuerySelector / QuerySelectorAll Method */

// {
//   let dom3 = document.getElementsByTagName(".text");

//   dom3.style.color = "red";

//   console.log(dom3);
// }

// {
//   let dom3 = document.querySelectorAll("#heading");

//   dom3.forEach((item) => {
//     item.style.color = "yellow";
//   });

//   console.log(dom3);
// }

// {
//   let dom4 = document.getElementById("heading");
//   dom4.classList.add("text");
//   console.log(dom4);
// }

// {
//   function addstyle() {
//     let dom4 = document.getElementById("heading");

//     dom4.classList.add("text");

//     console.log(dom4);
//   }
// }
// {
//   function removestyle() {
//     let dom4 = document.getElementById("heading");

//     dom4.classList.remove("text");

//     console.log(dom4);
//   }
// }
// {
//   function togglestyle() {
//     let dom4 = document.getElementById("heading");

//     dom4.classList.toggle("text");

//     console.log(dom4);
//   }
// }

/* state / Events */

/* 

mouse
keybord
windows

*/

/* addeventListener */

// addEventListener(type, listener)
// addEventListener(type, listener, options)
// addEventListener(type, listener, useCapture)

// {
//   let dom5 = document.getElementById("heading");

//   let Event = dom5.addEventListener("click", () => {
//     dom5.classList.add("text");
//   });
// }

{

  const checkbox = document.querySelector("#id-checkbox");

  checkbox.addEventListener("click", checkboxClick, true);

  function checkboxClick(e) {
    let warn = "preventDefault() won't let you check this!<br>";
    document.getElementById("output-box").innerHTML += warn;
  }
  e.preventDefault();

}


