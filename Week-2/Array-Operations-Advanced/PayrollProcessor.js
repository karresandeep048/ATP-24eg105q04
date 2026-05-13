//Employee Payroll Processor
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//1. filter() employees from IT department
let emps=employees.filter(employee=>employee.department=="IT")
console.log(emps)
 //2. map() to add:
    //netSalary = salary + 10% bonus
const result=employees.map(employee=>({
    ...employee,
    netsalary: employee.salary+0.01*employee.salary
    

}))
console.log(result)
//3. reduce() to calculate total salary payout
const totalSalary=employees.reduce((accumulator,emp)=>accumulator+emp.salary,0)
console.log("Total Salary:",totalSalary)
//4. find() employee with salary 30000
let r=employees.find(employee=>employee.salary=="30000")
console.log(r)
 // 5. findIndex() of employee "Neha"
let index=employees.findIndex(employee=>employee.name=="Neha")
console.log(index)