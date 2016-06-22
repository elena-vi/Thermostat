function Thermostat() {
	this._temperature = 20;
	this._minimum = 10;
	this._powerSavingMode = true;
}

Thermostat.prototype.currentTemperature = function() {
	return this._temperature;
};

Thermostat.prototype.increaseTemperature = function() {
	if ((this.powerSavingMode() === true && this._temperature !== 25) ||
		(this.powerSavingMode() === false && this._temperature !== 32)) {
			this._temperature += 1
		};
	};

	Thermostat.prototype.decreaseTemperature = function() {
		if (this._temperature !== this._minimum) {
			this._temperature -= 1
		};
	};

	Thermostat.prototype.powerSavingMode = function() {
		return this._powerSavingMode
	};

	Thermostat.prototype.switchPowerSavingMode = function() {
		this._powerSavingMode = !this._powerSavingMode
	};

	Thermostat.prototype.resetTemperature = function() {
		this._temperature = 20;
	};

	Thermostat.prototype.colour = function() {
		if (this._temperature < 18) {
			return 'green';
		} else if (this._temperature < 25) {
			return 'yellow';
		} else {
			return 'red';
		};
	};