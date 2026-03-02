let Person={
    name:"ravi",
    age:20,
    address:{
        city:"hyd",
        pin:100
    }
}
//shallow copy
//let copyPerson={...Person}
//Deep copy
let copyPerson=structuredClone(Person)
Person.name="sam"
Person.city="hh"

console.log(copyPerson)
console.log(Person)
//Add elements/properties while copying
let arr[1,2,3]
let carr=[...]
