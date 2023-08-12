const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const searchEnter = document.querySelector('.search-box input');

function searching(){
    const API = "3232cc4b4be04296ad990358231008";
    const city = document.querySelector('.search-box input').value;

    if(city === '') 
        return;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`).then(response => response.json()).then(json => {
        
      // console.log(json);

        if(json.hasOwnProperty('error')) {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }  

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const location = document.querySelector('.location');
        const image = document.querySelector('.weather-box img');
        const temprature = document.querySelector('.weather-box .temprature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        image.src = `${json.current.condition.icon}`;
        temprature.innerHTML = `${parseFloat(json.current.temp_c)}<span>&deg;C</span>`;
        description.innerHTML =  `${json.current.condition.text}`;
        humidity.innerHTML = `${json.current.humidity}%`;
        wind.innerHTML = `${parseFloat(json.current.wind_kph)} Km/h`;
        location.innerHTML = `${json.location.name}, ${json.location.country}`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';
    })
}


search.addEventListener('click', () => {
    searching()
});

searchEnter.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        searching()
    }
});
