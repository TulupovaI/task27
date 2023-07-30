
 function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const hoursSpan = document.getElementById('hours');
      const minutesSpan = document.getElementById('minutes');
      const secondsSpan = document.getElementById('seconds');

      
      if (hoursSpan.textContent !== hours) {
        hoursSpan.textContent = hours;
      }

      if (minutesSpan.textContent !== minutes) {
        minutesSpan.textContent = minutes;
      }
     
      if (secondsSpan.textContent !== seconds) {
        secondsSpan.textContent = seconds;
      }
    }

   
    setInterval(updateClock, 1000);

    updateClock();


