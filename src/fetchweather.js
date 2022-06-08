let apiKey = '2b7c626a570ada7a8ef2ee896d5e9242';
let city = 'london';



async function fetchWeather(){
    let fetched = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`, {
        mode: 'cors'
      });
    let response = await fetched.json();
    let temp = response.main.temp;
    let cityName = response.name
    let feelsLike = response.main.feels_like;
    let weatherDescription = response.weather[0].description;
    let weatherId = response.weather[0].id;
    return {cityName,temp,feelsLike,weatherDescription,weatherId};
}
function setCity(name){
    city = name;
}

export {
    setCity,
    fetchWeather,
}