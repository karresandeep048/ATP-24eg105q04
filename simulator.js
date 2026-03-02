//Immediately show: “Exam submitted successfully”
        //After 2 seconds → show: “Evaluating answers…”
        //After 4 seconds → show: “Result: Pass”
       console.log("Exam submited Succesfully")
        setTimeout(()=>{
console.log("evaluationg Answers...")
},2000)
setTimeout(()=>
{
    console.log("result:pass")
},4000)
