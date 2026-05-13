//Show “OTP Sent Successfully”
//Start 10-second countdown
 //Allow resend only after countdown ends
console.log("OTP sent Sucessfully")
let seconds=10
 let Interval=setInterval(()=>{

    seconds--;
    console.log(seconds)
    if(seconds==0){
        console.log("resend Otp")
        clearInterval(Interval)
    }
},1000)