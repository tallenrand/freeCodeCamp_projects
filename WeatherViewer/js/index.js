
///Retrieve HTML5 Geolocation data
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
    url = 'https://fcc-weather-api.glitch.me/';
    
    ///Displays Longitude and Latitude of current location onscreen
    $("#data").html("<h4>Latitude:<br>" + (position.coords.latitude).toFixed(2) + "<br><br>Longitude:<br>" + (position.coords.longitude).toFixed(2) + "</h4>");
    
    ///Accesses the FreeCodeCamp Weather API and returns GPS coordinates
    $.getJSON(url + '/api/current?lon='+lon+'&lat='+lat, function(json) {
    
      ///Gets array - '0'= Celsius and '1'= Fahrenheit
      var temp = [(json.main.temp).toFixed(0) + "<h6>&#8451</h6>", ((json.main.temp * (9/5)) + 32).toFixed(0)+ "<h6>&#8457</h6>"];
      ///Will display html info in divs
      $(".temp-celsius").html(temp[0]);
      $(".temp-fahrenheit").html(temp[1]);
      $(".temperature").click(function () {
        $(".temp-celsius").toggle();
        $(".temp-fahrenheit").toggle();
      });
      
      ///Icons for temperature display
      var backgroundDisplay;
      var backgrounds = {
  hot: "https://image.flaticon.com/icons/png/128/169/169367.png",
  medium: "https://image.flaticon.com/icons/png/128/136/136716.png",
  cold: "https://image.flaticon.com/icons/png/128/613/613766.png"
      };
      
      ///Selects icon based on temperature
      if (json.main.temp < 4) {
        backgroundDisplay = backgrounds.cold;
      } else if (json.main.temp < 24) {
        backgroundDisplay = backgrounds.medium;        
      } else if (json.main.temp < 60) {
        backgroundDisplay = backgrounds.hot;
      };
      ///Displays icon in the div
      $(".pictureIcon").html("<img src=" + backgroundDisplay + ">");
    });
  });
};