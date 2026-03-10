//Student Marks List
const marks = [78, 92, 35, 88, 40, 67];
let r1=marks.filter((mark)=>mark>=40); //1. filter() marks ≥ 40 (pass marks)
console.log(r1);
let r2=marks.map((mark)=>mark+5);//2. map() to add 5 grace marks to each student
console.log(r2);
const r3=marks.reduce((accumulator,element)=>accumulator>element ? accumulator : element);//3. reduce() to find highest mark
console.log(r3)
let r4=marks.find((mark)=>mark<40)// 4. find() first mark below 40
console.log(r4)
let r5=marks.findIndex((mark)=>mark==92) //5. findIndex() of mark 92
console.log(r5)