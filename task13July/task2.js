let box = document.createElement('div');
let header = document.createElement('h2');
let headerText = document.createTextNode('Can i help you?');

box.setAttribute('class', 'box');
header.setAttribute('class', 'header');

header.appendChild(headerText);
box.appendChild(header);
document.body.appendChild(box);


function hover(){
    header.textContent = ("Hello World !");
}
function leaveHover(){
    header.textContent = ("Can i help you?");
}

box.addEventListener("mouseover", hover);
box.addEventListener("mouseleave", leaveHover);


box.style = "border: 1px solid black; background: yellow; text-align: center; display: inline-block;";
header.style = "width: 500px;";