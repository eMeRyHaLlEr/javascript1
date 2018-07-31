 let loginForm = document.forms.loginForm
let emailInput = loginForm.email
let passwordInput = loginForm.password;

 emailInput.addEventListener("keydown", e => {
   console.log(e.target.value);
    // e.target.value //what is being typed
 });

// loginForm.addEventListener("submit", e => {
//     e.preventDefault();
//     console.log(e);
//     loginForm.reset();
// })
// let favorites = ["His Girlfriend"]
function listItems(){
    console.log(this)
    alert(`${this.name} loves ${this.favorites[0]}`)
}
//listItems();
let user = {
    name: "Emery",
    cart: [],
    coupons: [],
    favorites: ['Brielle'],
    listFavorites: listItems

}

//implicit this binding
user.listFavorites();

let jr = {
    name: "Juniro kujo",
    cart: ["platinum silver"],
    coupons: ["star"],
    favorites : ["joestar"],
}

listItems.call(jr);