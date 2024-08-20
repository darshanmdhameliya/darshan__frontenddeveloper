/* javascript Function Closures */

/* inside variable declare */
// means ke function ni inside variable declare kryo hoy to function gme tetli var call kro to teni value change -> ny thay <-
// {
//   function greek() {
//     let counter = 0;
//     return (counter += 1);
//   }

//   console.log(greek());
//   console.log(greek());
// }

/* outside variable declare */
// means ke function ni outside variable declare kryo hoy to function gme tetli var call kro to teni value change -> thase <-
// {
//   let counter = 0;
//   function greek() {
//     return (counter += 1);
//   }

//   console.log(greek());
//   console.log(greek());
// }

/* Nesting Function with ITFE */

//same top
// {
//   function count() {
//     return (function () {
//       let counter = 0;
//       return (counter += 1);
//     })();
//   }

//   console.log(count());
//   console.log(count());
//   console.log(count());
// }

/* ES6 modules Structure 

/* import , Export */

import { x, y } from "./demo.js";
console.log(x * y);


import { count } from "./demo.js";
console.log(count(2,4));

// export default ma {} ny aave
import counts from "./demo.js";
console.log(counts(2,4));