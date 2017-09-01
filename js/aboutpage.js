
function showAboutMe(){
    $('#main').css('display','none');
    $("#about_me").css('display','block');
}

function backToHome(){
    $('#main').css('display','block');
    $("#about_me").css('display', 'none');
}


$(window).resize(function(){
    if($(this).width() <= 1200){
        $('#main').css('display','none');
        $("#about_me").css('display','block');
    }
});




$("#x_button").click(backToHome);

$("#about_me_link").click(showAboutMe);