
$(document).ready(function() {
    updateTemperature();
    updatePowerSaveStatus();

    $('#temperature-up').click(function() {
        thermostat.increase();
        updateTemperature();
    });

    $('#temperature-down').click(function() {
        thermostat.decrease();
        updateTemperature();
    });

    $('#temperature-reset').click(function() {
        thermostat.reset();
        updateTemperature();
    });

    $('#powersaving-on').click(function() {
        thermostat.powerSaveOn();
        updateTemperature();
        updatePowerSaveStatus();
    });

    $('#powersaving-off').click(function() {
        thermostat.powerSaveOff();
        updatePowerSaveStatus();
    });

    function updateTemperature() {
        $('#currenttemp').text('Current temp ' + thermostat.getCurrentTemp());
        $('#currenttemp').attr('class', thermostat.energyUsage());
    }

    function updatePowerSaveStatus() {
        $('#powersave').text('PowerSave on? ' + thermostat.isPowerSave());
    }





    displayWeather('London');

    $('#select-city').submit(function(event) {
        event.preventDefault();
        var city = $('#current-city').val();
        displayWeather(city);
    })


    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=e0e232c9ccf7239ef0d0c8ed68985f2a';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
            $('#current-temperature').text(data.main.temp);

        })
    }


});
