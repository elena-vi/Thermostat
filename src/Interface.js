$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

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

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').css("background-color", thermostat.displayColour());
  }

  function updatePowerSavingStatus() {
    if (thermostat.powerSavingModeStatus()) {
      $('#power-saving-status').text('on');
    } else {
        $('#power-saving-status').text('off');
    }
  }





});
