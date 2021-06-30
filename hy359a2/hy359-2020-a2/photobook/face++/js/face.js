'use strict';

/*
    Author: Panagiotis Papadakos papadako@csd.uoc.gr

    Try to read this file and understand what the code does...
    Then try to complete the missing functionality

    For the needs of the hy359 2020 course
    University of Crete

    At the end of the file there are some comments about our trips

*/

var faceId;


/*  face recognition that is based on faceplusplus service */
var faceRec = (function () {
  
  // Object that holds anything related with the facetPlusPlus REST API Service
  var faceAPI = {
    apiKey:  'l2jNgKbk1HXSR4vMzNygHXx2g8c_xT9c',
    apiSecret: '2T6XdZt4EYw-I7OhmZ6g1wtECl81e_Ip',
    app: 'hy359',
    // Detect
    // https://console.faceplusplus.com/documents/5679127
    detect: 'https://api-us.faceplusplus.com/facepp/v3/detect',  // POST
    // Set User ID
    // https://console.faceplusplus.com/documents/6329500
    setuserId: 'https://api-us.faceplusplus.com/facepp/v3/face/setuserid', // POST
    // Get User ID
    // https://console.faceplusplus.com/documents/6329496
    getDetail: 'https://api-us.faceplusplus.com/facepp/v3/face/getdetail', // POST
    // addFace
    // https://console.faceplusplus.com/documents/6329371
    addFace: 'https://api-us.faceplusplus.com/facepp/v3/faceset/addface', // POST
    // Search
    // https://console.faceplusplus.com/documents/5681455
    search: 'https://api-us.faceplusplus.com/facepp/v3/search', // POST
    // Create set of faces
    // https://console.faceplusplus.com/documents/6329329
    create: 'https://api-us.faceplusplus.com/facepp/v3/faceset/create', // POST
    // update
    // https://console.faceplusplus.com/documents/6329383
    update: 'https://api-us.faceplusplus.com/facepp/v3/faceset/update', // POST
    // removeface
    // https://console.faceplusplus.com/documents/6329376
    removeFace: 'https://api-us.faceplusplus.com/facepp/v3/faceset/removeface', // POST
  };

  // Object that holds anything related with the state of our app
  // Currently it only holds if the snap button has been pressed
  var state = {
    photoSnapped: false,
  };

  // function that returns a binary representation of the canvas
  function getImageAsBlobFromCanvas(canvas) {

    // function that converts the dataURL to a binary blob object
    function dataURLtoBlob(dataUrl) {
      // Decode the dataURL
      var binary = atob(dataUrl.split(',')[1]);

      // Create 8-bit unsigned array
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }

      // Return our Blob object
      return new Blob([new Uint8Array(array)], {
        type: 'image/jpg',
      });
    }

    var fullQuality = canvas.toDataURL('image/jpeg', 1.0);
    return dataURLtoBlob(fullQuality);

  }

  // function that returns a base64 representation of the canvas
  function getImageAsBase64FromCanvas(canvas) {
    // return only the base64 image not the header as reported in issue #2
    return canvas.toDataURL('image/jpeg', 1.0).split(',')[1];

  }

  function setUserId(token){
    var data2 = new FormData();
    var userID = localStorage.getItem("userStorage");
    data2.append('api_key', faceAPI.apiKey);
    data2.append('api_secret', faceAPI.apiSecret);
    data2.append('user_id', userID);
    data2.append('face_token', token.faces[0].face_token);
    faceId = token.faces[0].face_token;
    ajaxRequest('POST',faceAPI.setuserId,data2, addFace);

  }

  function addFace(){
    var data3 = new FormData();
    data3.append('api_key', faceAPI.apiKey);
    data3.append('api_secret', faceAPI.apiSecret);
    data3.append('face_tokens', faceId);
    data3.append('outer_id', faceAPI.app);
    ajaxRequest('POST',faceAPI.addFace,data3,'');

  }

  function search(){
    var data3 = new FormData();
    data3.append('api_key', faceAPI.apiKey);
    data3.append('api_secret', faceAPI.apiSecret);
    var canvas = document.getElementById('canvas');
    var image = getImageAsBlobFromCanvas(canvas);


  }

  // Function called when we upload an image
  function uploadImage() {
    if (state.photoSnapped) {
      var canvas = document.getElementById('canvas');
      var image = getImageAsBlobFromCanvas(canvas);
      
      // Create Form Data. Here you should put all data
      // requested by the face plus plus services and
      // pass it to ajaxRequest
      var data = new FormData();
      data.append('api_key', faceAPI.apiKey);
      data.append('api_secret', faceAPI.apiSecret);
      data.append('image_file', image);
      
      //AJAX request 
      ajaxRequest('POST', faceAPI.detect, data, setUserId );
      // add also other query parameters based on the request
      // you have to send
      
      // You have to implement the ajaxRequest. Here you can
      // see an example of how you should call this
      // First argument: the HTTP method
      // Second argument: the URI where we are sending our request
      // Third argument: the data (the parameters of the request)
      // ajaxRequest function should be general and support all your ajax requests...
      // Think also about the handler
      

      //ajaxRequest('POST',faceAPI.setuserId,data);

    } else {
      alert('No image has been taken!');
    }
  }

  // Function for initializing things (event handlers, etc...)
  function init() {
    // Put event listeners into place
    // Notice that in this specific case handlers are loaded on the onload event
    window.addEventListener('DOMContentLoaded', function () {
      // Grab elements, create settings, etc.
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var video = document.getElementById('video');
      var mediaConfig = {
        video: true,
      };
      var errBack = function (e) {
        console.log('An error has occurred!', e);
      };

      // Put video listeners into place
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(mediaConfig).then(function (stream) {
          video.srcObject = stream;
          video.onloadedmetadata = function (e) {
            video.play();
          };
        });
      }

      // Trigger photo take
      document.getElementById('snap').addEventListener('click', function () {
        context.drawImage(video, 0, 0, 640, 480);
        state.photoSnapped = true; // photo has been taken
      });

      // Trigger when upload button is pressed
      document.getElementById('upload').addEventListener('click', uploadImage);
     // document.getElementById('search').addEventListener('click', search);//not working

    }, false);

  }
  
  function ajaxRequest(type,faceAPI,data,callback){
    var myRequest = new XMLHttpRequest();
    var token ;
    
    myRequest.onreadystatechange = function(){
      if (myRequest.readyState==4 && myRequest.status==200){        
        token = JSON.parse(myRequest.responseText);
        console.log(token);
        if (callback != ''){
        callback(token);
        }
      }
    }

    myRequest.open(type, faceAPI, true );

    
    myRequest.send(data);

   //var x = myRequest.onload = function(){
   //  var myData = JSON.parse(myRequest.responseText);
   //console.log("mesa sto ready state " + myData.faces[0].face_token);
   //  console.log(globalFaceT);

    };

  

  // Public API of function for facet recognition
  // You might need to add here other methods based on your implementation
  return {
    init: init,
  };

})();





