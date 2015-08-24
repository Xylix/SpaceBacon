
var camera = [x: 0,y: 0];

var draw = function(location, size) {

    c.fillStyle="red";
    var x = location.x - size.width/2 - camera.x;
    var y = location.y - size.height/2 - camera.y;
    c.fillRect(x,y,size.width,size.height);

}
