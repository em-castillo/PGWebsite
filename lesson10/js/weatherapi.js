const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1e0da527dceafe47e24cf6935e9e1ab8&units=imperial';

fetch(apiURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);

    //write the temperature value to the HTML document using id value of the <span> tag with the id of 'current-temp'.
    document.getElementById('current-temp').textContent = jsonObject.main.temp;

//Use a variable to store the image address which needs to be concatenated together given the API icon code value result.
const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';

//Use a variable to store the weather description.
const desc = jsonObject.weather[0].description;

//Assign the <span> tag  with the id of 'imagesrc' the concatenated image variable to to display the full address for testing purposes.
document.getElementById('imagesrc').textContent = imagesrc;

//Set the src attribute for the <img> with the id of 'icon'
document.getElementById('icon').setAttribute('src', imagesrc);

//Set the alt attribute for the <img> for accessibility.
document.getElementById('icon').setAttribute('alt', desc);



});