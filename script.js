const celsiusEl = document.getElementById("Celcius");
const FahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp() {
  // Add + to avoid String Problem
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "Celcius":
      kelvinEl.value = (currentValue + 273.15).toFixed(2);
      FahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "Fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case "Kelvin":
      celsiusEl.value = (currentValue - 273.15).toFixed(2);
      FahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}

// Attach the event listeners to input fields
celsiusEl.addEventListener("input", computeTemp);
FahrenheitEl.addEventListener("input", computeTemp);
kelvinEl.addEventListener("input", computeTemp);
