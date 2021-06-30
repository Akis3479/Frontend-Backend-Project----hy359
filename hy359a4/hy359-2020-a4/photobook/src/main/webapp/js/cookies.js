$(document).ready(function () {

    var name = null;
    var nameEQ = "User" + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) name = c.substring(nameEQ.length, c.length);
    }
    console.log(name);


    if (name != null) {
        $.post(
            "cookies",
      {
      name : name
      },
      (data,status,jq) => {
        console.log(data);
        console.log(status);
        console.log(jq);
        if (data === false){
            $("#logInCont").show();
        }
        else{
            $("#main").show();
            $("#logInCont").hide();
            $("#navbar").show();
            $("#home").css("background-color", "#414141");
            var userName = data.userName;
            $("#userNLog2").text("Username: " + userName);
            var email = data.email;
            $("#emailLog2").text("Email: " + email);
            var firstName = data.firstName;
            $("#firstNameLog2").text("First name: " + firstName);
            var lastName = data.lastName;
            $("#lastNameLog2").text("Last name: " + lastName);
            var birthday = data.birthDate;
            $("#birthdayLog2").text("Date of Birth: " + birthday);
            var gender = data.gender;
            $("#genderLog2").text("Gender: " + gender);
            var country = data.country;
            $("#countryLog2").text("Country: " + country);
            var town = data.town;
            $("#townLog2").text("Town: " + town);
            var address = data.address;
            $("#addressLog2").text("Address: " + address);
            var interests = data.interests;
            $("#interestLog2").text("Interests: " + interests);
            var info = data.info;
            $("#infoLog2").text("Extra info: " + info);
        }
    }
    );
    }
});