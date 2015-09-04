plrs = new Meteor.Collection("plrs");
var maxSpeed = 10;

player = function(name) {
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
    if (Math.sqrt(Math.pow(p.movedir["y"], 2) + Math.pow(p.movedir["x"], 2)) <=1){
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

    p.location["x"] += p.speed["x"];
    p.location["y"] += p.speed["y"];

    if(Math.abs(p.speed["x"])){
        p.speed["x"] /= 1.1;
        if (Math.abs(p.speed["x"]) < 0.1){
            p.speed["x"] = 0;
        }
    }
    if(Math.abs(p.speed["y"])){
        p.speed["y"] /= 1.1;
        if (Math.abs(p.speed["y"]) < 0.1){
            p.speed["y"] = 0;
        }
    }

    p.location["x"] += p.speed["x"];
    p.location["y"] += p.speed["y"];

    plrs.update({_id: p._id}, {$set: {acceleration: p.acceleration, speed: p.speed, location: p.location}});
}

shoot = function(player, point){
    console.log("Shot from " + String(player.location.x) + ", " + String(player.location.y) + " towards " + String(point.x) + ", " + String(point.y));
}
