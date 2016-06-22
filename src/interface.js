$(function() {
  var thermostat = new Thermostat();
    updateTemperature();
    $('#increase').click(function() {
      thermostat.increaseTemperature();
      updateTemperature();
    });
    $('#decrease').click(function() {
      thermostat.decreaseTemperature();
      updateTemperature();
    });
    $('#changePowerMode').click(function() {
      thermostat.switchPowerSavingMode();
        $('#powermode').text(thermostat.powerSavingMode() ? 'On' : 'Off');
    });
    $('#reset').click(function() {
      thermostat.resetTemperature();
      updateTemperature();
    });
  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    $('#temperatureDisplay').css('color', thermostat.colour())
  };

});
