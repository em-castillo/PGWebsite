//Let's store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL) //fetch method, URL is argument
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {//work with the converted response data in JavaScript object format
    
    //store the results of the converted response into an array
    const towns = jsonObject['towns'];

    //select output location
    //const cards = document.querySelector('.cards');

    for (let i = 0; i < towns.length; i++) {
        if (towns.name == 'Fish Haven' || towns.name == 'Preston' || towns.name == 'Soda Springs') {
        let card = document.createElement('div');
        let info = document.createElement('section');
        let photo = document.createElement('figure');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let yearFound = document.createElement('p');
        let population = document.createElement('p');
        let rainFall = document.createElement('p');
        let image = document.createElement('img');
        

        //use template literals ``
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        yearFound.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent ='Population: ' + towns[i].currentPopulation;;
        rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + ' in';
        image.setAttribute('src', 'images/'+towns[i].photo);
        image.setAttribute('alt', towns[i].name + ', Idaho');
        image.setAttribute('loading', 'lazy');


        info.appendChild(h2);
        info.appendChild(h3); 
        info.appendChild(yearFound);
        info.appendChild(population);
        info.appendChild(rainFall);
        card.appendChild(info);
        
        photo.appendChild(image);
        card.appendChild(photo);
        
        document.getElementById('cards').appendChild(card);
        }
    }
  });
