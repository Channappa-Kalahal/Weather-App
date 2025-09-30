console.log("Welocome to weather app");

const apikey = "YOUR_API_KEY_HERE";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbtn = document.querySelector(".search button");
const searchbox = document.querySelector(".search input");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    if (response.status == 404) {
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather-details").style.display = "none";
        return;
    }
    document.querySelector(".invalid").style.display = "none";           

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds") {
        weathericon.src = "img/clouds.png";
    }

    else if (data.weather[0].main == "Clear") {
        weathericon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "img/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "img/snow.png";
    }

    document.querySelector(".weather-details").style.display = "block";

}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})


