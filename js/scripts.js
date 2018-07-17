//ANONYMOUS
// function(string) {
//     //For ARGUMENTS/PARAMETERS

//     return string.toUpperCase();
// }

function addTwo(num){
    return num + 2;
}



//CALL SITE
console.log(addTwo(1));

//Function Declaration
function alertsAd() {
    alert('GTFO!!!!')
};

alertsAd();

//Function Expression
let adAlert = function(someString){
    confirm (someString)
};

adAlert('will you GTFO?')

let i=0
//recursive function
function checkYoSelf() {
    console.log(i);
    i++;
    if (i<10) checkYoSelf();
}

(arg1,arg2)=>{
    arg1('hello world')
    arg2('Godbye Cruel World')
}
 
arg3 =>{
    console.log(String);
}