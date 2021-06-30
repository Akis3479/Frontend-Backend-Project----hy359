$(document).ready(function () {

    $(".photo_btn").click(function () {
        $("#photo_area").show();
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var video = document.getElementById('video');
        var mediaConfig = {
        video: true,
      };
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(mediaConfig).then(function (stream) {
          video.srcObject = stream;
          video.onloadedmetadata = function (e) {
            video.play();
          };
        });
      }

      document.getElementById('snap').addEventListener('click', function () {
        context.drawImage(video, 0, 0, 400, 280);
        state.photoSnapped = true; // photo has been taken
      });
      if (state.photoSnapped) {
        var canvas = document.getElementById('canvas');
      }

      
      });
});