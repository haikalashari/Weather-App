const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search .addEventListener('click', () => {
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

        switch (json.current.condition.code) {
            case 1000:
                image.src = 'weather/64x64/day/113.png';
                break;
                
            case 1003:
                image.src = 'weather/64x64/day/116.png';
                break;
                
            case 1006:
                image.src = 'weather/64x64/day/119.png';
                break;
            case 1009:
                image.src = 'weather/64x64/day/122.png';
                break;
                
            case 1030:
                image.src = 'weather/64x64/day/143.png';
                break;

            case 1063:
                image.src = 'weather/64x64/day/176.png';
                break;
            case 1066:
                image.src = 'weather/64x64/day/179.png';
                break;
                
            case 1069:
                image.src = 'weather/64x64/day/182.png';
                break;

            case 1072:
                image.src = 'weather/64x64/day/185.png';
                break;
            case 1087:
                image.src = 'weather/64x64/day/200.png';
                break;
                
            case 1114:
                image.src = 'weather/64x64/day/227.png';
                break;

            case 1117:
                image.src = 'weather/64x64/day/230.png';
                break;
            case 1135:
                image.src = 'weather/64x64/day/248.png';
                break;
                
            case 1147:
                image.src = 'weather/64x64/day/260.png';
                break;

            case 1150:
                image.src = 'weather/64x64/day/263.png';
                break;
            case 1153:
                image.src = 'weather/64x64/day/266.png';
                break;
                
            case 1168:
                image.src = 'weather/64x64/day/281.png';
                break;

            case 1171:
                image.src = 'weather/64x64/day/281.png';
                break;
            case 1180:
                image.src = 'weather/64x64/day/293.png';
                break;
            case 1183:
                image.src = 'weather/64x64/day/296.png';
                break;
                
            case 1186:
                image.src = 'weather/64x64/day/299.png';
                break;

            case 1189:
                image.src = 'weather/64x64/day/302.png';
                break;
            case 1192:
                image.src = 'weather/64x64/day/305.png';
                break;
            case 1195:
                image.src = 'weather/64x64/day/308.png';
                break;
            case 1198:
                image.src = 'weather/64x64/day/311.png';
                break;
                
            case 1201:
                image.src = 'weather/64x64/day/314.png';
                break;

            case 1204:
                image.src = 'weather/64x64/day/317.png';
                break;
            case 1207:
                image.src = 'weather/64x64/day/320.png';
                break;
            case 1210:
                image.src = 'weather/64x64/day/323.png';
                break;
            case 1213:
                image.src = 'weather/64x64/day/326.png';
                break;
            case 1216:
                image.src = 'weather/64x64/day/329.png';
                break;
                
            case 1219:
                image.src = 'weather/64x64/day/332.png';
                break;

            case 1222:
                image.src = 'weather/64x64/day/335.png';
                break;
            case 1225:
                image.src = 'weather/64x64/day/338.png';
                break;
            case 1237:
                image.src = 'weather/64x64/day/350.png';
                break;
            case 1240:
                image.src = 'weather/64x64/day/353.png';
                break;
            case 1243:
                image.src = 'weather/64x64/day/356.png';
                break;
            case 1246:
                image.src = 'weather/64x64/day/359.png';
                break;
                
            case 1249:
                image.src = 'weather/64x64/day/362.png';
                break;

            case 1252:
                image.src = 'weather/64x64/day/365.png';
                break;
            case 1255:
                image.src = 'weather/64x64/day/368.png';
                break;
            case 1258:
                image.src = 'weather/64x64/day/371.png';
                break;
            case 1261:
                image.src = 'weather/64x64/day/374.png';
                break;
            case 1264:
                image.src = 'weather/64x64/day/377.png';
                break;
            case 1273:
                image.src = 'weather/64x64/day/386.png';
                break;
            case 1276:
                image.src = 'weather/64x64/day/389.png';
                break;
                
            case 1279:
                image.src = 'weather/64x64/day/392.png';
                break;

            case 1282:
                image.src = 'weather/64x64/day/395.png';
                break;

                
            default:
                image.src = '';
        }

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
});
