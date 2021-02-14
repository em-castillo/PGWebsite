let date = new Date(document.lastModified);
let year =  date.getFullYear();
document.getElementById("actualYear").textContent = year;

document.getElementById("lastUpdated").textContent = "Last Updated: " + document.lastModified;

//font
WebFont.load({
    google: {
      families: ["Playfair Display"],
    },
  });