// const div = document.querySelector(".myDiv") ;

// //console.log(div.textContent); //returns the text in all children

// //div.textContent = 'git gud' // affects the value of text within an element

// //console.log(div.innerHTML)

// let newH1 = document.createElement('h1');
// newH1.textContent = 'hello you skrubs';
// div.appendChild(newH1);

// let newH2 = document.createElement ('h2')

// newH2.textContent = 'sexy samich time';
// div.insertBefore(newH2,newH1);
let body = document.querySelector("body");
let script = document.querySelector("script");
let newP = document.createElement('p');

for(let i = 1; i <= 100; i++) {
    if(i % 3=== 0 && i% 5 === 0) {
        newP.textContent = "FizzBuzz";
    } else if (i % 3 ===0) {
        newP.textContent = "Fizz";
    } else if (i % 5 === 0){
        newP.textContent = "Buzz";
    } else {
        newP.textContent = i;
    }
    body.insertBefore(newP, Script);
}

