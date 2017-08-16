"use strict";    

$(".speaker_left_div").click(function(){
        $("#player").removeClass("hidden");
        player = new YT.Player('player', {
            width : '427px',
            height : '230px',
            videoId : 'L_jWHffIx5E',
            playerVars: { 'autoplay': 1 },
            events : {
                'onReady' : onPlayerReady,
                'onStateChange' : onPlayerStateChange
            }
        });
    });

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
        var playerNumber;
        if(player == undefined){
            return;
        }else{
            playerNumber = player.getPlayerState();
            if(playerNumber == 1){
                player.destroy();
            }
        }
    });