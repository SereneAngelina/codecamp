var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
$( document ).ready(function(){

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation is not supported');
}

function error() {
alert("That's weird! We couldn't find you!");
}

function success(position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
}

  function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#location").text(result.name + ", " + result.sys.country);

     $("#temp").text(result.main.temp + String.fromCharCode(176)+ "C");
     $("#desc").text(result.weather[0].description);
      $("#wind").text(result.wind.speed);
      $("#img").attr('src', result.weather[0].icon);
      let faren = Math.round(result.main.temp * 9/5 + 32);


   $("#temp").click(function(){
     $("#temp").hide();
    $("#tempfaren").text(faren + String.fromCharCode(176)+ "F");
  });

 $("#tempfaren").click(function(){

   $("#temp").show();
   $("#tempfaren").text("");
  });


    }
    })
  }

});
