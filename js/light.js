"use strict";


$(".lamp_img").click(function(){
    $(".lamp_light").toggleClass("hidden");
    $("#lamp_noise")[0].currentTime = 0;
    $("#lamp_noise")[0].play();
})