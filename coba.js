// get weather in lombok using fetch api
function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=lombok&appid=b1b15e88fa797225412429c1c50c122a1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('weather').innerHTML = data.weather[0].description;
            document.getElementById('temp').innerHTML = data.main.temp;
            document.getElementById('humidity').innerHTML = data.main.humidity;
            document.getElementById('wind').innerHTML = data.wind.speed;
            document.getElementById('pressure').innerHTML = data.main.pressure;
            document.getElementById('clouds').innerHTML = data.clouds.all;
            document.getElementById('sunrise').innerHTML = data.sys.sunrise;
            document.getElementById('sunset').innerHTML = data.sys.sunset;
            document.getElementById('country').innerHTML = data.sys.country;
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('latitude').innerHTML = data.coord.lat;
            document.getElementById('longitude').innerHTML = data.coord.lon;
            document.getElementById('timezone').innerHTML = data.timezone;            
        }
        )
        .catch(error => console.error(error));
}
getWeather();
setInterval(getWeather, 60000);

// get weather in lombok for 7 days using fetch api
function getWeather7Days() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=lombok&appid=b1b15e88fa797225412429c1c50c122a1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let weather = data.list;
            let html = '';
            for (let i = 0; i < weather.length; i++) {
                html += `<tr>
                <td>${weather[i].dt_txt}</td>
                <td>${weather[i].main.temp}</td>
                <td>${weather[i].main.humidity}</td>
                <td>${weather[i].wind.speed}</td>
                <td>${weather[i].main.pressure}</td>
                <td>${weather[i].clouds.all}</td>
                <td>${weather[i].weather[0].description}</td>
                </tr>`;
            }
            document.getElementById('weather7days').innerHTML = html;
        }
        )
        .catch(error => console.error(error));
}
getWeather7Days();
setInterval(getWeather7Days, 60000);
