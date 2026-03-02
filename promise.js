futurecondition=false
const promisesobj=new Promise((fulfilled,rejected)=>{
setTimeout(()=>{


    if (futurecondition==true){

    
fulfilled("i have sent the money to u")
}
else{
    rejected("sorry")
}
},5000)
})
promisesobj
.then((message)=>console.log(message))
.catch((errormessage)=>console.log(errormessage))

