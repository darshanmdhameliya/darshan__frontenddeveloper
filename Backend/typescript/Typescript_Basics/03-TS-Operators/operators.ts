let marks:number = 65;
let results:string = "";
if(marks <= 35){
    results = "You failed the exam";
}
else{
    results = "You Pass the exam";
}
console.log(results);

// print numbers
results = "";
for(let i:number = 0; i<=10; i++){
    results += `${i} `;
}
console.log(results);

