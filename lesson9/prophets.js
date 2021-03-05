//Let's store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL) //fetch method, URL is argument
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {//work with the converted response data in JavaScript object format
    
    //store the results of the converted response into an array
    const prophets = jsonObject['prophets'];
    //select output location
    const cards = document.querySelector('.cards');

    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        //use template literals ``
        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;

        card.append(h2);
        cards.append(card);  

        

    });
  });

  

  