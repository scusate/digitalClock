function displayTime(){
  const timeNow = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();
  let month = months[timeNow.getMonth()];
  let date = timeNow.getDate();
  let day = days[timeNow.getDay()];
  
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  date = date < 10 ? date = "0" + date : date;
  
  let timeStr = hours + ":" + minutes + ":" + seconds;

  document.getElementById("fullDate").innerHTML = date + " " + month + " " + timeNow.getFullYear()
  document.getElementById("clock").innerText = timeStr;
  document.getElementById("day").innerHTML = day;
}

setInterval(displayTime,1000)
displayTime();