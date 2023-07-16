


let font = document.querySelectorAll("select");
let text = document.querySelector("p");

font[0].addEventListener("change", function(){

    if(font[0].value == "Times New Roman"){
        text.style.fontFamily = "Times New Roman";
    }
    else if(font[0].value == "Fantasy"){
        text.style.fontFamily = "Fantasy";
    }

});


font[1].addEventListener("change", function(){

    if(font[1].value === "10px"){
        text.style.fontSize = "10px";
    }
    else if(font[1].value === "15px"){
        text.style.fontSize = "15px";
    }

});


let active = document.querySelectorAll("input");

for(let i = 0; i < active.length; i++) {

    active[i].addEventListener('change', function() {

        if(active[i].checked) {

            if(active[i].id === "italic") {
                text.style.fontStyle = "italic";
            }
            
            else if (active[i].id === "bold") {
                text.style.fontWeight = "bold";
            }
            else {
                text.style.textDecoration = "underline";
            }

        }
        else {
            text.style.fontStyle = "normal";
            text.style.fontWeight = "normal";
            text.style.textDecoration = "none";  
        }
    });

}