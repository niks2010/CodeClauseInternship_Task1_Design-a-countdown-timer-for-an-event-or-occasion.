// script.js

// Set the date and time for the event
const eventDate = new Date("December 31, 2024 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Calculate days, hours, minutes, and seconds left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Check if the countdown is finished
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}

// Update the countdown every 1 second
const countdown = setInterval(updateCountdown, 1000);
