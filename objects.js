class Employee{
    #empname
    #empno

constructor(empname,empno){

    this.#empname=empname
    this.#empno=empno
}
getDetails(){
    console.log(`emp is${this.#empname}`)
}
}

let E=new Employee("ravi",1)
E.getDetails()

//optional chaining
class Person={
    pid:100
    pname:"sandeep"
}
//By using ?
//console.log(person.marks?length) //undefined length
//-->nullishing
//BY using ?? 
//console.log(person.marks?length?? "marks not available") //undefined length


