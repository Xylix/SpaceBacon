maps = new Meteor.Collection("maps")

planet = function() {
    this.location = {x:Math.floor(Math.random()*4000)-2000,y:Math.floor(Math.random()*4000)-2000};
    this.radius = Math.ceil(250*(Math.random()+0.5));
    this.mass = Math.ceil(this.radius*1000000);
    this.color = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}

getMap = function() {
    return maps.findOne({name:"Map1"})
}
