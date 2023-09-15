const infoContainer = document.getElementById("infoContainer");
const textWeather = document.getElementById("textWeather");
const mainTime = document.getElementById("mainTime");
const weather = document.getElementById("weather");
const mainCity = document.getElementById("city");
const search = document.getElementById("search");
const input = document.getElementById("input");
const body = document.getElementById("body");
const flag = document.getElementById("flag");


let cityForForecast = '';

let weatherCodesIcon = {
  1000: 'https://files.readme.io/48b265b-weather_icon_small_ic_clear3x.png',
  "1000Night": 'https://files.readme.io/a31c783-weather_icon_small_ic_clear_night3x.png',
  1100: 'https://files.readme.io/c3d2596-weather_icon_small_ic_mostly_clear3x.png',
  "1100Night":'https://files.readme.io/28c3d6e-weather_icon_small_ic_mostly_clear_night3x.png',
  1101: 'https://files.readme.io/5ef9011-weather_icon_small_ic_partly_cloudy3x.png',
  "1101Night":'https://files.readme.io/6af2ec5-weather_icon_small_ic_partly_cloudy_night3x.png',
  1102: 'https://files.readme.io/6beaa54-weather_icon_small_ic_mostly_cloudy3x.png',
  "1102Night":'https://files.readme.io/9e23bdd-weather_icon_small_ic_mostly_cloudy_night3x.png',
  1001: 'https://files.readme.io/4042728-weather_icon_small_ic_cloudy3x.png',
  2100: 'https://files.readme.io/76580b9-weather_icon_small_ic_fog_light3x.png',
  2000: 'https://files.readme.io/8d37852-weather_icon_small_ic_fog3x.png',
  4000: 'https://files.readme.io/f22e925-weather_icon_small_ic_rain_drizzle3x.png',
  4200: 'https://files.readme.io/ea98852-weather_icon_small_ic_rain_light3x.png',
  4001: 'https://files.readme.io/aab8713-weather_icon_small_ic_rain3x.png',
  4201: 'https://files.readme.io/fdacbb8-weather_icon_small_ic_rain_heavy3x.png',
  5001: 'https://files.readme.io/1174193-weather_icon_small_ic_flurries3x.png',
  5100: 'https://files.readme.io/c736bc9-weather_icon_small_ic_snow_light3x.png',
  5000: 'https://files.readme.io/731a898-weather_icon_small_ic_snow3x.png',
  5101: 'https://files.readme.io/20c73b9-weather_icon_small_ic_snow_heavy3x.png',
  6000: 'https://files.readme.io/43b5585-weather_icon_small_ic_freezing_rain_drizzle3x.png',
  6200: 'https://files.readme.io/9d1a4dc-weather_icon_small_ic_freezing_rain_light3x.png',
  6001: 'https://files.readme.io/321062d-weather_icon_small_ic_freezing_rain3x.png',
  6201: 'https://files.readme.io/2f614b7-weather_icon_small_ic_freezing_rain_heavy3x.png',
  7102: 'https://files.readme.io/8cde587-weather_icon_small_ic_ice_pellets_light3x.png',
  7000: 'https://files.readme.io/314349c-weather_icon_small_ic_ice_pellets3x.png',
  7101: 'https://files.readme.io/d5707d4-weather_icon_small_ic_ice_pellets_heavy3x.png',
  8000: 'https://files.readme.io/39fb806-weather_icon_small_ic_tstorm3x.png'
}

// погодные коды для расшифровки 
let weatherCodes = {
  1000: 'Clear',
  1100: 'Mostly Clear',
  1101: 'Partly Cloudy',
  1102: 'Mostly Cloudy',
  1001: 'Cloudy',
  2100: 'Light Fog',
  2000: 'Fog',
  4000: 'Drizzle',
  4200: 'Light Rain',
  4001: 'Rain',
  4201: 'Heavy Rain',
  5001: 'Flurries',
  5100: 'Light Snow',
  5000: 'Snow',
  5101: 'Heavy Snow',
  6000: 'Freezing Drizzle',
  6200: 'Light Freezing Drizzle',
  6001: 'Freezing Rain',
  6201: 'Heavy Freezing Rain',
  7102: 'Light Ice Pellets',
  7000: 'Ice Pellets',
  7101: 'Heavy Ice Pellets',
  8000: 'Thunderstorm'
}

let weatherCodesBackground = {
  1000: 'https://i.ytimg.com/vi/Dy5iEWmuVfQ/maxresdefault.jpg',
  "1000Night":'https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_noch_derevia_118760_3840x2160.jpg',
  1100: 'https://c1.wallpaperflare.com/preview/255/1000/842/sky-nature-clouds-day-s.jpg',
  1101: 'https://c1.wallpaperflare.com/preview/255/1000/842/sky-nature-clouds-day-s.jpg',
  1102: 'https://c1.wallpaperflare.com/preview/255/1000/842/sky-nature-clouds-day-s.jpg',
  1001: 'https://images.wallpaperscraft.ru/image/single/nebo_oblaka_luchi_229496_3840x2400.jpg',
  2100: 'https://c1.wallpaperflare.com/preview/482/570/361/trees-fog-forest-green.jpg',
  2000: 'https://c0.wallpaperflare.com/preview/786/347/690/4k-wallpaper-conifers-desktop-wallpaper-environment.jpg',
  4000: 'https://c0.wallpaperflare.com/preview/913/635/808/south-africa-sabie-view-cold.jpg',
  4200: 'https://c0.wallpaperflare.com/preview/913/635/808/south-africa-sabie-view-cold.jpg',
  4001: 'https://c4.wallpaperflare.com/wallpaper/359/235/577/nature-landscape-trees-forest-wallpaper-preview.jpg',
  4201: 'https://c4.wallpaperflare.com/wallpaper/892/1002/482/rain-drops-splashes-heavy-rain-dullness-bad-weather-wallpaper-preview.jpg',
  5001: 'https://c4.wallpaperflare.com/wallpaper/59/39/745/winter-snow-snowfall-flakes-wallpaper-preview.jpg',
  5100: 'https://c4.wallpaperflare.com/wallpaper/59/39/745/winter-snow-snowfall-flakes-wallpaper-preview.jpg',
  5000: 'https://c1.wallpaperflare.com/preview/494/864/857/winter-beauty-snow-seasons.jpg',
  5101: 'https://c1.wallpaperflare.com/preview/494/864/857/winter-beauty-snow-seasons.jpg',
  6000: 'https://rare-gallery.com/thumbs/563039-frozen-frozen.jpg',
  6200: 'https://rare-gallery.com/thumbs/563039-frozen-frozen.jpg',
  6001: 'https://c1.wallpaperflare.com/preview/406/586/466/frozen-zing-rain-cold.jpg',
  6201: 'https://c1.wallpaperflare.com/preview/173/757/95/zing-rain-winter-ice-rain.jpg',
  7102: 'https://c1.wallpaperflare.com/preview/734/617/132/hailstones-hail-weather-in-april-eiskl%C3%BCmpchen.jpg',
  7000: 'https://c1.wallpaperflare.com/preview/734/617/132/hailstones-hail-weather-in-april-eiskl%C3%BCmpchen.jpg',
  7101: 'https://c1.wallpaperflare.com/preview/734/617/132/hailstones-hail-weather-in-april-eiskl%C3%BCmpchen.jpg',
  8000: 'https://c4.wallpaperflare.com/wallpaper/246/411/711/thunder-lightning-sky-atmosphere-wallpaper-preview.jpg'
}

function clock() {
  let time = mainTime.innerHTML;
  let [hours, minutes, seconds] = time.split(":");
    
  let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  totalSeconds++; // увеличиваем на одну секунду
    
  let newHours = Math.floor(totalSeconds / 3600);
  let newMinutes = Math.floor((totalSeconds % 3600) / 60);
  let newSeconds = totalSeconds % 60;
    
    // добавляем ведущие нули, если необходимо
  let formattedTime = (newHours < 10 ? "0" + newHours : newHours) + ":" +
                      (newMinutes < 10 ? "0" + newMinutes : newMinutes) + ":" +
                      (newSeconds < 10 ? "0" + newSeconds : newSeconds);
  mainTime.innerHTML = formattedTime.toString();
  if(minutes == 0 && seconds == 0){
    countrySearch(cityForForecast);
  }
}

// отображает время в прогнозе погоды
function timeForecast(time) {
  let timeNow = parseInt(time.slice(0, 2));
  for(let i = 1; i <= 23; i++) {
    let infoBox = document.getElementById("info"+i);
    let result = timeNow + i;
    if(result > 23){
      result = result - 24;
    }
    if(result.toString().length==1){
      result = `0${result}:00`;
    } else if(result.toString().length==2){
      result = `${result}:00`;
    }
    infoBox.querySelector(`#time${i}`).innerHTML = result;
  }
}

// устанавливаем время через таймзону, полученную из ip
function ipTime(timeZone) {
  fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`)
  .then(response => response.json())
  .then(data => {
    let start = data.datetime.indexOf("T")+1;
    const time = data.datetime.slice(start, start+8);
    mainTime.innerHTML = time.toString();
    timeForecast(time.toString());
    setInterval(clock, 1000);
  })
}

// время в выбранном городе
function timeInTown(lat, lon) {
  fetch(` http://api.timezonedb.com/v2.1/get-time-zone?key=EP6EB08KL1VR&format=json&by=position&lat=${lat}&lng=${lon}`)
  .then(response => response.json())
  .then(data => {
    time = data.formatted.slice(-8);
    mainTime.innerHTML = time;
    timeForecast(time.toString());
  })
}

// узнаём город по ip
function showData(ip){
  fetch(`https://ipapi.co/${ip}/json/`)
  .then(response => response.json())
  .then(data => {
    cityForForecast = data.city;
    countrySearch(data.city);
    ipTime(data.timezone);
  })
}

// посылаем API запрос, чтобы узнать ip
async function getData() { 
  const url = "https://api.ipify.org?format=json";
  const res = await fetch(url);
  const data = await res.json();
    showData(data.ip);
}

// погода по заданным координатам
function weatherInTown(lat, lon) {
  fetch(`https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=weatherCode&timesteps=1h&units=metric&apikey=MymvQ107XihQbHN6GBZn94mfP2QlyfkF`)
  .then(respone => respone.json())
  .then(data => {
    textWeather.innerHTML = weatherCodes[data.data.timelines[0].intervals[0].values.weatherCode];
    let hours = mainTime.innerHTML.slice(0, 2);

    if((data.data.timelines[0].intervals[0].values.weatherCode == 1000)&& (Number(hours) >= 20 || Number(hours) <= 5)){
      body.style.backgroundImage = `url(${weatherCodesBackground[data.data.timelines[0].intervals[0].values.weatherCode + 'Night']})`
    } else {
    body.style.backgroundImage = `url(${weatherCodesBackground[data.data.timelines[0].intervals[0].values.weatherCode]})`
    }

    if ((data.data.timelines[0].intervals[0].values.weatherCode == 1000 ||
      data.data.timelines[0].intervals[0].values.weatherCode == 1100 ||
      data.data.timelines[0].intervals[0].values.weatherCode == 1101 ||
      data.data.timelines[0].intervals[0].values.weatherCode == 1102) &&
     (Number(hours) >= 20 || Number(hours) <= 5)){
      let newUrl = `url(${weatherCodesIcon[data.data.timelines[0].intervals[0].values.weatherCode + 'Night']})`
      weather.style.backgroundImage = newUrl;
    } else {
    weather.style.backgroundImage = `url(${weatherCodesIcon[data.data.timelines[0].intervals[0].values.weatherCode]})`
    }

    for(let i = 1; i <= 23; i++) {
      let infoBox = document.getElementById("info"+i);
      let weather = weatherCodes[data.data.timelines[0].intervals[i].values.weatherCode];
      infoBox.querySelector(`#textWeather${i}`).innerHTML = weather;

      let hoursForecast = infoBox.querySelector(`#time${i}`).innerHTML.slice(0, 2);
      if ((data.data.timelines[0].intervals[i].values.weatherCode == 1000 ||
        data.data.timelines[0].intervals[i].values.weatherCode == 1100 ||
        data.data.timelines[0].intervals[i].values.weatherCode == 1101 ||
        data.data.timelines[0].intervals[i].values.weatherCode == 1102) &&
       (Number(hoursForecast) >= 20 || Number(hoursForecast) <= 5)){
        let newUrl = `url(${weatherCodesIcon[data.data.timelines[0].intervals[i].values.weatherCode + 'Night']})`
        infoBox.querySelector(`#weather${i}`).style.backgroundImage = newUrl;
      } else if ((Number(hoursForecast) < 20 || Number(hoursForecast) > 5)){
      infoBox.querySelector(`#weather${i}`).style.backgroundImage = `url(${weatherCodesIcon[data.data.timelines[0].intervals[i].values.weatherCode]}`;
      }
    }
  })
}

// по городу получаем код страны, например RU
function countrySearch(input) {
  infoContainer.scrollTop = 0;
  cityForForecast = input;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fe3e615ffe44f4dd05df4eacf0df4c0c`)
  .then(response => response.json())
  .then(data => {
    timeInTown(data.coord.lat, data.coord.lon)
    countryFlag(data.sys.country, data.name);
    weatherInTown(data.coord.lat, data.coord.lon)
  })}


  // по коду сраны получаем флаг
  function countryFlag(country, city){
  fetch(`https://restcountries.com/v2/alpha/${country}`)
  .then(response => response.json())
  .then(data => {
    flag.style.backgroundImage = `url("${data.flags.svg}")`;
    mainCity.innerHTML = data.alpha2Code + " " + city;
  })
}

input.addEventListener('keypress', (e) => {
  if (e.key == 'Enter'){
    countrySearch(input.value);
    }
  })

search.addEventListener("click", () => {
  countrySearch(input.value);
})

getData();
