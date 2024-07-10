function refreshWeather(response) {
  console.log(response.data);
  let newTemp = Math.round(response.data.temperature.current);
  //console.log(newTemp);
  let appTemperature = document.querySelector("#app-temperature");
  appTemperature.innerHTML = newTemp;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = response.data.city;

  let weatherCondition = response.data.condition.description;
  let description = document.querySelector("#description");
  description.innerHTML = weatherCondition;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);

  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"
  class="app-icon"
  />';
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  //let searchFormInput = document.querySelector("#search-form-input");
  //let cityName = searchFormInput.value;
  let apiKey = "8ff30efd06o4d12f7ftb8b44c4ad300b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiURL);
  axios.get(apiURL).then(refreshWeather);
}

function changeCityName(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  //let cityName = document.querySelector("#city-name");
  //cityName.innerHTML = searchFormInput.value;
  searchCity(searchFormInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);

searchCity("Lisbon");
