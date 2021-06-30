$(document).ready(function () {
    var name = null;
    var del = 0;
    var snapped = false;
    var nameEQ = "User" + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) name = c.substring(nameEQ.length, c.length);
    }

    console.log(name);
    $(".post_btn").hover(function () {
        $("#post").css("background-color", "#373737");

    },
        function () {
            $(".post_btn").css("background-color", "transparent");
        });
    $("#snap").click(function () {
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
            var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
            var image = canvas.toDataURL('image/jpeg', 1.0).split(',')[1];
            if (snapped == false) { image = ""; }
            if (message != "") {
                $.post(
                    "mypost",
                    {
                        post: message,
                        user: username,
                        lon: lon,
                        lat: lat,
                        time: timestamp,
                        image_base64: image,
                        typeU: "userpost"

                    },
                    (data, status, jq) => {
                        console.log(data);
                        console.log(status);
                        console.log(jq);
                        $("#text1_post").text(data.description);
                        $("#post1_username").text(data.userName);
                        $("#post1_info").text(data.createdAt);
                        console.log(data.description);
                        $("#text_post").val("");
                        if (snapped == true) {
                            document.getElementById('img1').setAttribute('src', data.imageBase64);
                        } else {
                            document.getElementById('img1').setAttribute('src', "");
                        }
                    }
                );
            }
        }
    });

    $("#post_comment1").click(function () {
        var x = $("#add_comment1").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section1").html($("#comment_section1").html()+"<br/>");
        $("#comment_section1").text($("#comment_section1").text()+"Me : "+$("#add_comment1").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 0,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });


    $("#post_comment2").click(function () {
        var x = $("#add_comment2").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section2").html($("#comment_section2").html()+"<br/>");
        $("#comment_section2").text($("#comment_section2").text()+"Me : "+$("#add_comment2").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 1,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });

    $("#post_comment3").click(function () {
        var x = $("#add_comment3").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section3").html($("#comment_section3").html()+"<br/>");
        $("#comment_section3").text($("#comment_section3").text()+"Me : "+$("#add_comment3").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 2,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });

    $("#post_comment4").click(function () {
        var x = $("#add_comment1").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section4").html($("#comment_section4").html()+"<br/>");
        $("#comment_section4").text($("#comment_section4").text()+"Me : "+$("#add_comment4").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 3,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });

    $("#post_comment5").click(function () {
        var x = $("#add_comment5").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section5").html($("#comment_section5").html()+"<br/>");
        $("#comment_section5").text($("#comment_section5").text()+"Me : "+$("#add_comment5").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 4,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });

    $("#post_comment6").click(function () {
        var x = $("#add_comment6").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section6").html($("#comment_section6").html()+"<br/>");
        $("#comment_section6").text($("#comment_section6").text()+"Me : "+$("#add_comment6").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 5,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });

    $("#post_comment7").click(function () {
        var x = $("#add_comment7").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section7").html($("#comment_section7").html()+"<br/>");
        $("#comment_section7").text($("#comment_section7").text()+"Me : "+$("#add_comment7").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 6,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });

    $("#post_comment8").click(function () {
        var x = $("#add_comment8").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section8").html($("#comment_section8").html()+"<br/>");
        $("#comment_section8").text($("#comment_section8").text()+"Me : "+$("#add_comment8").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 7,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });

    $("#post_comment9").click(function () {
        var x = $("#add_comment9").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section9").html($("#comment_section9").html()+"<br/>");
        $("#comment_section9").text($("#comment_section9").text()+"Me : "+$("#add_comment9").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 8,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });
    $("#post_comment10").click(function () {
        var x = $("#add_comment10").val();
        d = new Date();
        var timestamp = d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
        $("#comment_section10").html($("#comment_section10").html()+"<br/>");
        $("#comment_section10").text($("#comment_section10").text()+"Me : "+$("#add_comment10").val())
        $.post("mycomment",
        {
            typeU : "addcomment",
            newComment : x,
            postNum : 9,
            time : timestamp

        },
        (data, status, jq) => {
            console.log(data);
            console.log(status);
            console.log(jq);
                }
        
        );
        
    });











    $("#map1").click(function () {
        var x = document.getElementById("showmap1");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 1-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap1").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap1");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else {$("#showmap1").hide();}
    });

    $("#map2").click(function () {
        var x = document.getElementById("showmap2");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 2-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap2").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap2");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else $("#showmap2").hide();
    });

    $("#map3").click(function () {
        var x = document.getElementById("showmap3");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 3-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap3").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap3");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else $("#showmap3").hide();
    });

    $("#map4").click(function () {
        var x = document.getElementById("showmap4");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 4-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap4").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap4");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else $("#showmap4").hide();
    });

    $("#map5").click(function () {
        var x = document.getElementById("showmap5");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 5-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap5").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap5");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else $("#showmap5").hide();
    });

    $("#map6").click(function () {
        var x = document.getElementById("showmap6");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 6-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap6").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap1");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else $("#showmap6").hide();
    });

    $("#map7").click(function () {
        var x = document.getElementById("showmap7");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 7-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap7").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap7");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else $("#showmap7").hide();
    });

    $("#map8").click(function () {
        var x = document.getElementById("showmap8");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 8-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap8").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap8");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else $("#showmap8").hide();
    });

    $("#map9").click(function () {
        var x = document.getElementById("showmap9");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 9-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap9").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap9");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else $("#showmap9").hide();
    });

    $("#map10").click(function () {
        var x = document.getElementById("showmap10");
        if (x.style.display == "none") {
            $.post("mypost",
                {
                    typeU: "returnposition",
                    postnum: 10-1
                },
                (data, status, jq) => {
                    console.log(data);
                    console.log(status);
                    console.log(jq);
                    $("#showmap10").show();
                    var map;
                    var lon = data.longitude;
                    var lat = data.latitude;
                    map = new OpenLayers.Map("showmap10");
                    map.addLayer(new OpenLayers.Layer.OSM());
                    var lonLat = new OpenLayers.LonLat(lon, lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject()
                        );

                    console.log(lonLat);

                    var zoom = 16;

                    var markers = new OpenLayers.Layer.Markers("Markers");
                    map.addLayer(markers);

                    markers.addMarker(new OpenLayers.Marker(lonLat));

                    map.setCenter(lonLat, zoom);
                }



            );
        }

        else {
            $("#showmap10").hide();
            
        }
    });

    $("#delete_acc").click(function () {

        $.post("mypost",
            {
                typeU: "deleteuser"
            },
            (data, status, jq) => {
                console.log("User Deleted");
                console.log(status);
                console.log(jq);
                $("#main").hide();
                $("#prof").hide();
                $("#allUsers").hide();
                $("#logInCont").show();
                $("#allUsersArray").text("");
                $("#profile").hide();
                $("#navbar").hide();
                $("#home").css("background-color", "transparent");
                $("#profile").css("background-color", "transparent");
                $("#UserNLog2").text("");
                $("#emailLog2").text("");
                $("#firstNameLog2").text("");
                $("#lastNameLog2").text("");
                $("#birthdayLog2").text("");
                $("#genderLog2").text("");
                $("#countryLog2").text("");
                $("#townLog2").text("");
                $("#addressLog2").text("");
                $("#interstesLog2").text("");
                $("#infoLog2").text("");
                document.cookie = "User=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/logbook";
            }

        );
    });

    $("#profile").click(function () {

        $("#onlineusers").hide();
        $("#text_post").val("");
        $("#main").hide();
        $("#prof").show();
        $("#profile").css("background-color", "#414141");
        $("#home").css("background-color", "transparent");
        $.post("mypost",
            {
                typeU: "profileposts"
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);

                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);

            }
        );



    });

    $("#post1").click(function () {
        del = 1;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });

    $("#post2").click(function () {
        del = 2;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });

    $("#post3").click(function () {
        del = 3;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });
    $("#post4").click(function () {
        del = 4;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });
    $("#post5").click(function () {
        del = 5;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });
    $("#post6").click(function () {
        del = 6;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });
    $("#post7").click(function () {
        del = 7;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });
    $("#post8").click(function () {
        del = 8;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });
    $("#post9").click(function () {
        del = 9;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
            }
        );
    });

    $("#post10").click(function () {
        del = 10;
        $.post("mypost",
            {
                typeU: "deletepost",
                postNum: del - 1
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                console.log(data);
                $("#text1").text(data[0].description);
                $("#date1").text(data[0].createdAt);
                $("#img1P").attr('src', data[0].imageBase64);

                $("#text2").text(data[1].description);
                $("#date2").text(data[1].createdAt);
                $("#img2P").attr('src', data[1].imageBase64);

                $("#text3").text(data[2].description);
                $("#date3").text(data[2].createdAt);
                $("#img3P").attr('src', data[2].imageBase64);

                $("#text4").text(data[3].description);
                $("#date4").text(data[3].createdAt);
                $("#img4P").attr('src', data[3].imageBase64);

                $("#text5").text(data[4].description);
                $("#date5").text(data[4].createdAt);
                $("#img5P").attr('src', data[4].imageBase64);

                $("#text6").text(data[5].description);
                $("#date6").text(data[5].createdAt);
                $("#img6P").attr('src', data[5].imageBase64);

                $("#text7").text(data[6].description);
                $("#date7").text(data[6].createdAt);
                $("#img7P").attr('src', data[6].imageBase64);

                $("#text8").text(data[7].description);
                $("#date8").text(data[7].createdAt);
                $("#img8P").attr('src', data[7].imageBase64);

                $("#text9").text(data[8].description);
                $("#date9").text(data[8].createdAt);
                $("#img9P").attr('src', data[8].imageBase64);

                $("#text10").text(data[9].description);
                $("#date10").text(data[9].createdAt);
                $("#img10P").attr('src', data[9].imageBase64);
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
                typeU: "editpost",
                postNum: nmbr - 1,
                newText: changes
            },
            (data, status, jq) => {
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
        $("#onlineusers").show();
        $("#main").show();
        $("#prof").hide();
        $("#home").css("background-color", "#414141");
        $("#profile").css("background-color", "transparent");
        $.post("mypost",
            {
                typeU: "allposts",
            },
            (data, status, jq) => {
                console.log(data);
                console.log(status);
                console.log(jq);
                $("#post1_username").text(data[0].userName);
                $("#text1_post").text(data[0].description);
                $("#post1_info").text(data[0].createdAt);
                $("#img1").attr('src', data[0].imageBase64);
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
            });
    })
});