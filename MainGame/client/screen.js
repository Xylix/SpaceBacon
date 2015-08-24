$(document).ready(function(){
    $("#gamescreen").width = $(document).width();
    $("#gamescreen").height = $(document).height();

    $("#gamescreen").resize(function(){
        $("#gamescreen").width = 0;
        $("#gamescreen").height = 0;
        $("#gamescreen").width = $(document).width();
        $("#gamescreen").height = $(document).height();
    });

    context = $("#gamescreen").getContext("2d");
    width = $("gamescreen").width;
    height = $("gamescreen").height;

    Meteor.setTimeout(function() {
        //MAIN function

    },500);
})
