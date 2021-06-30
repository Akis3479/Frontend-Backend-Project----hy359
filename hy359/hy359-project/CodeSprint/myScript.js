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

//Maps

var location;

var countryName = document.getElementById("country");
var town = document.getElementById("town");
var address = document.getElementById("address");


var button = document.getElementById("submit");
button.addEventListener("click")


function locationAsk(){
    var url = "https://nominatim.openstreetmap.org/search.html?limit=1&street="+address.value+"&city="+town.value+"&country="+country.value+"&format=json";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            if (list[0] != null){
                alert("location failed");
            }
            else{
                alert("asdasd");
            }

          }

    }
}
