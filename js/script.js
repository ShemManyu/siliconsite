var endTime = 'June 24 2016 16:08:00';

function getTimeRemaining(endTime) {
    var time = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor((time/1000) % 60);
    var minutes = Math.floor((time/1000/60) % 60);
    var hours = Math.floor((time/1000/60/60) % 24);
    var days = Math.floor((time/1000/60/60/24) % 7);
    var weeks = Math.floor(time/1000/60/60/24/7);
    return{
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'weeks': weeks
    };
}

function updateTime() {
    var timeLeft = getTimeRemaining(endTime);
    var clock = document.getElementById("clock");
    clock.querySelector(".weeks").innerHTML = timeLeft.weeks;
    clock.querySelector(".days").innerHTML = timeLeft.days;
    clock.querySelector(".hours").innerHTML = timeLeft.hours;
    clock.querySelector(".minutes").innerHTML = timeLeft.minutes;
    clock.querySelector(".seconds").innerHTML = timeLeft.seconds;
    
    if(timeLeft.total<=0){
        clearInterval(timeInterval);
        clock.innerHTML = "HAPPENING NOW!";
    } 
}

var timeInterval = setInterval(updateTime, 1000);