'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has base temperature 20", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it("temperature can be inceased", function() {
    thermostat.increase();
    expect(thermostat.temperature()).toEqual(21);
  });

  it("temperature can be deceased", function() {
    thermostat.decrease();
    expect(thermostat.temperature()).toEqual(19);
  });

  describe("", function() {
    beforeEach(function() {
    });

    xit("", function() {
    });

    xit("", function() {
    });
  });

});
