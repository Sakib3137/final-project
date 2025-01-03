const launchDate = new Date("2025-01-15T00:00:00").getTime();
    
      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = launchDate - now;
    
        if (timeRemaining > 0) {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
          document.getElementById("days").innerText = days;
          document.getElementById("hours").innerText = hours;
          document.getElementById("minutes").innerText = minutes;
          document.getElementById("seconds").innerText = seconds;
        } else {
          clearInterval(countdownInterval);
          document.getElementById("countdown").innerHTML =
            '<span class="text-green-500 text-3xl">The collection is now available!</span>';
        }
      }, 1000);