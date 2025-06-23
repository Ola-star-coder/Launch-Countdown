const countDown = () =>{
  const date = new Date('July 3, 2025 00:00:00').getTime();
  const now = new Date().getTime();
  const difference = date - now;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeInDays = Math.floor(difference / days);
  let timeInHours = Math.floor((difference % days) / hours);
  let timeInMinutes = Math.floor((difference % hours) / minutes);
  let timeInSeconds = Math.floor((difference % minutes) / seconds);

  timeInDays = timeInDays < 10 ? '0' + timeInDays : timeInDays
  timeInHours = timeInHours < 10 ? '0' + timeInHours :timeInHours
  timeInMinutes = timeInMinutes < 10 ? '0' + timeInMinutes :  timeInMinutes
  timeInSeconds = timeInSeconds < 10 ? '0' + timeInSeconds : timeInSeconds

  document.getElementById('days').innerHTML = timeInDays;
  document.getElementById('hours').innerHTML = timeInHours;
  document.getElementById('minutes').innerHTML = timeInMinutes;
  document.getElementById('seconds').innerHTML = timeInSeconds;
}

setInterval(countDown, 1000)
countDown();