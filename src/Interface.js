$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  getWeather('London');
  
  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    updateTemperature();
  });
  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSavingModeOff();
    updatePowerSavingStatus();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingModeOn();
    updateTemperature();
    updatePowerSavingStatus();
  });

  $('#current-city').change(function(){
    var city = $('#current-city').val();
    getWeather(city);
  });

  $('#city-search').submit(function(ev){
    var city = this.search.value;
    getWeather(city);
    ev.preventDefault();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature-color').css("background-color", thermostat.displayColour());
  }

  function updatePowerSavingStatus() {
    if (thermostat.powerSavingModeStatus()) {
      $('#power-saving-status').text('on');
    } else {
      $('#power-saving-status').text('off');
    }
  }
});

function getWeather(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric',
  function(data){
    $('#outside-temperature').text(data.main.temp);
    $('#weather-icon').attr('src',"http://openweathermap.org/img/w/"+ data.weather[0].icon +".png");
    $('#city').text(data.name);
  });
};