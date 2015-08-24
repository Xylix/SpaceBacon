$(document).ready(function(){
    $("#gamescreen").width = $(document).width();
    $("#gamescreen").height = $(document).height();

    $("#gamescreen").resize(function(){
        $("#gamescreen").width = $(document).width();
        $("#gamescreen").height = $(document).height();
    });

    Meteor.setTimeout(function() {
        //MAIN function
    },500);
})
