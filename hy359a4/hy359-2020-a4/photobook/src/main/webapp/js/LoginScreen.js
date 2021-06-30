$(document).ready(function(){
    $("#submitLogIn").click(function(){
        $("#wrongInfo").hide();
        type = "submitLogin";
        username = $("#username2").val();
        password = $("#pswLog").val();
        $.post(
                "infoCheck",
          {
          typeU : type,
          username : username,
          password : password
          },
          (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            if (data === false){
                console.log("Wrong Username or Password!");
                $("#wrongInfo").show();
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
    });
    $("#signOutBtn").click(function(){
        $("#main").hide();
        $("#prof").hide();
        $("#allUsers").hide();
        $("#logInCont").show();
        $("#allUsersArray").text("");
        $("#profile").hide();
        $("#navbar").hide();
        $("#home").css("background-color", "transparent");
        $("#profile").css("background-color", "transparent");
        document.cookie = "User=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/logbook";
    });
    
    //Display all users Function
    $("#displayUsers").click(function(){
        $.get( "allUsers", function( data ) {
            console.log(data);
            console.log(status);
            for(var i = 0; i<data.length ;i++){
                $("#allUsersArray").append(data[i]+"<br>");
            }
        });
        $("#allUsers").show();
        $("#logInSuc").hide();
        $("#return").click(function(){
            $("#allUsers").hide();
            $("#logInSuc").show();
        });
        
    });

    $.post("mypost",
        {
            typeU : "allposts",   
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            $("#post1_username").text(data[0].userName);
            $("#text1_post").text(data[0].description);
            $("#post1_info").text(data[0].createdAt);
            $("#img1").attr('src',data[0].imageBase64);
            $("#post2_username").text(data[1].userName);
            $("#text2_post").text(data[1].description);
            $("#post2_info").text(data[1].createdAt);
            $("#img2").attr('src', data[1].imageBase64);
            $("#post3_username").text(data[2].userName);
            $("#text3_post").text(data[2].description);
            $("#post3_info").text(data[2].createdAt);
            $("#img3").attr('src', data[2].imageBase64);
            $("#post4_username").text(data[3].userName);
            $("#text4_post").text(data[3].description);
            $("#img4").attr('src', data[3].imageBase64);
            $("#post4_info").text(data[3].createdAt);
            $("#post5_username").text(data[4].userName);
            $("#text5_post").text(data[4].description);
            $("#img5").attr('src', data[4].imageBase64);
            $("#post5_info").text(data[4].createdAt);
            $("#post6_username").text(data[5].userName);
            $("#text6_post").text(data[5].description);
            $("#img6").attr('src', data[5].imageBase64);
            $("#post6_info").text(data[5].createdAt);
            $("#post7_username").text(data[6].userName);
            $("#text7_post").text(data[6].description);
            $("#img7").attr('src', data[6].imageBase64);
            $("#post7_info").text(data[6].createdAt);
            $("#post8_username").text(data[7].userName);
            $("#text8_post").text(data[7].description);
            $("#img8").attr('src', data[7].imageBase64);
            $("#post8_info").text(data[7].createdAt);
            $("#post9_username").text(data[8].userName);
            $("#text9_post").text(data[8].description);
            $("#img9").attr('src', data[8].imageBase64);
            $("#post9_info").text(data[8].createdAt);
            $("#post10_username").text(data[9].userName);
            $("#text10_post").text(data[9].description);
            $("#img10").attr('src', data[9].imageBase64);
            $("#post10_info").text(data[9].createdAt);
        }
        
    );
    
});


