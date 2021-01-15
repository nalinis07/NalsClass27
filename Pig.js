class Pig extends BaseClass {
    constructor (x,y){
        super(x,y,50,50);
        this.image = loadImage ("sprites/enemy.png");  
    }
}

/*
// Pig CLASS 
class Pig {
    constructor (x,y) {
        var options = {
            restitution : 0.8,
            friction:0.3,
            density:1.0
        }
        this.width = 50;
        this.height = 50;
        this.body = Bodies.rectangle (x, y, this.width, this.height, options);
        World.add (world, this.body);

        //console.log (this);
    }

    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        //console.log (angle);
        push ();
        translate (pos.x, pos.y);
        strokeWeight(4);
        
        rectMode (CENTER);
        fill ("red");
        
        rect (0, 0, this.width, this.height);
        pop ();
    }

}
*/