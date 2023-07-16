

let country =document.getElementById("selector");

country.addEventListener("click", flags);

function flags(){
    if(country.value=="palestine"){
        document.getElementById("image").src = "./images/palestine.jpg"}
   else {
    document.getElementById("image").src="./images/jordan.png"
   }
}