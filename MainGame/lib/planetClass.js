maps = new Meteor.Collection("maps")

planet = function() {
    this.location = {x:Math.floor(Math.random()*4000)-2000,y:Math.floor(Math.random()*4000)-2000};
    this.radius = Math.ceil(250*(Math.random()+0.5));
    this.mass = Math.ceil(this.radius/100);
    this.color = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}
maps.remove({_id:"1"});
var testmap = {
    planetList : [new planet, new planet, new planet],
    _id:"1",
    name:"Map1"
}
maps.insert(testmap);

getMap = function() {
    return maps.findOne({name:"Map1"})
}
