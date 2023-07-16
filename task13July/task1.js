


let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));gap: 15px;  padding: 15px;";


let nameArr = ["razan" , "sereen" , "Ahmad" , "ali"]
let ageArr = [20,25,30,22]


  for (let i = 0; i < 4; i++) {

  let cart = document.createElement("div");
  cart.className = "cart";


  let span1 = document.createElement("span");
  let spanName = document.createTextNode(`Name: ${nameArr[i]} `);


  let span2 = document.createElement("span");
  let spanAge = document.createTextNode(`Age: ${ageArr[i]}`);



  let image = document.createElement("img");
  image.src ="./images/image.jpg"
  image.style="width:200 ; height:200 "



  
  
  span1.appendChild(spanName);
  span2.appendChild(spanAge);
  cart.appendChild(span1);
  cart.appendChild(span2);
  cart.appendChild(image);
  content.appendChild(cart);


 
  cart.style.cssText =
    "display: flex; flex-direction: column; flex-wrap: wrap; gap: 10px; align-items: center; padding: 15px; background-color: #fff; border-radius: 4px; box-shadow: rgb(0 0 0 / 9%) 1px 1px 10px 1px; font-size: 13px; color: rgb(153, 153, 153);";
  span1.style.cssText = "font-size: 40px;  color: #000  ";
  span2.style.cssText = "font-size: 40px;  color: #000  ";
  
}

document.body.appendChild(content);


