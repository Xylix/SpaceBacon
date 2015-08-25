plrs = new Meteor.Collection("plrs");

player = function(name) {
    this.name = name;
    this.location = {x: Math.floor(Math.random()*250), y: Math.floor(Math.random()*250)};
    this.speed = {x: 0, y: 0};
    this.acceleration = {x: 0, y: 0};
    this.size = {width: 100, height: 100};
}

player.prototype.data = function(plr) {
    var d = {}
    d.name = plr.name;
    d.location = plr.location;
    d.speed = plr.speed;
    d.acceleration = plr.acceleration
    d.size = plr.size;
    return d;
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
