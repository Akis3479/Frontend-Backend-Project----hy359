//Password Checking

var pass1 = document.getElementById("psw");
var pass2 = document.getElementById("pswRpt");

function passwordMismatch(){
    if(pass1.value != pass2.value){
        pass1.setCustomValidity("Passwords don't match");
    }
    else{
        pass1.setCustomValidity('');
    }
}

pass1.onchange=passwordMismatch;
pass2.onkeyup=passwordMismatch;

