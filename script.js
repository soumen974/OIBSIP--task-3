function convertTemperature() {
    const temperature = parseFloat(document.getElementById("input-temperature").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultElement = document.getElementById("result");

    let result;
    if (fromUnit === toUnit) {
        resultElement.textContent = `${temperature} ${toUnit} [you are converting for same units ${toUnit} ]  `;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature} °C is ${result} °F`;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperature + 273.15;
        resultElement.textContent = `${temperature} °C is ${result} K`;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature} °F is ${result} °C`;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (temperature - 32) * 5/9 + 273.15;
        resultElement.textContent = `${temperature} °F is ${result} K`;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperature - 273.15;
        resultElement.textContent = `${temperature} K is ${result} °C`;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
        resultElement.textContent = `${temperature} K is ${result} °F`;
    }
}
