// let cancelInterval = document.querySelector("#cancelInterval")
// let cancelTimeout = document.querySelector("#cancelTimeout")
// let timeoutRef;
// let intervalRef;
// let timeoutTime = prompt("please set a timer (in Seconds)")
// let intervalTime = prompt("How long you wanna wait in between?")
// let quotes = ["kind","smart","funny","depth","Blondes"]

// function timerSetter(time, type){
//    let parsedTime = parseInt(time.substring(0,time.indexOf(" ")));
//    if(!isNaN(parsedTime)){
//     parsedTime *= 1000;

//     if(type === "timeout"){
//         timeoutRef = setTimeout(alertRandomQuote,parsedTime)

//     }
//     else{
//         intervalRef = setInterval(alertRandomQuote,parsedTime)

//     }
//    }
//    else{
//        timeoutTime;
//    }
// };

// function alertRandomQuote(){
//     let maxIndex = quotes.length - 1;
//     let indexToChoose = Math.floor(Math.random() * maxIndex)
//     alert(quotes[indexToChoose])
// }

// timerSetter(timeoutTime, "timeout")

// timerSetter(intervalTime, "interval")

// cancelInterval.addEventListener("click", ()=>{
//     clearInterval(intervalRef);
// });
// cancelTimeout.addEventListener("click", ()=>{
//     clearTimeout(timeoutRef);
// });


let firstName = prompt('whats your first name')

sessionStorage.setItem("firstName", firstName)