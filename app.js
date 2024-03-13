function convertTemperature() {
    // Get the input temperature value and unit
    var inputTemp = parseFloat(document.getElementById("name").value);
    var inputUnit = document.querySelector('input[name="unit"]:checked').value;

    // Get the output temperature unit
    var outputUnit = document.querySelector('input[name="outputUnit"]:checked').value;

    // Perform the conversion
    var convertedTemp;
    if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9/5) + 32;
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        convertedTemp = (inputTemp - 32) * 5/9;
    } else {
        convertedTemp = inputTemp; // No conversion needed
    }

    // Update the result in the HTML
    document.getElementById("converted_temperature").innerText = "Converted Temperature: " + convertedTemp.toFixed(2) + " " + outputUnit;
}
