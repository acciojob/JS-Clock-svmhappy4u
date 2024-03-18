function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const hourDegrees = (hour * 30) + (0.5 * minute); // 360 degrees / 12 hours
    const minuteDegrees = (minute * 6) + (0.1 * second); // 360 degrees / 60 minutes
    const secondDegrees = second * 6; // 360 degrees / 60 seconds

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock to the current time
updateClock();
