const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');

async function checkweather(city){
    const api_key="fd61bec38856f271606bf38c2c9313f0";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data= await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        
        console.log("error");
        return;
    }
    
    
    temperature.innerHTML=`${Math.round (weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.temp}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){
        case 'clouds':
            weather_img.src = "/assests/clouds.png";
            break;
        case 'clear':
            weather_img.src = "/assests/clear.png"; 
            break;
        case 'drizzle':
            weather_img.src = "/assests/drizzle.png";
            break;
        case 'mist':
            weather_img.src = "/assests/mist.png"; 
            break;
        case 'rain':
            weather_img.src = "/assests/rain.png";
            break;
        case 'snow':
            weather_img.src = "/assests/snow.png";
            break;
         
    }
    console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
    checkweather(inputBox.value)
});
