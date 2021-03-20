// FIVE DAY FORECAST
const d = new Date();
const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//WEATHER SUMMARY
//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5585010&appid=860f7aa8effb0c4164aa06fbaf570ba8&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('current').innerHTML= weatherInfo.list[0].weather[0].description; //check console for name
    document.getElementById('temp').innerHTML= weatherInfo.list[0].main.temp_max;
    document.getElementById('humid').innerHTML= weatherInfo.list[0].main.humidity;
    document.getElementById('speed').innerHTML= weatherInfo.list[0].wind.speed;

    //wind chill
    const tempNumber =  weatherInfo.list[0].main.temp;
    const speedNumber = weatherInfo.list[0].wind.speed;

    let windchill = 35.75 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
    windchill =  Math.round(windchill);

    if(tempNumber <= 50 && speedNumber > 3){
      document.getElementById('chill').textContent = "Wind Chill: " +windchill+ "\xB0F";
}
    else{
      document.getElementById('chill').textContent =  "No Wind Chill Today";

}
    
//FIVE DAY FORECAST
// const apiaURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=05f41fc7ad683844ae8d5bfe48afac6a&units=imperial";

// fetch(apiaURL)
//   .then((response) => response.json())
//   .then((weatherInfo) => {
//     console.log(weatherInfo);
    
    let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;

      for (i = 0; i < mylist.length; i++){

        let time = mylist[i].dt_txt;
        if (time.includes('18:00:00')) {

          forecastDayNumber += 1;
          if (forecastDayNumber === 7){forecastDayNumber = 0;}

          let theDayName = document.createElement('h4');
          theDayName.textContent = weekday[forecastDayNumber];

          let theTemp = document.createElement('p');
          theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

          let iconCode = weatherInfo.list[i].weather[0].icon;
          let iconPath = '//openweathermap.org/img/w/' + iconCode + '.png';
          let theIcon = document.createElement('img');
          theIcon.src = iconPath;
        
          let theDay = document.createElement('div');
          theDay.appendChild(theDayName);
          theDay.appendChild(theTemp);
          theDay.appendChild(theIcon);

          document.getElementById('fiveDays').appendChild(theDay);
  
      }
    }

 }); //end of "then" fat arrow function

 //events

 const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
 fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven") {
        
      let box = document.createElement("div");
        
        for (let x = 0; x < towns[i].events.length; x++) {
          let info = document.createElement("p");
          console.log(towns[i].events[x]);
          info.textContent = towns[i].events[x];        
          box.appendChild(info);
          document.getElementById("box").appendChild(box); 
        }        
      }
    }
  });

