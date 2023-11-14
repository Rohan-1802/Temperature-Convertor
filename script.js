function convertTemperature() {
    // Get the Celsius input value
    var celsiusInput = document.getElementById('celsius');
    var celsiusValue = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(celsiusValue)) {
        // Convert Celsius to Fahrenheit
        var fahrenheitValue = (celsiusValue * 9/5) + 32;

        // Display the result
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Result: ' + fahrenheitValue.toFixed(2) + ' Fahrenheit';
    } else {
        alert('Please enter a valid number for Celsius temperature.');
    }
}
