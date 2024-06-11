const request = require("request");

const apiKey = "4cfc88615b7ca544b2e59f35cc1ae53a";
const city = "San Francisco";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request({ url: url, json: true }, (error, response, body) => {
  if (error) {
    console.error("Unable to connect to weather service!", error);
  } else if (body.cod !== 200) {
    console.error("Unable to find location!");
  } else {
    // Print the current temperature to the console
    console.log(`It's currently ${body.main.temp} degrees in ${body.name}.`);
  }
});
