let sentence = new String("hi dickbags")
let number = new Number(42)

//console.log(Object.getPrototypeOf(sentence))

let dude ={ //most Basic way to create an object
    catchPhrase: "Where's My car?",
    firstName: "Big",
    LastName: "Lebowski",
    age:Infinity
};
console.log(Object.getPrototypeOf(dude))

function User(name,email,password,favorites,cart){
    this.name= name;
    this.password = password;
    this.email = email;
    this.favorites = favorites;
    this.cart = cart;
}

let cody = new User("Cody", "code-man5000@gmail.com","123456",[],[]);
console.log(cody);

let ryeker = new User( "Ryeker", "best_teacher@truth.com", "11111" ,[],[])
ryeker.isAdmin = true

console.log(ryeker)

let userForm = document.forms.userForm;


userForm.addEventListener("submit", e =>{
    e.preventDefault();
    
    let Rando = new User(userForm.name.value, userForm.email.value, userForm.password.value,[],[])
    console.log(Rando)
})


User.prototype.calculateCartTotal =  function(){
    let total = 0
    this.cart.forEach(item =>{
        
        total += item.price;
    });
    return total;
}

