const div = document.querySelector(".myDiv") ;

//console.log(div.textContent); //returns the text in all children

//div.textContent = 'git gud' // affects the value of text within an element

//console.log(div.innerHTML)

let newH1 = document.createElement('h1');
newH1.textContent = 'hello you skrubs';
div.appendChild(newH1);

let newH2 = document.createElement ('h2')

newH2.textContent = 'sexy samich time';
div.insertBefore(newH2,newH1);