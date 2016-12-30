"use strict";

var token = '42d91bc90a5350bbe2bfef8cecab14f5';

var func = function() {

  var errorBHttp = document.getElementById('error-http');
  var errorBNetwork = document.getElementById('error-network');
  $.ajax({
    type: 'GET',
    timeout: 5000,
      //url:'http://localhost:597',
      url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=42d91bc90a5350bbe2bfef8cecab14f5&format=json&limit=9',
      success:function(data) {
        console.log(data);
          var template = Handlebars.compile( $('#template').html());
          $('.updates').empty().append(template(data));
        },


        error:function(XMLHttpRequest, textStatus, errorThrown) {
          if (XMLHttpRequest.readyState == 4) {
              console.log("HTTP ERROR");
              $('#tracks').attr('visibility', 'hidden');
              errorBHttp.style.display = "block";
        }
        else if (XMLHttpRequest.readyState == 0) {
            console.log("NETWORK ERROR");
            $('#tracks').attr('visibility', 'hidden');
            errorBNetwork.style.display = "block";
        }
        else {
            alert("UNKNOWN ERROR ");
        }
        }
  });
}


 $(document).ready(function() {
  func();
  setInterval(func, 3000);
});
