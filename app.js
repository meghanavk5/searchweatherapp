// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//9036a86ec73164228accc4ccf00afdcf

const weatherApi = {
    key : "9036a86ec73164228accc4ccf00afdcf",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('searchBox');

searchInputBox.addEventListener('keypress', (event) =>{
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
});

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    let city =  document.getElementById('city');
    city.innerText = `${weather.name}`;

    let temperature = document.getElementById('temp');
    temperature.textContent = `${Math.round(weather.main.temp)} °c`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('image/clear_sky.jpeg')";
    }else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('image/cloud.jpeg')";
    }else if(weatherType.textContent == 'Mist'){
        document.body.style.backgroundImage = "url('image/mist.jpg')";
    }else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('image/rain.jpeg')";
    }else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('image/snow.jpeg')";
    }else if(weatherType.textContent == 'Sunny'){
        document.body.style.backgroundImage = "url('image/sunny.jpg')";
    }else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('image/haze.jpeg')";
    }else if(weatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage = "url('image/smoke.jpeg')";
    }else if(weatherType.textContent == 'Fog'){
        document.body.style.backgroundImage = "url('image/fog.jpeg')";
    }
}

function dateManage(dateArg){
    let days = ["Sunday", "Monday", "Tuesday", 
                 "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May",
                   "June", "July", "August", "September","October",
                    "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    
    return `${date} ${month} ${day} ${year}`;
}