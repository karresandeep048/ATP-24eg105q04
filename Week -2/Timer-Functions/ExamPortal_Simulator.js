//Immediately show: “Exam submitted successfully”
        //After 2 seconds → show: “Evaluating answers…”
        //After 4 seconds → show: “Result: Pass”
       console.log("Exam Submitted Succesfully")
        setTimeout(()=>{
console.log("Evaluating Answers...")
},2000)
setTimeout(()=>
{
    console.log("result:Pass")
},4000)
