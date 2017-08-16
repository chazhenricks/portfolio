"use strict";    

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
$(".speaker_left_div").click(newPlayer('L_jWHffIx5E'));
$(".speaker_right_div").click(newPlayer('dQw4w9WgXcQ'));

function newPlayer(vidID){
    $("#player").removeClass("hidden");
    
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }
function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.ENDED) {
        player.destroy();
    }
}
function stopVideo() {
    player.stopVideo();
  }
