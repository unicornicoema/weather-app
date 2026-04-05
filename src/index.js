function displayTemperature(response) {
  document.querySelector("#current-city").innerHTML = response.data.city;
  document.querySelector("#current-temperature").innerHTML = Math.round(response.data.temperature.current);
  document.querySelector("#current-description").innerHTML = response.data.condition.description;
  document.querySelector("#current-humidity").innerHTML = response.data.temperature.humidity + "%";
  document.querySelector("#current-wind").innerHTML = Math.round(response.data.wind.speed) + " km/h";
  document.querySelector("#current-icon").src = response.data.condition.icon_url;
  document.querySelector("#current-icon").alt = response.data.condition.description;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
