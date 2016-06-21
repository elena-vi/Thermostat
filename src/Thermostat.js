'use strict';

function Thermostat() {
	this._temp = 20;
	this._minTemp = 10;
	this._powerSaving = true;
	this._maxTemp = (this._powerSaving) ? (25) : (35);
};

Thermostat.prototype = {
	temperature: function() {
		return this._temp;
	}, 
	reset: function() {
		this._temp = 20;
	}
	increase: function() {
		this._temp += 1;
	}, 
	decrease: function() {
		this._temp -= 1;
	} 
};