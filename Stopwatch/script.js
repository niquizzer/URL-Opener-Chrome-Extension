
let timerTime = new Date(0);
let interval;
let isPaused = false;

function formatTime(date) {

    return date.toLocaleTimeString(navigator.language, {

        minute: '2-digit',
        second: '2-digit'
        
    });
}

document.getElementById ("startButton").onclick = function startTime() {
    //prevent multiple intervals from running

    if (interval) return;

    interval = setInterval(function () {
    timerTime.setSeconds(timerTime.getSeconds() + 1);

    document.getElementById("timer").innerText = formatTime(timerTime);

}, 1000);

document.getElementById ("stopButton").onclick = function stopTime() {
    
    clearInterval(interval);
    interval = null;
};

document.getElementById ("pauseButton").onclick = function pauseTime() {
    
    // if(interval) return;

    isPaused = true;
    clearInterval(interval);

};

document.getElementById ("resetButton").onclick = function resetTime() {
    
    timerTime.setTime(0);
    console.log("time reset");
    document.getElementById("timer").innerText = formatTime(timerTime);


};

}


    
    

    

/*let timerTime = new Date();

let seconds = timerTime.setSeconds(0);
let minutes = timerTime.setMinutes(0);
let hours = timerTime.setHours(0);

function startTimer() {

console.log (timerTime);

timerTime.setSeconds(timerTime.getSeconds() + 1);

document.body.innerHTML = `${hours} : ${minutes} : ${seconds}`;

}

startTimer();*/
