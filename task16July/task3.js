

let fname = document.getElementById('fname');

fname.addEventListener("input", function () {

    const regexfname = /^[^\d]+$/;
    
    if(regexfname.test(fname.value)){
        //console.log("Correct Name")
        document.getElementById('sfname').innerHTML="Correct Name"

    }else{
        //console.log("Numbers are not allowed");
        document.getElementById('sfname').innerHTML="Numbers are not allowed"
    }

});

//---------------------------------------------

let lname = document.getElementById('lname');

lname.addEventListener("input", function () {

    const regexlname = /^[^\d]+$/;
   
    if(regexlname.test(lname.value)){
        console.log("Correct Name")
    }else{
        console.log("Numbers are not allowed");
    }

});

//---------------------------------------------
let bdate = document.getElementById('bdate');

bdate.addEventListener("input", function () {

    const regexbdate = /^\d{2}\/\d{2}\/\d{4}$/;
    

    if(regexbdate.test(bdate.value)){
        console.log("Correct Date Format")
        document.getElementById('sbdate').innerHTML="Correct Date Format"
    }else{
        console.log("InCorrect Date Format");
        document.getElementById('sbdate').innerHTML="InCorrect Date Format"

    }

});

//---------------------------------------------
let email = document.getElementById('email');

email.addEventListener("input", function () {

    const regexemail = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.com$/;

    if(regexemail.test(email.value)){
        //console.log("Valid Email")
        document.getElementById('sbdate').innerHTML="Valid Email"
    }else{
        //console.log("InValid Email");
        document.getElementById('sbdate').innerHTML="InValid Email"
    }

});

//---------------------------------------------
let confemail = document.getElementById('confemail');

confemail.addEventListener("input", function () {

    if(confemail.value == email.value){
        console.log("Match Email")
    }else{
        console.log("Email Not Matching");
    }

});

//---------------------------------------------

let pass = document.getElementById('pass');

pass.addEventListener("input", function () {

    const regexpass =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    
    if(regexpass.test(pass.value)){
        console.log("Valid Password")
    }else{
        console.log("InValid Password");
    }

});

//---------------------------------------------
let confpass = document.getElementById('confpass');

confpass.addEventListener("input", function () {

    if(confpass.value == pass.value){
        console.log("Match Password")
    }else{
        console.log("Password Not Matching");
    }

});

//---------------------------------------------