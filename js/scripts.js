// //ANONYMOUS
// // function(string) {
// //     //For ARGUMENTS/PARAMETERS

// //     return string.toUpperCase();
// // }

// function addTwo(num){
//     return num + 2;
// }



// //CALL SITE
// console.log(addTwo(1));

// //Function Declaration
// function alertsAd() {
//     alert('GTFO!!!!')
// };

// alertsAd();

// //Function Expression
// let adAlert = function(someString){
//     confirm (someString)
// };

// adAlert('will you GTFO?')

// let i=0
// //recursive function
// function checkYoSelf() {
//     console.log(i);
//     i++;
//     if (i<10) checkYoSelf();
// }

// (arg1,arg2)=>{
//     arg1('hello world')
//     arg2('Godbye Cruel World')
// }
 
// arg3 =>{
//     console.log(String);
// }

//Try it out

function calcLiftimeSupply(currentAge,dailyUse, maxAge){
    if(isNaN(currentAge) && isNaN(dailyUse) && isNaN(maxAge){
        alert('Please Give Me A Number!!!')
    } 
    else{
        
    let supply = (maxAge-currentAge)*(dailyUse * 365);
    alert(`you will need ${supply} slices of Bread to last until you're ${maxAge}`);}
    
}
let age = prompt('How Old Are You?')
let Use = prompt('How often do you eat bred per day?')
let death = prompt ('How long do you think you will live?')
calcLifetimeSupply(age,Use,death)