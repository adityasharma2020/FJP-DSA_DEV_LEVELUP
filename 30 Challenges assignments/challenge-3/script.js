function Time() {


    let date = new Date();
   

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
   
    let period = "";
   
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
   
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }

    hour = update(hour);
    minute = update(minute);
    second = update(second);
   
    document.getElementById("Clocktime").innerText = hour + " : " + minute + " : " + second + " " + period;
   
    setTimeout(Time, 1000);
   }
   
   function update(time) {
    if (time < 10) {
    return "0" + time;
    }
    else {
    return time;
    }
   }
   
   
   Time();