function changeCityName(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchFormInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);
