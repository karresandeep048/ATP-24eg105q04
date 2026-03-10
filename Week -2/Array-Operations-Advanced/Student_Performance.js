//Student Performance Dashboard
   const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//1. filter() students who passed (marks ≥ 40)
let passed=students.filter((student)=>student.marks>=40)
console.log(passed)
  //2. map() to add a grade field
              //≥90 → A
              //≥75 → B
              //≥60 → C
              //else → D
const gradedStudents = students.map(s => ({
  s,
  grade:
    s.marks >= 90 ? "A" :
    s.marks >= 75 ? "B" :
    s.marks >= 60 ? "C" : "D"
})); 
console.log(gradedStudents)
//3. reduce() to calculate average marks
const averageMarks =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;
  console.log(averageMarks)
  //4. find() the student who scored 92
  let r=students.find(student=>student.marks==92)
  console.log(r)
   //5. findIndex() of student "Kiran"
  let index=students.findIndex(student=>student.name=="Kiran")
  console.log(index)