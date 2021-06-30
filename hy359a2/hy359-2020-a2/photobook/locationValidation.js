//Maps


var button = document.getElementById("address");
button.addEventListener("blur",function(){
    if(button.value != '')  {
        var countryName = document.getElementById("country");
        var town = document.getElementById("town");
        var address = document.getElementById("address");

        var url = "https://nominatim.openstreetmap.org/search.php?limit=1&street="+address.value+"&city="+town.value+"&country="+countryName.value+"&format=json";
        var myRequest = new XMLHttpRequest();
        myRequest.open("GET", url);
        myRequest.onload = function(){
            var myData = JSON.parse(myRequest.responseText);   
            addressValidation(myData);
        };
        myRequest.send();
    }
    else{
        document.getElementById("mapholder").innerHTML = "";        // clear all data of map
        
    }
});

//Address validation and map creation 

function addressValidation(data){
    if(data[0] == null){
        address.setCustomValidity("Wrong address!");
        
    }
    else{
        address.setCustomValidity('');
        var lon = data[0].lon;
        var lat = data[0].lat;
        console.log(lat);
        var map;
        map = new OpenLayers.Map("mapholder");
        map.addLayer(new OpenLayers.Layer.OSM());

        var lonLat = new OpenLayers.LonLat(lon,lat)
            .transform(
                new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                map.getProjectionObject() // to Spherical Mercator Projection
            );
        
            console.log(lonLat);
            
        var zoom=16;

        var markers = new OpenLayers.Layer.Markers( "Markers" );
        map.addLayer(markers);
        
        markers.addMarker(new OpenLayers.Marker(lonLat));
        
        map.setCenter (lonLat, zoom);
    }
}

//Function for the map button 
function showHide(){
    var btn = document.getElementById("mapholder");
        if (btn.style.display === "none") {
            btn.style.display = "block";
        }
        else {
            btn.style.display = "none";
        }
    }


    
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log("Geolocation is not supported by this browser.");
                //x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var country , city , road ; 

            var url = "https://nominatim.openstreetmap.org/reverse.php?lat="+lat+"&lon="+lon+"&zoom=18&format=jsonv2";
            var myRequest = new XMLHttpRequest();
            myRequest.open("GET", url);
            myRequest.onload = function(){
                var myData = JSON.parse(myRequest.responseText);  
                city = myData.address.city;
                country = myData.address.country;
                road = myData.address.neighbourhood;
                console.log();
                document.getElementById("address").value = road;
                document.getElementById("country").value = country;
                document.getElementById("town").value = city;
            };
            
            myRequest.send();
        }
     