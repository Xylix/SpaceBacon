plrs = new Meteor.Collection("plrs");

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
    p.acceleration["x"] = p.movedir["x"]; // temp solution
    p.acceleration["y"] = p.movedir["y"];
    p.speed["x"] += p.acceleration["x"];
    p.speed["y"] += p.acceleration["y"];
    p.location["x"] += p.speed["x"];
    p.location["y"] += p.speed["y"];

    plrs.update({_id: p._id}, {$set: {acceleration: p.acceleration, speed: p.speed, location: p.location}});
}
