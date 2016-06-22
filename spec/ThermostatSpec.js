

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(thermostat.DEFAULT_TEMP);
  });

  describe('.increaseTemp', function() {
    it('increases the temperature', function() {
      thermostat.increaseTemp();
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });
  });

  describe('.decreaseTemp', function(){
    it('decreases the temperature', function() {
      thermostat.decreaseTemp();
      expect(thermostat.getCurrentTemp()).toEqual(19);
    });
    it('won\'t go below 10 degrees', function() {
      for (var i = 1; i <= 20 ; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.getCurrentTemp()).toEqual(thermostat.MINIMUM_TEMP);
    });
  });

  describe('When setting power saving mode off', function(){
    it('has a max temp of 32 degrees', function() {
      thermostat.powerSavingModeOff();
      for (var i = 1; i < 20; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.getCurrentTemp()).toEqual(thermostat.MAXIMUM_TEMP_POWER_SAVING_MODE_OFF);
    });
    describe('.powerSavingModeStatus', function() {
      it('will be false', function() {
        thermostat.powerSavingModeOff();
        expect(thermostat.powerSavingModeStatus()).toBeFalsy();
      });
    });
  });

  describe('When setting power saving mode on', function() {
    it('has a max temp of 25 degrees', function() {
      for (var i = 1; i < 7; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.getCurrentTemp()).toEqual(thermostat.MAXIMUM_TEMP_POWER_SAVING_MODE_ON);
    });

    it('sets the temperature to 25 if current temperature is higher than 25', function() {
      thermostat.powerSavingModeOff();
      for (var i = 1; i < 10; i++) {
        thermostat.increaseTemp();
      }
      thermostat.powerSavingModeOn();
      expect(thermostat.getCurrentTemp()).toEqual(thermostat.MAXIMUM_TEMP_POWER_SAVING_MODE_ON);
    });

    describe('.powerSavingModeStatus', function() {
      it('will be true', function() {
        expect(thermostat.powerSavingModeStatus()).toBeTruthy();
      });
    });


  });
  describe('.displayColour', function() {
    it('is green if temperature is lower than 18 degrees', function() {
      for (var i = 1; i <= 3 ; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.displayColour()).toEqual('green');
    });
    it('is yellow if temperature between 18 and 25 degrees', function() {
      expect(thermostat.displayColour()).toEqual('yellow');
    });
    it('is red if temperature is above 25 degrees', function() {
      thermostat.powerSavingModeOff();
      for (var i = 1; i < 8; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.displayColour()).toEqual('red');
    });
  });

  describe('.reset', function() {

    it('sets the temperature to 20 degrees', function() {
      thermostat.increaseTemp();
      thermostat.reset();
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });
  });

});
