const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm");
const dateElement = document.getElementById("date");
const dayNight = document.getElementById("day-night");
const dayNightIcon = document.getElementById("day-night-icon");
const timezone = document.getElementById("timezone");
const screenSize = document.getElementById("screen-size");
const batteryStatus = document.getElementById("battery-status");
const currentYear = document.getElementById("current-year");

// Days and months arrays
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];


function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hr.innerHTML = hours < 10 ? "0" + hours : hours;
  min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;


  const isPM = hours >= 12;
  ampm.innerHTML = isPM ? "PM" : "AM";


  const displayHours = hours % 12 || 12;
  hr.innerHTML = displayHours < 10 ? "0" + displayHours : displayHours;


  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const dayNum = date.getDate();
  dateElement.innerHTML = `${dayName}, ${monthName} ${dayNum}`;


  const isDayTime = hours >= 6 && hours < 18;
  dayNight.innerHTML = isDayTime ? "Day" : "Night";

  
  const iconElement = dayNightIcon.querySelector("i");
  if (isDayTime) {
    iconElement.className =
      "fas fa-sun text-2xl text-yellow-300 pulse-animation";
  } else {
    iconElement.className =
      "fas fa-moon text-2xl text-blue-300 pulse-animation";
  }


  timezone.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;
}


function updateScreenSize() {
  const width = window.innerWidth;
  if (width < 640) {
    screenSize.innerHTML = "Mobile";
  } else if (width < 1024) {
    screenSize.innerHTML = "Tablet";
  } else {
    screenSize.innerHTML = "Desktop";
  }
}

function updateBatteryStatus() {
  const date = new Date();
  const seconds = date.getSeconds();
}

// Initialize and update everything
function updateAll() {
  updateTime();
  updateScreenSize();
  updateBatteryStatus();
}

// Set current year in footer
currentYear.innerHTML = new Date().getFullYear();

// Initial call
updateAll();

// Update time every second
setInterval(updateAll, 1000);

window.addEventListener("resize", updateScreenSize);

document.querySelectorAll(".time-digit").forEach((digit) => {
  digit.addEventListener("click", function () {
    this.style.transform = "scale(1.1)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 200);
  });
});
