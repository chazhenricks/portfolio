"use strict";    

$(".speaker_left_div").click(function(){
        if(player != undefined){
            console.log(player);
            player.destroy();
        }
        newPlayer('L_jWHffIx5E');
});




    function newPlayer(vidID){
        $("#player").removeClass("hidden");
        player = new YT.Player('player', {
            width : '420px',
            height : '230px',
            videoId : vidID,
            playerVars: { 'autoplay': 1 },
            events : {
                'onReady' : onPlayerReady,
                'onStateChange' : onPlayerStateChange
            }
        });
    }

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onPlayerReady(event) {
        //event.target.playVideo();
    }
    function onPlayerStateChange(event) {
        if(event.data == YT.PlayerState.ENDED) {
            player.destroy();
        }
    }

$("#exit_button").click(function(){
    if(player == undefined){
        return;
    }else{
        player.destroy();
    }
});