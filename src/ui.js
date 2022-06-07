import { fetchWeather,setCity } from "./fetchweather";




function createWeatherCard(){
    fetchWeather().then((response) => {
       let card = document.createElement('div');
       card.id = 'card';
       card.innerHTML = `
       <p> ${response.cityName} </p>
       <p> Temperature : ${response.temp} </p>
       <p> Feels Like : ${response.feelsLike} </p>
       <p> Weather Desc. : ${response.weatherDescription} </p>
       `;
       document.getElementById('page-container').appendChild(card);
      });
      
      
}
function removeWeatherCard(){
    document.getElementById('card').remove();
}

(function getCity(){
    document.getElementById('search-button').addEventListener('click',function(){
        setCity(document.getElementById('search-input').value);
        console.log('pressed.');
        fetchWeather();
        removeWeatherCard();    
        createWeatherCard();
    });
})();


export{createWeatherCard};