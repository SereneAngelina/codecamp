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
     $("#temp").text(result.main.temp);
      $("#desc").text(result.weather[0].description);
      $("#wind").text(result.wind.speed);
      $("#img").attr('src', result.weather[0].icon);

    }
    })
  }
  $("#temp").click(function(){
    "#tempfaren".hide();
  });
});
