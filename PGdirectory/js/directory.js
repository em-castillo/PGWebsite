//Let's store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://em-castillo.github.io/PGdirectory/jsonfile/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    const cards = document.querySelector('.cards');

    // for (let i = 0; i < directory.length; i++)
    directory.forEach((business) =>  {
        let card = document.createElement('div');
        let info = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');
        

        //use template literals ``
        name.innerHTML = `${business.name}`;
        address.innerHTML = `Address: <br>${business.address}`;
        phone.textContent =`Phone: ${business.phone}`;
        website.innerHTML = `Website: ${business.website}`;
        website.setAttribute("href", `//${business.website}`);
        logo.setAttribute('src', `logos/${business.logo}`);
        logo.setAttribute('alt', `Logo for ${business.name}`);
        logo.setAttribute('loading', 'lazy');

        cards.append(card);
        info.appendChild(name);
        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(website);
        card.appendChild(info);
        card.appendChild(logo);
     
        
        // document.getElementById('cards').appendChild(card);
        });
    
  });

  function gridView() {
    let show = document.getElementById("changeView");
    let unbutton = document.getElementById("listBtn");
    let button = document.getElementById("gridBtn");
    show.setAttribute("class", "cards grid");
    button.setAttribute("class", "joinBtn activebutton");
    unbutton.setAttribute("class", "joinBtn");
  }
  function listView() {
    let show = document.getElementById("changeView");
    let button = document.getElementById("listBtn");
    let unbutton = document.getElementById("gridBtn");
    show.setAttribute("class", "cards list");
    button.setAttribute("class", "joinBtn activebutton");
    unbutton.setAttribute("class", "joinBtn");
  }
  