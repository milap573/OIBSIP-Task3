function convertTemperature() {
  var temperature = document.getElementById('temperature').value;
  var initialUnit = document.getElementById('initial-unit').value;
  var conversionUnit = document.getElementById('conversion-unit').value;
  var result = document.getElementById('result');
  var calculation = document.getElementById('calculation');
  var convertedTemperature;
  var conversionText;
  var formulaText;

  if (initialUnit === 'celsius' && conversionUnit === 'fahrenheit') {
    convertedTemperature = (temperature * 9/5) + 32;
    conversionText = temperature + " °C = " + convertedTemperature + " °F";
    formulaText = "(" + temperature + " * 9/5) + 32";
  } else if (initialUnit === 'fahrenheit' && conversionUnit === 'celsius') {
    convertedTemperature = (temperature - 32) * 5/9;
    conversionText = temperature + " °F = " + convertedTemperature + " °C";
    formulaText = "(" + temperature + " - 32) * 5/9";
  } else if (initialUnit === 'celsius' && conversionUnit === 'kelvin') {
    convertedTemperature = parseFloat(temperature) + 273.15;
    conversionText = temperature + " °C = " + convertedTemperature + " K";
    formulaText = temperature + " + 273.15";
  } else if (initialUnit === 'kelvin' && conversionUnit === 'celsius') {
    convertedTemperature = parseFloat(temperature) - 273.15;
    conversionText = temperature + " K = " + convertedTemperature + " °C";
    formulaText = temperature + " - 273.15";
  } else {
    convertedTemperature = temperature;
    conversionText = temperature + " " + initialUnit.toUpperCase();;
    formulaText = "Initial unit and conversion units are the same, so no conversion is needed.";
  }

  result.innerHTML = conversionText;
  calculation.innerHTML = "Calculation: " + formulaText;
}
