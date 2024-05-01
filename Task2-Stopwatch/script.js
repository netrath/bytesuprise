let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let laps = [];

function startStop() {
    console.log("Start/Stop button clicked"); 
    if (!timer) {
        timer = setInterval(run, 10);
        document.getElementById("startStop").innerHTML = "Stop";
    } else {
        clearInterval(timer);
        timer = false;
        document.getElementById("startStop").innerHTML = "Start";
    }
}

function run() {
    console.log("Timer is running"); 
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("countdown").innerHTML = 
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}


function reset() {
    console.log("Reset button clicked"); 
    clearInterval(timer);
    timer = false;
    minutes = seconds = milliseconds = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    laps = [];
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    console.log("Lap button clicked"); 
    laps.push(
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds)
    );
    let lapItem = document.createElement("li");
    lapItem.textContent = laps[laps.length - 1];
    document.getElementById("laps").appendChild(lapItem);
}
