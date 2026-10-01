
// Get HTML elements
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Timer variables
let minute = 0;
let second = 0;
let millisecond = 0;

let timer = null;


// START button
startBtn.addEventListener("click", function () {

    // Prevent multiple timers
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        millisecond++;

        if (millisecond === 100) {
            millisecond = 0;
            second++;
        }

        if (second === 60) {
            second = 0;
            minute++;
        }

        // Update display
        minutes.innerText = String(minute).padStart(2, "0");
        seconds.innerText = String(second).padStart(2, "0");
        milliseconds.innerText = String(millisecond).padStart(2, "0");

    }, 10);
});


// STOP button
stopBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

});


// RESET button
resetBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

    minute = 0;
    second = 0;
    millisecond = 0;

    minutes.innerText = "00";
    seconds.innerText = "00";
    milliseconds.innerText = "00";

});

