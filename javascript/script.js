let date = new Date();
let year =  date.getFullYear();
document.getElementById("actualYear").textContent = year;

document.getElementById("lastUpdated").textContent = "Last Updated: " + document.lastModified;