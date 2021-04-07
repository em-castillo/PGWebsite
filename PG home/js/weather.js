// THREE DAY FORECAST
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
const apiURL = "//api.openweathermap.org/data/2.5/forecast?zip=84062,us&cnt=3&appid=1357ddda435ebfa52334c265dcad4f70&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    //Once it comes back, display it to the console.
    // console.log(weatherInfo);
    
    document.getElementById('current').innerHTML= weatherInfo.list[0].weather[0].description; //check console for name
    document.getElementById('temp').innerHTML= weatherInfo.list[0].main.temp_max;
    document.getElementById('humid').innerHTML= weatherInfo.list[0].main.humidity;
    
    
//THREE DAY FORECAST
// const apiaURL = "//api.openweathermap.org/data/2.5/weather?zip=84062,us&appid=1357ddda435ebfa52334c265dcad4f70&units=imperial";

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

          let theDayName = document.createElement('h3');
          theDayName.textContent = weekday[forecastDayNumber];

          let theTemp = document.createElement('p');
          theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

          let iconCode = weatherInfo.list[i].weather[0].icon;
          let iconPath = '//openweathermap.org/img/w/' + iconCode + '.png';
          let theIcon = document.createElement('img');
          theIcon.alt = `Icon image of ${weatherInfo.list[i].weather[0].description}`;
          theIcon.src = iconPath;
        
          let theDay = document.createElement('div');
          theDay.appendChild(theDayName);
          theDay.appendChild(theTemp);
          theDay.appendChild(theIcon);

          document.getElementById('threeDays').appendChild(theDay);
  
      }
    }

 }); //end of "then" fat arrow function

 