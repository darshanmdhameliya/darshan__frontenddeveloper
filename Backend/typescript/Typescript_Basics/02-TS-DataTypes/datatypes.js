// string
var employeeName = "John";
console.log(employeeName);
// number
var employeeSalary = 50000;
console.log("Salary : ".concat(employeeSalary));
// boolean
var isManager = true;
console.log("IsManager : ".concat(isManager));
var mobileOne = {
    brand: "Apple",
    price: 45000
};
mobileOne.brand = "Lenovo";
console.log(mobileOne);
// arrays
var techs = ["html", "css", "JavaScript"];
console.log(techs);
// Enum -> for const values
var Months;
(function (Months) {
    Months["JAN"] = "JANUARY";
    Months["FEB"] = "FEBRUARY";
    Months["MAR"] = "MARCH";
})(Months || (Months = {}));
console.log(Months.JAN);
// any
var abc = 10;
abc = 20;
abc = "test";
abc = true;
abc = {};
abc = [];
