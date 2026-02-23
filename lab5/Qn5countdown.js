let countdown; 
let time = 5 * 60; // 5 minutes in seconds

function startTimer() {
    clearInterval(countdown); // prevent multiple timers

    countdown = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById("timer").innerHTML = displayMinutes + ":" + displaySeconds;

        if (time <= 0) {
            clearInterval(countdown);
            alert("Time's up!");

            // Reset automatically to 5:00
            time = 5 * 60;
            document.getElementById("timer").innerHTML = "05:00";
            return;
        }

        time--;
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    time = 5 * 60;
    document.getElementById("timer").innerHTML = "05:00";
}