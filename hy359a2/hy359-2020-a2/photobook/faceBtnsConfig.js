
var option = document.getElementById("username");
option.addEventListener("blur",function(){
    localStorage.setItem("userStorage",option.value);
    console.log(option.value);
     var radio = document.getElementById("saveDiv");
        if (radio.style.display === "none" && option.value != '') {
            radio.style.display = "block";
        }
        else {
            radio.style.display = "none";
            document.getElementById("cameraFrame").style.display = "none";
            document.getElementById("cameraFrame").src="";
        }
});


function showCameraFrame(){
    var camFr = document.getElementById("cameraFrame");
        console.log(camFr.value);
        if (camFr.style.display === "none") {
            camFr.style.display = "block";
            camFr.src="face++/index.html"
        }
        else {
            camFr.style.display = "none";
            }
};
