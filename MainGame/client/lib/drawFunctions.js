camera = {x: 0,y: 0};

draw = function(location, size) {
    context.fillStyle="red";
    context.strokeStyle="black";
    var x = location.x - size.width/2 - camera.x;
    var y = location.y - size.height/2 - camera.y;
    context.fillRect(x,y,size.width,size.height);
    context.strokeRect(x,y,size.width,size.height)

}
