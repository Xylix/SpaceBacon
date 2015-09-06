camera = {x: 0,y: 0};

drawPlayer = function(player) {
    context.fillStyle="red";
    var x = player.location.x - player.size.width/2 - camera.x;
    var y = player.location.y - player.size.height/2 - camera.y;
    context.drawImage(playerTexture,x,y,player.size.width,player.size.height);
}

drawPlanet = function(planet) {
    context.fillStyle=planet.color;
    var x = planet.location.x - planet.radius - camera.x;
    var y = planet.location.y - planet.radius - camera.y;
    context.drawImage(planetTexture,x,y,planet.radius*2,planet.radius*2);
}
