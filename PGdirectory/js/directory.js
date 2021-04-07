//Let's store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://em-castillo.github.io/PG%20directory/json%20file/directory.json';

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

    document.getElementById("swap").classList.add("directoryGrid");
    document.getElementById("swap").classList.remove("directoryList");
    document.getElementById("grid").classList.add("currentView");
    document.getElementById("list").classList.remove("currentView");
}

  function listView() {

    document.getElementById("swap").classList.remove("directoryGrid");
    document.getElementById("swap").classList.add("directoryList");
    document.getElementById("grid").classList.remove("currentView");
    document.getElementById("list").classList.add("currentView");
}