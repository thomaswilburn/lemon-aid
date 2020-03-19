var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
var today = new Date();
var day = today.getDay();
var span = document.querySelector(".day");
span.innerHTML = days[day];