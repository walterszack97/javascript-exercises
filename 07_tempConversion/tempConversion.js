const convertToCelsius = function(myFahrenheit) {
  let celsius = (myFahrenheit - 32) * 5 / 9;
  return celsius = Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(myCelsius) {
  let fahrenheit = (myCelsius * (9 / 5)) + 32;
  return fahrenheit = Math.round(fahrenheit * 10) / 10;
};

convertToFahrenheit(60);
convertToCelsius(32);


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
