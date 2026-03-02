// Filter Method (used to filter the elements based on the condition)
let testdata=[30,40,50,90,100];
let r1=testdata.filter((element)=>40);
console.log(r1);
let r2=testdata.filter((element)=> element>50 && element<100);
console.log(r2);
// Map Method (used to make the modifications)
let r3=testdata.map((element)=> element+10); // add 10 to each element in the array
console.log(r3);
// Add 10 for  greater than 50 and substact 10 for less than 50
 const r4=testdata.map((element)=> element>50 ? element+10 : element-10);
console.log(r4);
const r5=testdata.map(element=>{
    if(element>50){
        return element+10;
    }
    else{
        return element-10;
    }
}) 
console.log(r5);
const sum=testdata.reduce((accumulator,element)=> accumulator+element); // 0 is the initial value of the accumulator
console.log(sum);
//find small
const small=testdata.reduce((accumulator,element)=>accumulator<element ? accumulator : element); 

console.log(small);
const small1=testdata.reduce((accumulator,element)=>{
    if(accumulator<element){
        return accumulator;
    }
    else{
        return element;
    }
})
console.log(small1);
//find large
const large=testdata.reduce((accumulator,element)=>accumulator>element ? accumulator : element); // 0 is the initial value of the accumulator
console.log(large);
const large1=testdata.reduce((accumulator,element)=>{
    if(accumulator>element){
        return accumulator;
    }
    else{
        return element;
    }
})
console.log(large1);
let el=testdata.find (element=>element==50); // find method is used to find the first element that satisfies the condition
console.log(el);
let data=[1,5,6,3];
let newArray=data.sort((a,b)=>a-b); // sort method is used to sort the elements in ascending order
console.log(newArray);
let newArray1=data.sort((a,b)=>b-a);
console.log(newArray1); // sort method is used to sort the elements in descending order 