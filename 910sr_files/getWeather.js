// v3.1.0
//Docs at http://simpleweatherjs.com
// var jQuery2 = jQuery.noConflict(true);

$(document).ready(function(){
  getWeather();
  setInterval(getWeather, 60000 * 20); //SET WEATHER UPDATE INTERVAL
});

  $.simpleWeather({
    location: 'Oak Lawn, IL 60453',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      console.log(weather);
      html = '<h2><ul><li class="location">'+weather.city+', '+weather.region+'</li><li class="temp">'+weather.temp+'&deg;'+weather.units.temp+'</li></ul><ul><li class="symbol"><i class="weather icon-'+weather.code+'"></i></li><li class="currently">'+weather.currently+'</li></ul></h2>';
      // html += '<ul class="forecast"><li class="location">'+weather.city+', '+weather.region+'</li>';
      // html += '<li class="currently">'+weather.currently+'</li>';
      // html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather-data").html(html);
      var forecastHtml = '<ul class="forecast">';
      for(var i=0;i<3;i++) {
        forecastHtml += '<li>'+'<p class="forecast-day">'+moment(weather.forecast[i].date).format('ddd')+'</p>'+'<p class="forecast-symbol">'+'<i class="weather icon-'+weather.forecast[i].code+'"></i>'+'</p></li>';
      }
      forecastHtml += '</ul>';
      //$("#weather-data").append(forecastHtml); //COMMENT THIS OUT TO DISABLE MULTI-DAY FORECAST
    },
    error: function(error) {
      // $("#weather-data").html('<p>'+error+'</p>');
      getWeather();
    }
  });
}