const time = document.querySelector('h2.clock_time');
const fullDate = document.querySelector('h4.clock_date');

function getTime(event) {
  const date = new Date();
let hours = date.getHours();
   hours = hours <=12 ? hours : hours%12;
   hours = String(hours).padStart('2', '0');
  const minutes = String(date.getMinutes()).padStart('2', '0');
  const sec = String(date.getSeconds()).padStart('2', '0');
  
  time.innerText = `${hours}:${minutes}:${sec}`;
}



setInterval(getTime, 1000);
