$(function() {

	displayWeather('London');

	$('#currentCity').change(function() {
		var city = $('#currentCity').val();
		displayWeather(city);
	});

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
		$('#temperatureDisplay').css('color', thermostat.colour());
	}
});

function displayWeather(city) {
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
	var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
	var units = '&units=metric';
	$.get(url + token + units, function(data) {
		$('#currentTemperature').text(data.main.temp);
		$('#icon').attr('src','http://openweathermap.org/img/w/'+data.weather[0].icon+'.png');
	});
}
