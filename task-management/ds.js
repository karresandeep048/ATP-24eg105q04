let emp{
    eid:100,
    company:"cts",
    address:{
        city:"hyd"
    }
}
let {eid,company,address:{city}}=emp
console.log(eid,company,city )