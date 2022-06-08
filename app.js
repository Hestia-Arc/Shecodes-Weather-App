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
    let hour = date.getHours();
  
    if (hour < 10) {
      hour = "0".concat(hour);
    }
    let minutes = date.getMinutes();
  
    if (minutes < 10) {
      minutes = "0".concat(minutes);
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
  
    let week = weekArr[date.getDay()];
  
    return "".concat(week, " ").concat(hour, ":").concat(minutes);
  }
  
  let dateNtime = new Date();
  let date = document.querySelector("#formatDate");
  
  date.innerHTML = dateUp(dateNtime);
  
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
  
      let tempNumber = document.querySelector("#temp");
      tempNumber.innerHTML = finalTemp;
    }
    let apiKey = "1c7c2130c641449415ec3a6426b1d986";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric`;
  
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  }
  let button = document.querySelector("#form-up");
  
  button.addEventListener("submit", changeCity);
  
  /*feature 3
  //fraheinheit
  function changeFra(event) {
    event.preventDefault();
    let temp = document.querySelector("#temp");
  
    temp.innerHTML = 66;
  }
  let letterF = document.querySelector("#aFra");
  letterF.addEventListener("click", changeFra);
  
  //celcius
  function changeCel(event) {
    event.preventDefault();
    let temp = document.querySelector("#temp");
  
    temp.innerHTML = 17;
  }
  let letterC = document.querySelector("#aCel");
  
  letterC.addEventListener("click", changeCel);
  */
  