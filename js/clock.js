var hourTens = document.querySelector('.hour-tens');
var hourOnes = document.querySelector('.hour-ones');
var minuteTens = document.querySelector('.minute-tens');
var minuteOnes = document.querySelector('.minute-ones');
var clockInfo = document.querySelector('.clock_info');


var clockHTML = `<div class="flip-clock-left">
    <div class="flip hour-tens"></div>
    <div class="flip hour-ones"></div>
    </div>
    <div class="flip-clock-right">
    <div class="flip minute-tens"></div>
    <div class="flip minute-ones"></div>
</div>`;

clockInfo.innerHTML = clockHTML;

function getHour(now){
    var hour = now.getHours();
    if(hour > 12){
        hour = hour - 12;
    }
    var hourString = hour.toString();

    if(hourString.length < 2){
        hourString = "0" + hourString;
    }

    hourArray = hourString.split("");
    var hourTensNum = `<div class="line"></div><p class="time hourTensNum">${hourArray[0]}</p>`;
    var hourOnesNum = `<div class="line"></div><p class="time hourOnesNum">${hourArray[1]}</p>`;
    hourTens.innerHTML = hourTensNum;
    hourOnes.innerHTML = hourOnesNum;
}

function getMinutes(now){
    var mins = now.getMinutes();
    var minString = mins.toString();

    if (minString.length < 2){
        minString = "0" + minString;
    }
    minsArray = minString.split("");
    var minTensNum = `<div class="line"></div><p class="time minTensNum">${minsArray[0]}</p>`;
    var minOnesNum = `<div class="line"></div><p class="time minOnesNum">${minsArray[1]}</p>`;
    minuteTens.innerHTML = minTensNum;
    minuteOnes.innerHTML = minOnesNum;
}

function setDate(){
    var now = new Date();
    getHour(now);
    getMinutes(now);
}

setInterval(setDate, 1000);

setDate();









