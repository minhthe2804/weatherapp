const apikey = "fb5ba09e9490f1794323f21427edcd6e";
const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error-text");

function Weather(city) {
    fetch(weatherApi + city + `,VN&appid=${apikey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            checkWeather(data);
        })
        .catch(function () {
            error.style.display = "block";
            weather.style.display = "none";
        });
}

function checkWeather(data) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp * 0.1) + "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km / h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./assets/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./assets/images/mist.png";
    }
    weather.style.display = "block";
    error.style.display = "none";
}

searchBtn.addEventListener("click", function () {
    Weather(searchBox.value);
});
