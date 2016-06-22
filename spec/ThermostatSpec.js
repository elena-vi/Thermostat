

describe('Feature Test', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it('increases the temperature with the up button', function() {
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('decreases the temperature with the down button', function() {
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 1; i <= 20 ; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.getCurrentTemp()).toEqual(thermostat.MINIMUM_TEMP);
  });

  it('has a max temp of 25 degrees when power saving mode is on', function() {
    thermostat.powerSavingModeOn();
    for (var i = 1; i < 7; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.getCurrentTemp()).toEqual(25);
  });

});
