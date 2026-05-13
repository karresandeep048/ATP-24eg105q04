//Online Course Name Processor
const courses = ["javascript", "react", "node", "mongodb", "express"];
//filter() courses with name length > 5
let r1=courses.filter((course)=>course.length>5);
console.log(r1);
//map() to convert course names to uppercase
let r2=courses.map((course)=>course.toUpperCase());
console.log(r2);
//reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let r3=courses.reduce((acc,course)=> acc.toUpperCase() + " | " + course.toUpperCase());
console.log(r3);
//find() the course "react"
let r4=courses.find((course)=>course=="react");
console.log(r4);
//findIndex() of course "node"
let r5=courses.findIndex((course)=>course=="node");
console.log(r5);

