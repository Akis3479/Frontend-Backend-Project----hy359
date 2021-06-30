$(document).ready(function(){
    $("#username").blur(function(){
        data = $("#username").val();
        ajaxRequest(data);
    })
})


function ajaxRequest(data){
    $.post("demo_test_post.asp",data,function(data,status){
        alert("Data: " + data + "\nStatus: " + status);})
}