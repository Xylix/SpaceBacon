$(document).ready(function(){
    document.getElementById("gamescreen").width = $(document).width();
    document.getElementById("gamescreen").height = $(document).height();

    $(window).resize(function(){
        console.log("wololo")
        document.getElementById("gamescreen").width = 0;
        document.getElementById("gamescreen").height = 0;
        document.getElementById("gamescreen").width = $(document).width();
        document.getElementById("gamescreen").height = $(document).height();
    });

    context = document.getElementById("gamescreen").getContext("2d");
    w = document.getElementById("gamescreen").width;
    h = document.getElementById("gamescreen").height;

    Meteor.setInterval(function() {
        //MAIN function

        context.fillStyle="white";
        context.fillRect(0,0,w,h);
    },500);
})
