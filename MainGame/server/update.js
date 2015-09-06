maps.remove({_id:"1"});
var testmap = {
    planetList : [new planet, new planet, new planet],
    _id:"1",
    name:"Map1"
}
maps.insert(testmap);

Meteor.setInterval(function() {
    var plrlist = getPlayers();
    for(var i=0;i<plrlist.length;i++) {
        var curPlayer = plrlist[i];
        update(curPlayer);
    }
}, 1000/60)
