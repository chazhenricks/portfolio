"use strict";

var clockInfo = document.querySelector('.clock_info');
var clockHTML = `<div class="flip hour-tens"></div>
    <div class="flip hour-ones"></div>
    <div class="flip minute-tens"></div>
    <div class="flip minute-ones"></div>`;
clockInfo.innerHTML = clockHTML;


var hourTens = document.querySelector('.hour-tens');
var hourOnes = document.querySelector('.hour-ones');
var minuteTens = document.querySelector('.minute-tens');
var minuteOnes = document.querySelector('.minute-ones');

function getHour(now){
    var hour = now.getHours();
    if(hour > 12){
        hour = hour - 12;
    }
    var hourString = hour.toString();

    if(hourString.length < 2){
        hourString = "0" + hourString;
    }

    var hourArray = hourString.split("");
    var hourTensNum = `<div class="line"></div><div class="time hourTensNum">${hourArray[0]}</div>`;
    var hourOnesNum = `<div class="line"></div><div class="time hourOnesNum">${hourArray[1]}</div>`;
    hourTens.innerHTML = hourTensNum;
    hourOnes.innerHTML = hourOnesNum;
}

function getMinutes(now){
    var mins = now.getMinutes();
    var minString = mins.toString();

    if (minString.length < 2){
        minString = "0" + minString;
    }
    var minsArray = minString.split("");
    var minTensNum = `<div class="line"></div><div class="time minTensNum">${minsArray[0]}</div>`;
    var minOnesNum = `<div class="line"></div><div class="time minOnesNum">${minsArray[1]}</div>`;
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









