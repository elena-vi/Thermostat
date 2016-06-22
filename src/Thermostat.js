function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAXIMUM_TEMP_POWER_SAVING_MODE_ON = 25;
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
    this.maximumTemp = this.MAXIMUM_TEMP_POWER_SAVING_MODE_ON;
  }
};
