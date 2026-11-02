// Write these functions:

//     celsiusToFahrenheit(celsius) should convert Celsius to Fahrenheit and return the number.

//     fahrenheitToCelsius(fahrenheit) should convert Fahrenheit to Celsius and return the number.

//     formatTemperature(value, unit) should return display text such as "77 F" or "20 C".

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function formatTemperature(value, unit) {
    return `${value} ${unit}`;
}

const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));
const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));
const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));
const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));