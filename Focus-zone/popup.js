document.addEventListener("DOMContentLoaded", function() {
    const startTimerButton = document.getElementById("startTimer");
    const stopTimerButton = document.getElementById("stopTimer");
    let timerId;

    startTimerButton.addEventListener("click", function() {
        timerId = setTimeout(function() {
            alert("Time's up! Take a break.");
        }, 25 * 60 * 1000); // 25 minutes timer
    });

    stopTimerButton.addEventListener("click", function() {
        clearTimeout(timerId);
    });
});