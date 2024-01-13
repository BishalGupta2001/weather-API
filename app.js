const apiKeys = "472f4563fc3a01ea689b03cec79b53d2";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

// main.humidity &  temp || name   || wind.speed
const humidity = document.querySelector(".humidity");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const windSpeed = document.querySelector(".wind");
const weatherImg = document.querySelector(".weather-icon");
const info = document.querySelector(".info");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
  try {
    let response = await fetch(apiUrl + city + `&appid=${apiKeys}`);
    let data = await response.json();

    if (response.status !== 200) {
      info.style.visibility = "visible";
    } else {
      humidity.innerHTML = data.main.humidity + "%";
      temp.innerHTML = Math.round(data.main.temp) + "°C";
      cityName.innerHTML = data.name;
      windSpeed.innerHTML = data.wind.speed + "km/h";
      
      if (data.weather[0].main == "Clouds") {
        weatherImg.src = "./images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherImg.src = "./images/clear.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherImg.src = "./images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherImg.src = "./images/mist.png";
      } else if (data.weather[0].main == "Rain") {
        weatherImg.src = "./images/rain.png";
      } else if (data.weather[0].main == "Snow") {
        weatherImg.src = "./images/snow.png";
      }
      info.style.visibility = "hidden";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// search button ma click event listner lagaye or dusra arrow function
// jo input ka value hoga wohi city name hoga

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});