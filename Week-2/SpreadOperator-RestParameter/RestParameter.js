//Rest Parameter
function findsum(...a){
let arr=a.reduce((accumulator,element)=>accumulator+element)
return arr;
}
result=findsum(10,20,30)
console.log(result)
