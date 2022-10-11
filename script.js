let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
const api = "6d055e39ee237af35ca066f35474e9df";  

const btn = document.querySelector(".btn")

const renderData = (data) =>{
    console.log(data);
            temperature.textContent = 
            Math.floor(data.main.temp - kelvin) + "°C";
            summary.textContent = data.weather[0].description;
            loc.textContent = data.name + "," + data.sys.country;
            let icon1 = data.weather[0].icon;
            icon.innerHTML = 
     `<img src="https://img.icons8.com/color/2x/partly-cloudy-rain--v2.gif" style= 'height:10rem'/>`
  }