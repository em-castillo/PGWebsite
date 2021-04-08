let date = new Date(document.lastModified);

document.getElementById("lastUpdated").textContent = "Last Updated: " + document.lastModified;

//font
WebFont.load({
    google: {
      families: ["Playfair Display"],
    },
  });