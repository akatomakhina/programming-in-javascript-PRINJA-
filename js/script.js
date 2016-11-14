"use strict";

var token = '42d91bc90a5350bbe2bfef8cecab14f5';

var func = function() {
  $.ajax({
    type: 'GET',
      //url:'http://localhost:597',
      url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=42d91bc90a5350bbe2bfef8cecab14f5&format=json&limit=9',
      success:function(data) { 
        console.log(data); 
          var template = Handlebars.compile( $('#template').html());
          $('.updates').empty().append(template(data));
        },
        error:function(XMLHttpRequest, textStatus, errorThrown) {
          if (XMLHttpRequest.readyState == 4) {
              alert("Http error");
        }
        else if (XMLHttpRequest.readyState == 0) {
            alert("network error");
        }
        else {
            alert("wtf");
        } 
        }
  });
}

 $(document).ready(function() {
  func();
  setInterval(func, 3000);
});