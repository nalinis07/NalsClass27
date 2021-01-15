class Box extends BaseClass {
    
    constructor (x,y,width, height){
        super(x,y,width,height);
        this.image = loadImage ("sprites/wood1.png");  
    }
}

/*
// Box CLASS 
class Box {
    constructor (x,y,width, height) {
        var options = {
            restitution : 0.8,
            friction:1.0,
            density:1.0
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle (x, y, width, height, options);
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
        fill (255);
        
        rect (0, 0, this.width, this.height);
        pop ();
    }

}
*/