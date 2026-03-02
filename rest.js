function findsum(...a){
let arr=a.reduce((accumulator,element)=>accumulator+element)
return arr;
}
r=findsum(10,20,30)
console.log(r)
