class Log extends BaseClass {
    constructor (x,y,height, angle){
        super (x,y,20,height,angle) ;
        Matter.Body.setAngle(this.body, angle);
        this.image = loadImage ("sprites/wood2.png");
    }
}
/*

// Log CLASS 
class Log {
    constructor (x,y, height, angle) {
        var options = {
            restitution : 0.8,
            friction:1.0,
            density:1.0
        }
        this.width = 20;
        this.height = height;
        this.angle = angle ;
        this.body = Bodies.rectangle (x, y, this.width, this.height, options);
        Matter.Body.setAngle(this.body, angle);
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
        stroke("green");
        rotate (angle);
        rectMode (CENTER);
        fill ("brown");
        
        rect (0, 0, this.width, this.height);
        pop ();
    }

}
*/