$(document).ready(function(){
    var inMenu = false;  //check if player is in menu && does not shoot if so
    var gamescreen = document.getElementById("gamescreen");
    gamescreen.width = $(document).width();
    gamescreen.height = $(document).height();

    w = gamescreen.width;
    h = gamescreen.height;
    document.body.addEventListener("mousedown", function(event){
        var point = {x: event.clientX, y: event.clientY};
        if (!inMenu){
            shoot(clientPlayer, point);
        }
    });

    document.body.addEventListener("keydown", function(event){
        var e = event["keyCode"];
        // 87 = w, 65 = a, 83 = s, 68 = d
        if (e == 87 && clientPlayer.movedir["y"] >= 0){
            clientPlayer.movedir["y"] -= 1;
        }else if (e == 83 && clientPlayer.movedir["y"] <= 0){
            clientPlayer.movedir["y"] += 1;
        }else if (e == 65 && clientPlayer.movedir["x"] >= 0){
            clientPlayer.movedir["x"] -= 1;
        }else if (e == 68 && clientPlayer.movedir["x"] <= 0){
            clientPlayer.movedir["x"] += 1;
        }
        plrs.update({_id: clientPlayer._id}, {$set: {movedir: clientPlayer.movedir}});
    });

    document.body.addEventListener("keyup", function(event){
        var e = event["keyCode"];
        // 87 = w, 65 = a, 83 = s, 68 = d
        if (e == 87 && clientPlayer.movedir["y"] <= 0){
            clientPlayer.movedir["y"] += 1;
        }else if (e == 83 && clientPlayer.movedir["y"] >= 0){
            clientPlayer.movedir["y"] -= 1;
        }else if (e == 65 && clientPlayer.movedir["x"] <= 0){
            clientPlayer.movedir["x"] += 1;
        }else if (e == 68 && clientPlayer.movedir["x"] >= 0){
            clientPlayer.movedir["x"] -= 1;
        }
        plrs.update({_id: clientPlayer._id}, {$set: {movedir: clientPlayer.movedir}});
    });

    $(window).resize(function(){
        gamescreen.width = 0;
        gamescreen.height = 0;
        gamescreen.width = $(document).width();
        gamescreen.height = $(document).height();
        w = gamescreen.width;
        h = gamescreen.height;
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
        context = gamescreen.getContext("2d");
        getTextures();
        context.translate(w/2,h/2);

        Meteor.setInterval(function() {
            //MAIN function
            context.fillStyle="black";
            context.fillRect(-w/2,-h/2,w,h);
            clientPlayer = getPlayer(Session.get("user"));
            camera.x = clientPlayer.location.x;
            camera.y = clientPlayer.location.y;
            var curMap = getMap();
            for(var i=0;i<curMap.planetList.length;i++) {
                var curPlanet = curMap.planetList[i];
                drawPlanet(curPlanet);
            }
            var plrlist = getPlayers();
            for(var i=0;i<plrlist.length;i++) {
                var cur = plrlist[i];
                drawPlayer(cur);
            }
            clientPlayer = getPlayer(Session.get("user"));
            update(clientPlayer);
            camera.x = clientPlayer.location.x - w/2;
            camera.y = clientPlayer.location.y - h/2;

        },1000/60);
    },1000)


})
