var aboutMeHTML = `<header class="header clearfix">
<h1 class="about_header_text">About Me</h1>
<img class="about_picture" src="Images/chaz.jpg" alt="Chaz's Dumb Face">
<div class="about_bio">
    <p class="about_bio_text">
        Hello! My name is Chaz Henricks and I am a software developer in Nashville, Tn. I recently completed a full stack development program at Nashville Software School specializing in C#/ASP.NET technologies.
    </p>
    <p class="about_bio_text"> 
        I love being able to dream up a project and turning it into a usefull piece of software. I would love to hang out a grab a cup of coffee so please feel free to drop me a line any time. 
    </p>
    <p class="about_bio_text">
        Check out some of the technology I've used in the past and take a look at some of my projects below. 
    </p>
</div>
</header>
<section class="about">
<div class="about_tech">
    <h3 class="about_tech_header">Stuff I've used</h3>
    <div class="icons">
        <i class="devicon-angularjs-plain"></i>
        <i class="devicon-bootstrap-plain"></i>
        <i class="devicon-csharp-plain"></i>
        <i class="devicon-bower-plain"></i>
        <i class="devicon-coffeescript-original"></i>
        <i class="devicon-css3-plain"></i>
        <i class="devicon-dot-net-plain"></i>
        <i class="devicon-git-plain"></i>
        <i class="devicon-github-plain"></i>
        <i class="devicon-grunt-plain"></i>
        <i class="devicon-html5-plain"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-jquery-plain"></i>
        <i class="devicon-mysql-plain"></i>
        <i class="devicon-sass-original"></i>
        <i class="devicon-visualstudio-plain"></i>
    </div>            
</div>

<div class="about_projects">
    <h3 class="about_projects_header">Projects</h3>
    <div class="about_project_showsaround">
        <a href="https://chazhenricks.github.io/frontend-capstone/#!" target="_blank"><h4 class="about_shows_title">Shows Around</h4></a>
        <p class="about_shows_info"> 
            Shows Around is a web app that allows users to see when a band they like is playing in their city. The app was born out of a frustration of trying to keep up with tour dates from bands I actually liked without haveing to fill out yet another profile on another service. Using information from Spotify, a service most people are alreayd using, the app can give you a curated list of events based on your tastes. Built with and AngularJS frontend and Firebase backend, the app allows users to log into Spotify using OAuth2 protocols and retreive a list of their top 50 played artists. That list is then run agains the BandInTown API to get a list of tour dates. The user can then filter by city to see when those bands are playing near them. 
        </p> 
        <h4 class="about_backend_title"> Backend Capstone </h4>
        <p class="about_backend_info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis hendrerit tortor, eget viverra massa suscipit vitae. Cras porta enim a sollicitudin convallis. Aenean dictum eu augue vitae consectetur. Vestibulum at magna tellus. Phasellus libero enim, pharetra commodo ligula ornare, commodo accumsan lacus. Donec molestie arcu sem, in eleifend neque facilisis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum nec diam a dolor volutpat consectetur eu a justo. Donec semper nisl eleifend scelerisque ullamcorper. Vestibulum dapibus porta facilisis. Quisque ac tellus quis nisi ornare viverra id id lacus. Pellentesque eu auctor enim. Etiam suscipit risus sit amet vehicula molestie. Cras non ornare ante.
        </p>
    </div>
</div>
</section>
<footer class="footer">
<h3 class="footer_title"> Contact Me </h3>
<div class="about_contact_icons_div">
    <a href="http://www.github.com/chazhenricks" target="_blank">
        <img class="about_contact_icon" src="Images/github.svg" alt="github">
    </a>
    <a href="http://www.linkedin.com/in/chazhenricks" target="_blank">
        <img class="about_contact_icon" src="Images/linkedin.svg" alt ="linkedin">
    </a>
    <a href="mailto:chazhenricks@gmail.com">
        <img class="about_contact_icon"src="Images/mail.png" alt="mail">
    </a>
</div>

</footer>`

function showAboutMe(){
    $('#main').addClass('hidden');
    $("#about_me").removeClass('hidden').append(aboutMeHTML);
}





$("#about_me_link").click(showAboutMe);