function toggleMenu() {
    
    document.getElementById("navigation").classList.toggle("hide");
  }

//date Saturday, January 30 2021
const daynames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + year;
const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById("currentDate").textContent = currentdate;

//saturday, 13 february 2021
const today = new Date();
      console.log(today);

      const dayNumber = today.getDay();
      console.log(dayNumber);


//font
WebFont.load({
  google: {
    families: ["Merriweather", "Lato"],
  },
});
      