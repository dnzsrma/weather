import { fetchWeather,setCity } from "./fetchweather";




function createPage(){
    fetchWeather().then((response) => {
       let card = document.createElement('div');
       card.id = 'card';
       card.innerHTML = `
       <h2> ${response.cityName} </h2>
       <p> Temperature : ${response.temp} </p>
       <p> Feels Like : ${response.feelsLike} </p>
       <p> Weather Desc. : ${response.weatherDescription} </p>
       `;
       document.getElementById('page-container').appendChild(card);
       setBackground(parseInt(response.weatherId));
       
      })
      .catch(err => alert('No such city.'))
      ;
      
function setBackground(id){
    let sunnyBg = 'url(https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif)';
    let cloudyBg = 'url(https://media.giphy.com/media/mno6BJfy8USic/giphy.gif)';
    let foggyBg = 'url(https://media.giphy.com/media/yhZr5Wx7CBFbq/giphy.gif)';
    let drizzleBg ='url(https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif)';
    let snowyBg = 'url(https://media.giphy.com/media/Xi2Xu0MejhsUo/giphy.gif)';
    let thunderBg = 'url(https://media.giphy.com/media/8xY1YYpEZ4dws/giphy.gif)';
    let rainyBg = 'url(https://media.giphy.com/media/l0Iy5fjHyedk9aDGU/giphy.gif)';
    if(id > 199 && id < 300){
        document.body.style.backgroundImage = thunderBg;
    }
    else if(id > 299 && id < 400){
        document.body.style.backgroundImage = drizzleBg;
    }
    else if(id > 499 && id < 600){
        document.body.style.backgroundImage = rainyBg;
    }
    else if(id > 599 && id < 700){
        document.body.style.backgroundImage = snowyBg;
    }
    else if(id > 699 && id < 800){
        document.body.style.backgroundImage = foggyBg;
    }
    else if(id > 800){
        document.body.style.backgroundImage = cloudyBg;
    }
    else{
        document.body.style.backgroundImage = sunnyBg;
    }
    
}
}
function removeWeatherCard(){
    if( document.getElementById('card')){
        document.getElementById('card').remove();
    }
}

(function getCity(){
    document.getElementById('search-button').addEventListener('click',function(){
        setCity(document.getElementById('search-input').value);
        console.log('pressed.');
        fetchWeather();
        removeWeatherCard();    
        createPage();
    });
})();


export{createPage};