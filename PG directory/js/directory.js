//Let's store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://em-castillo.github.io/PG%20directory/json%20file/directory.json';

fetch(requestURL) //fetch method, URL is argument
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {//work with the converted response data in JavaScript object format
    
    //store the results of the converted response into an array
    const towns = jsonObject['directory'];

    //select output 
    //const cards = document.querySelector('.cards');

    for (let i = 0; i < directory.length; i++) { {
        let card = document.createElement('div');
        let info = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');
        

        //use template literals ``
        name.textContent = directory[i].name;
        address.textContent = 'Address: ' + directory[i].address;
        phone.textContent ='Phone: ' + directoty[i].phone;
        website.textContent = 'Website: ' + directory[i].website;
        logo.setAttribute('src', 'logos/'+directory[i].logo);
        logo.setAttribute('alt', directory[i].name);
        logo.setAttribute('loading', 'lazy');


        info.appendChild(name);
        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(website);
        card.appendChild(info);
        
        photo.appendChild(logo);
        card.appendChild(photo);
        
        document.getElementById('cards').appendChild(card);
        }
    }
  });
