camera = {x: 0,y: 0};

drawPlayer = function(player) {
    context.fillStyle="red";
    context.strokeStyle="black";
    var x = player.location.x - player.size.width/2 - camera.x;
    var y = player.location.y - player.size.height/2 - camera.y;
    context.fillRect(x,y,player.size.width,player.size.height);
    context.strokeRect(x,y,player.size.width,player.size.height)

}

drawPlanet = function(planet) {
    context.fillStyle=planet.color;
    context.strokeStyle="black";
    var x = planet.location.x - camera.x;
    var y = planet.location.y - camera.y;
    context.beginPath();
    context.arc(x,y,planet.radius,0,Math.PI*2);
    context.fill();
    context.stroke();
    context.closePath();
}
