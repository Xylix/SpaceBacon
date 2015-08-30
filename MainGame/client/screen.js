$(document).ready(function(){
    document.getElementById("gamescreen").width = $(document).width();
    document.getElementById("gamescreen").height = $(document).height();

    w = document.getElementById("gamescreen").width;
    h = document.getElementById("gamescreen").height;

    $(window).resize(function(){
        document.getElementById("gamescreen").width = 0;
        document.getElementById("gamescreen").height = 0;
        document.getElementById("gamescreen").width = $(document).width();
        document.getElementById("gamescreen").height = $(document).height();
        w = document.getElementById("gamescreen").width;
        h = document.getElementById("gamescreen").height;
    });

    Meteor.setTimeout(function(){
        Session.setDefault("user","testacc");
        var name = prompt("who are you playing as").toLowerCase()
        Session.set("user",name);
        playertest = checkPlayer(name)
        console.log(playertest + " " + Session.get("user"));
        if(!playertest) {
            addPlayer(Session.get("user"));
        }
        context = document.getElementById("gamescreen").getContext("2d");


        Meteor.setInterval(function() {
            //MAIN function

            context.fillStyle="white";
            context.fillRect(0,0,w,h);

            var plrlist = getPlayers();
            for(var i=0;i<plrlist.length;i++) {
                var cur = plrlist[i];
                draw(cur.location,cur.size);
            }
            clientPlayer = getPlayer(Session.get("user"));
            update(clientPlayer);
            camera.x = clientPlayer.location.x - w/2;
            camera.y = clientPlayer.location.y - h/2;

        },1000/60);
    },1000)


})
