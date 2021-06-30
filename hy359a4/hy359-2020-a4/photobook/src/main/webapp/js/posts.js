$(document).ready(function () {
    var name = null;
    var del=0;
    var snapped = false;
    var nameEQ = "User" + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) name = c.substring(nameEQ.length, c.length);
    }
    $(".post_btn").hover(function () {
        $("#post").css("background-color", "#373737");

    },
        function () {
            $(".post_btn").css("background-color", "transparent");
        });
    $("#snap").click(function (){
        snapped = true;
    });    
    $(".post_btn").click(function () {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFunction);
        } else {
            alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
        }
        $("#photo_area").hide();

        function successFunction(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
        

            var message = $("#text_post").val() + $("#text_post2").val();
            var username = name;
            d = new Date();
            var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth()+1) + " " + d.getHours()+":"+d.getMinutes();
            var image = canvas.toDataURL('image/jpeg', 1.0).split(',')[1];
            if (snapped == false){image = "";} 
            if (message != "") {
                $.post(
                    "mypost",
                    {
                        post: message,
                        user: username,
                        lon : lon,
                        lat : lat,
                        time : timestamp,
                        image_base64 : image,
                        typeU : "userpost"

                    },
                    (data,status,jq) => {
                        console.log(data);
                        console.log(status);
                        console.log(jq);
                            $("#text1_post").text(data.description);
                            $("#post_username").text(data.userName);
                            $("#post1_info").text(data.createdAt);
                            console.log(data.description);
                            $("#text_post").val("");
                            if (snapped == true){
                                document.getElementById('img1').setAttribute('src',data.imageBase64);
                            }else{
                                document.getElementById('img1').setAttribute('src',"");
                            }
                    }
                );
            }
        }
        });

    $("#profile").click(function () {

        $("#text_post").val("");
        $("#main").hide();
        $("#prof").show();
        $("#profile").css("background-color", "#414141");
        $("#home").css("background-color", "transparent");
        $.post("mypost",
        {
            typeU: "profileposts"
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
           
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);

        }
        );

        
        
    });

    $("#post1").click(function () { 
        del = 1;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });

    $("#post2").click(function () { 
        del = 2;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });

    $("#post3").click(function () { 
        del = 3;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });
    $("#post4").click(function () { 
        del = 4;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });
    $("#post5").click(function () { 
        del = 5;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });
    $("#post6").click(function () { 
        del = 6;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });
    $("#post7").click(function () { 
        del = 7;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });
    $("#post8").click(function () { 
        del = 8;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });
    $("#post9").click(function () { 
        del = 9;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });

    $("#post10").click(function () { 
        del = 10;
        $.post("mypost",
        {
            typeU : "deletepost",
            postNum : del-1
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(data[0].description);
            $("#date1").text(data[0].createdAt);
            $("#img1P").attr('src',data[0].imageBase64);
            
            $("#text2").text(data[1].description);
            $("#date2").text(data[1].createdAt);
            $("#img2P").attr('src',data[1].imageBase64);
            
            $("#text3").text(data[2].description);
            $("#date3").text(data[2].createdAt); 
            $("#img3P").attr('src',data[2].imageBase64);
            
            $("#text4").text(data[3].description);
            $("#date4").text(data[3].createdAt);  
            $("#img4P").attr('src',data[3].imageBase64);
            
            $("#text5").text(data[4].description);
            $("#date5").text(data[4].createdAt); 
            $("#img5P").attr('src',data[4].imageBase64);
            
            $("#text6").text(data[5].description);
            $("#date6").text(data[5].createdAt);  
            $("#img6P").attr('src',data[5].imageBase64);
            
            $("#text7").text(data[6].description);
            $("#date7").text(data[6].createdAt);
            $("#img7P").attr('src',data[6].imageBase64);
            
            $("#text8").text(data[7].description);
            $("#date8").text(data[7].createdAt);
            $("#img8P").attr('src',data[7].imageBase64);
            
            $("#text9").text(data[8].description);
            $("#date9").text(data[8].createdAt);
            $("#img9P").attr('src',data[8].imageBase64);
            
            $("#text10").text(data[9].description);
            $("#date10").text(data[9].createdAt);
            $("#img10P").attr('src',data[9].imageBase64);
        }
        );
    });

    $("#edit1").click(function () { 
        $("#txtarea1").show();
        $("#txtarea1").val($("#text1").text());
        $("#confirm1").show();
    });

    $("#edit2").click(function () { 
        $("#txtarea2").show();
        $("#txtarea2").val($("#text2").text());
        $("#confirm2").show();
    });

    $("#edit3").click(function () { 
        $("#txtarea3").show();
        $("#txtarea3").val($("#text3").text());
        $("#confirm3").show();
    });

    $("#edit4").click(function () { 
        $("#txtarea4").show();
        $("#txtarea4").val($("#text4").text());
        $("#confirm4").show();
    });

    $("#edit5").click(function () { 
        $("#txtarea5").show();
        $("#txtarea5").val($("#text5").text());
        $("#confirm5").show();
    });

    $("#edit6").click(function () { 
        $("#txtarea6").show();
        $("#txtarea6").val($("#text6").text());
        $("#confirm6").show();
    });

    $("#edit7").click(function () { 
        $("#txtarea7").show();
        $("#txtarea7").val($("#text7").text());
        $("#confirm7").show();
    });

    $("#edit8").click(function () { 
        $("#txtarea8").show();
        $("#txtarea8").val($("#text8").text());
        $("#confirm8").show();
    });

    $("#edit9").click(function () { 
        $("#txtarea9").show();
        $("#txtarea9").val($("#text9").text());
        $("#confirm9").show();
    });

    $("#edit10").click(function () { 
        $("#txtarea10").show();
        $("#txtarea10").val($("#text10").text());
        $("#confirm10").show();
    });

    $("#confirm1").click(function () { 
        $("#txtarea1").hide();
        $("#confirm1").hide();
        var changes = $("#txtarea1").val();
        var nmbr = 1;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text1").text(changes);
        }
        );
    });

    $("#confirm2").click(function () { 
        $("#txtarea2").hide();
        $("#confirm2").hide();
        var changes = $("#txtarea2").val();
        var nmbr = 2;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text2").text(changes);
        }
        );
    });

    $("#confirm3").click(function () { 
        $("#txtarea3").hide();
        $("#confirm3").hide();
        var changes = $("#txtarea3").val();
        var nmbr = 3;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text3").text(changes);
        }
        );
    });
    
    $("#confirm4").click(function () { 
        $("#txtarea4").hide();
        $("#confirm4").hide();
        var changes = $("#txtarea4").val();
        var nmbr = 4;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text4").text(changes);
        }
        );
    });

    $("#confirm5").click(function () { 
        $("#txtarea5").hide();
        $("#confirm5").hide();
        var changes = $("#txtarea5").val();
        var nmbr = 5;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text5").text(changes);
        }
        );
    });

    $("#confirm6").click(function () { 
        $("#txtarea6").hide();
        $("#confirm6").hide();
        var changes = $("#txtarea6").val();
        var nmbr = 6;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text6").text(changes);
        }
        );
    });

    $("#confirm7").click(function () { 
        $("#txtarea7").hide();
        $("#confirm7").hide();
        var changes = $("#txtarea7").val();
        var nmbr = 7;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text7").text(changes);
        }
        );
    });

    $("#confirm8").click(function () { 
        $("#txtarea8").hide();
        $("#confirm8").hide();
        var changes = $("#txtarea8").val();
        var nmbr = 8;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text8").text(changes);
        }
        );
    });

    $("#confirm9").click(function () { 
        $("#txtarea9").hide();
        $("#confirm9").hide();
        var changes = $("#txtarea9").val();
        var nmbr = 9;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text9").text(changes);
        }
        );
    });

    $("#confirm10").click(function () { 
        $("#txtarea10").hide();
        $("#confirm10").hide();
        var changes = $("#txtarea10").val();
        var nmbr = 10;
        $.post("mypost",
        {
            typeU : "editpost",
            postNum : nmbr-1,
            newText : changes
        },
        (data,status,jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
            console.log(data);
            $("#text10").text(changes);
        }
        );
    });


    $("#home").click(function () {
        $("#text_post2").val("");
        $("#main").show();
        $("#prof").hide();
        $("#home").css("background-color", "#414141");
        $("#profile").css("background-color", "transparent");
    });
    
});