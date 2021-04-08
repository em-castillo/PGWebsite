let date = new Date(document.lastModified);
let yearh =  date.getFullYear();
document.getElementById("actualYear").textContent = yearh;

document.getElementById("lastUpdated").textContent = "Last Updated: " + document.lastModified;
