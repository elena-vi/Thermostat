function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAXIMUM_TEMP_POWER_SAVING_MODE_ON = 25;
  this.MAXIMUM_TEMP_POWER_SAVING_MODE_OFF = 32;
  this.LOW_USAGE_TEMP = 18;
  this.NORMAL_USAGE_TEMP = 25;
  this.temperature = this.DEFAULT_TEMP;
  this.maximumTemp = this.MAXIMUM_TEMP_POWER_SAVING_MODE_ON;
}




Thermostat.prototype = {
  getCurrentTemp: function() {
    return this.temperature;
  },
  increaseTemp: function() {
    if (this.getCurrentTemp() < this.maximumTemp) {
      this.temperature += 1;
    }
  },
  decreaseTemp: function() {
    if (this.getCurrentTemp() > this.MINIMUM_TEMP) {
      this.temperature -= 1;
    }
  },
  powerSavingModeOn: function() {
    if (this.getCurrentTemp() > this.MAXIMUM_TEMP_POWER_SAVING_MODE_ON) {
      this.temperature = this.MAXIMUM_TEMP_POWER_SAVING_MODE_ON;
    }
    this.maximumTemp = this.MAXIMUM_TEMP_POWER_SAVING_MODE_ON;
  },
  powerSavingModeOff: function() {
    this.maximumTemp = this.MAXIMUM_TEMP_POWER_SAVING_MODE_OFF;
  },
  reset: function() {
    this.temperature = this.DEFAULT_TEMP;
  },
  displayColour: function() {
    if (this.getCurrentTemp() < this.LOW_USAGE_TEMP) {
      return 'Green'
    }
    if (this.getCurrentTemp() <= this.NORMAL_USAGE_TEMP) {
      return 'Yellow'
    }
    return 'Red';
  }
};
