function refreshWeather(response) {
  console.log(response.data);
  let newTemp = Math.round(response.data.temperature.current);
  //console.log(newTemp);
  let appTemperature = document.querySelector("#app-temperature");
  appTemperature.innerHTML = newTemp;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = response.data.city;
}

function searchCity(city) {
  let searchFormInput = document.querySelector("#search-form-input");
  let cityName = searchFormInput.value;
  let apiKey = "8ff30efd06o4d12f7ftb8b44c4ad300b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  console.log(apiURL);
  axios.get(apiURL).then(refreshWeather);
}

function changeCityName(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  //let cityName = document.querySelector("#city-name");
  //cityName.innerHTML = searchFormInput.value;
  searchCity(searchFormElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);
