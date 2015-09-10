plrs = new Meteor.Collection("plrs");
projectiles = new Meteor.Collection("projectiles");
var maxSpeed = 10;

player = function(name) {
    this.moving = true;
    this.name = name;
    this.movedir = {x: 0, y: 0};
    this.location = {x: Math.floor(Math.random()*250), y: Math.floor(Math.random()*250)};
    this.speed = {x: 0, y: 0};
    this.acceleration = {x: 0, y: 0};
    this.size = {width: 50, height: 50};
}

getPlayers = function() {
    return plrs.find().fetch();
}

getPlayer = function(name) {
    return plrs.findOne({name:name});
}

addPlayer = function(name) {
    plrs.insert(new player(name));
}

checkPlayer = function(name) {
    if (plrs.findOne({name:name})) return true;
    else return false;
}

update = function(p){
    if (p.movedir["x"]*p.movedir["y"] === 0){
        p.acceleration["x"] = p.movedir["x"]; // temp solution
        p.acceleration["y"] = p.movedir["y"];
    }else{
        p.acceleration["x"] = p.movedir["x"]/Math.sqrt(2);
        p.acceleration["y"] = p.movedir["y"]/Math.sqrt(2);
    }
    if(p.speed["x"] + p.acceleration["x"] < maxSpeed){
        p.speed["x"] += p.acceleration["x"];
    }
    if(p.speed["y"] + p.acceleration["y"] < maxSpeed){
        p.speed["y"] += p.acceleration["y"];
    }
    planets = getMap().planetList;
    planets.forEach(function(name){
        if (Math.sqrt(Math.pow(name.location.x - p.location.x, 2) + Math.pow(name.location.y - p.location.y, 2)) < 10000){
            if (Math.sqrt(Math.pow(p.acceleration.x, 2) + Math.pow(p.acceleration.y, 2))<10){
                p.acceleration.x += name.mass/Math.pow(name.location.x - p.location.x, 2);
                p.acceleration.y += name.mass/Math.pow(name.location.y - p.location.y, 2);
            }
        }
        if(Math.sqrt(Math.pow((p.location["x"] + p.speed["x"]) - name.location.x, 2) + Math.pow((p.location["y"] + p.speed["y"]) - name.location.y, 2)) < name.radius){
            p.moving = false;
        }
    });
    if (p.moving){
        p.location["x"] += p.speed["x"];
        p.location["y"] += p.speed["y"];
    }
    p.moving = true;

    p.speed["x"] /= 1.1;
    if (Math.abs(p.speed["x"]) < 0.1){
        p.speed["x"] = 0;
    }
    p.speed["y"] /= 1.1;
    if (Math.abs(p.speed["y"]) < 0.1){
        p.speed["y"] = 0;
    }
    plrs.update({_id: p._id}, {$set: {acceleration: p.acceleration, speed: p.speed, location: p.location}});
}

shoot = function(player, point){
    console.log("angle is: " + String(Math.atan2((w/2)-point.x, (h/2)-point.y)))
    // projectiles.insert({
    //     location: player.location,
    //     angle: Math.atan2((w/2)-point.x, (h/2)-point.y)
    // })
}
