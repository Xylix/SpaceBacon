
var tiles = 8;

var weapon = [];
var cid = 0;

function start() {
    c = kuva.getContext("2d");
    w = kuva.width;
    h = kuva.height;
    tileX = Math.floor(w/tiles)

    for(var x=0;x<tiles;x++) {
        weapon[x] = [];
        for(var y=0;y<tiles;y++) {
            weapon[x][y] = 0;
        }
    }

    draw();
}

function change() {
    cid = Math.floor(prompt("id : 0-8"));
}

function edit(e) {
    var x = e.clientX;
    var y = e.clientY;

    var tx = Math.floor((x/w)*tiles);
    var ty = Math.floor((y/h)*tiles);

    weapon[tx][ty] = Math.floor(cid)

    draw();
}

function draw() {

    c.fillStyle="black";
    c.fillRect(0,0,w,h);

    for(var x=0;x<tiles;x++) {
        for(var y=0;y<tiles;y++) {
            var id = weapon[x][y];
            if(id == 0) c.fillStyle="gray";
            else if(id == 1) c.fillStyle="red";
            else if(id == 2) c.fillStyle="blue";
            else if(id == 3) c.fillStyle="green";
            else if(id == 4) c.fillStyle="cyan";
            else if(id == 5) c.fillStyle="limegreen";
            else if(id == 6) c.fillStyle="purple";
            else if(id == 7) c.fillStyle="gold";
            else if(id == 8) c.fillStyle="orange";
            c.fillRect(tileX*x+1,tileX*y+1,tileX-2,tileX-2);
        }
    }

}
