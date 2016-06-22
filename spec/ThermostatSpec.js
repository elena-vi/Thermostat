describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("defaults", function() {
    it("it starts at 20 degrees", function() {
      expect(thermostat.currentTemperature()).toEqual(20);
    });

    it("it minimum of 10 degrees", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decreaseTemperature();
      };
      expect(thermostat.currentTemperature()).toEqual(10);
    });

    it("Has power saving mode", function() {
      expect(thermostat.powerSavingMode()).toEqual(true);
    });

    it("resets to 20", function() {
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });

  describe("temperature changes", function() {
    it("can increase", function() {
      thermostat.increaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(21);
    });

    it("can decrease", function() {
      thermostat.decreaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(19);
    });
  });

  describe("maximum temperatures", function() {
    it("power saving mode is on", function() {
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.currentTemperature()).toEqual(25);
    });

    it("power saving mode is off", function() {
      thermostat.switchPowerSavingMode();
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.currentTemperature()).toEqual(32);
    });
  });

  describe("thermostat colour", function() {

    it("green if less than 18", function() {
      for (var i = 0; i < 6; i++) {
        thermostat.decreaseTemperature();
      };
      expect(thermostat.colour()).toEqual("green");
    });

    it("yellow if less than 25", function() {
      for (var i = 0; i < 4; i++) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.colour()).toEqual("#ffc107");
    });

    it("red if more or equal to 25", function() {
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.colour()).toEqual("red");
    });

  });

});
