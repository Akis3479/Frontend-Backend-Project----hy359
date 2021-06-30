$(document).ready(function(){
//Checking username validation 
    $("#username").blur(function(){
        data = $("#username").val();
        type = "username";
        $.ajax({url:"infoCheck",
            type : "POST",
            dataType : "json",
            data :{
                typeU : type,
                dataU : data
            },
            success : function(data, status, jq) {
                console.log(data);
                console.log(status);
                console.log(jq);
                $("#username")[0].setCustomValidity(""); 
                
            },
            error: function(data, status, jq) {
                console.log(data);
                console.log(status);
                console.log(jq);
                $("#username")[0].setCustomValidity(data.responseText); 
            }
        });
    });
    //Checking password
    $("#psw").blur(function(){
        data = $("#psw").val();
        type = "psw";
        $.post("infoCheck",{
            typeU : type,
            data : data
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                if (data === false){
                    $("#psw")[0].setCustomValidity("Invalid password"); 
                }
                else {
                    $("#psw")[0].setCustomValidity(""); 
                }
            }
        );
    });
    
//Checking password
    $("#pswRpt").blur(function(){
        data = $("#pswRpt").val();
        data2 = $("#psw").val();
        type = "pswRpt";
        $.post("infoCheck",{
            typeU : type,
            data : data,
            data2 : data2
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                if (data === false){
                    $("#pswRpt")[0].setCustomValidity("Password doesn`t match"); 
                }
                else {
                    $("#pswRpt")[0].setCustomValidity(""); 
                }
            }
        );
    });
    //Checking email  
        $("#email").blur(function(){
        data = $("#email").val();
        type = "email";
        $.post("infoCheck",{
            typeU : type,
            data : data
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                if (data === false){
                    $("#email")[0].setCustomValidity("Email already exists"); 
                }
                else {
                    $("#email")[0].setCustomValidity(""); 
                }
            }
        );
    });
    
    //Checking Name pattern (3-15)
    $("#name").blur(function(){
        data = $("#name").val();
        type = "name";
        $.post("infoCheck",{
            typeU : type,
            data : data
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                if (data === false){
                    $("#name")[0].setCustomValidity("Invalid Name"); 
                }
                else {
                    $("#name")[0].setCustomValidity(""); 
                }
            }
        );
    });
    
    //Checking SirName pattern (3-15)
    $("#sName").blur(function(){
        data = $("#sName").val();
        type = "sName";
        $.post("infoCheck",{
            typeU : type,
            data : data
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                if (data === false){
                    $("#sName")[0].setCustomValidity("Invalid Sirname"); 
                }
                else {
                    $("#sName")[0].setCustomValidity(""); 
                }
            }
        );
    });
    //Checking Town pattern (3-20)
    $("#town").blur(function(){
        data = $("#town").val();
        type = "town";
        $.post("infoCheck",{
            typeU : type,
            data : data
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                if (data === false){
                    $("#town")[0].setCustomValidity("Invalid Town"); 
                }
                else {
                    $("#town")[0].setCustomValidity(""); 
                }
            }
        );
    });
    
    //Creation of the User
    $("#submit").click(function(){
        type = "submit";
        username = $("#username").val();
        email = $("#email").val();
        psw = $("#psw").val();
        name = $("#name").val();
        sName = $("#sName").val();
        birthday = $("#birthday").val();
        d = new Date();
        strDate = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth()+1);
        sex = $("input[name='sex']:checked").val();
        country = $("#country").val();
        town = $("#town").val();
        address = $("#address").val();
        interests = $("#myTextArea").val();
        generalInfo = $("#generalInfo").val();
        $.post(
          "infoCheck",
          {
          typeU : type,
          username : username,
          email : email,
          psw :psw,
          name : name,
          sName : sName,
          birthday : birthday,
          strDate :strDate,
          sex : sex,
          country : country,
          town : town,
          address : address,
          interests : interests,
          generalInfo : generalInfo
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            var userName = data.userName;
            $("#userNLog").text("Username: " + userName);
            var email = data.email;
            $("#emailLog").text("Email: " + email);
            var firstName = data.firstName;
            $("#firstNameLog").text("First name: " + firstName);
            var lastName = data.lastName;
            $("#lastNameLog").text("Last name: " + lastName);
            var birthday = data.birthDate;
            $("#birthdayLog").text("Date of Birth: " + birthday);
            var gender = data.gender;
            $("#genderLog").text("Gender: " + gender);
            var country = data.country;
            $("#countryLog").text("Country: " + country);
            var town = data.town;
            $("#townLog").text("Town: " + town);
            var address = data.address;
            $("#addressLog").text("Address: " + address);
            var interests = data.interests;
            $("#interestLog").text("Interests: " + interests);
            var info = data.info;
            $("#infoLog").text("Extra info: " + info);
            }        
        );
        $("#logInCont").show();
        $("#signUpCont").hide();
        /*$("#signOutBtn").click(function(){
            $("#SucReg").hide();
            $("#logInCont").show();
            $("#signOutBtn").hide();
        });*/
    });
});

