/* let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};
*/
// write your code here

//feature 1
function dateUp(date) {
  let dateNtime = new Date(date);

    let hour = dateNtime.getHours();
  
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = dateNtime.getMinutes();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let weekArr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let week = weekArr[dateNtime.getDay()];
  
    return `${week} ${hour}:${minutes}`;
  }
  

  
  
  //feature 2
  function changeCity() {
    event.preventDefault();
  
    let city = document.querySelector("#city");
    let search = document.querySelector("#search");
  
    city.innerHTML = search.value;
  
    //task
  
    function showTemperature(response) {
      let apiTemp = response.data.main.temp;
      let finalTemp = Math.round(apiTemp);
      
      celTemp = finalTemp;
  
      let tempNumber = document.querySelector("#temp");
      let weatherDescription = document.querySelector("#weather");
      let date = document.querySelector("#formatDate");
      let icon = document.querySelector("#icon");
      let windSpeed = document.querySelector("#speed");
      
 
      tempNumber.innerHTML = finalTemp;
      weatherDescription.innerHTML = response.data.weather[0].description;
      date.innerHTML = dateUp(response.data.dt * 1000);
      icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
      windSpeed.innerHTML = response.data.wind.speed;


    }
    let apiKey = "1c7c2130c641449415ec3a6426b1d986";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric`;
  
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  }
  let button = document.querySelector("#form-up");
  
  button.addEventListener("submit", changeCity);

  //fraheinheit
  function changeTempFra(event) {
    event.preventDefault();
    let temp = document.querySelector("#temp");
    let fraCalculation = ( celTemp * 9 ) / 5 + 32;
  
    temp.innerHTML = Math.round(fraCalculation);
  }

  let celTemp = null;
  let letterF = document.querySelector("#aFra");
  letterF.addEventListener("click", changeTempFra);
  
  //celcius
  function changeCel(event) {
    event.preventDefault();
    let temp = document.querySelector("#temp");
  
    temp.innerHTML = celTemp;
  }

  let letterC = document.querySelector("#aCel"); 
  letterC.addEventListener("click", changeCel);
  
  