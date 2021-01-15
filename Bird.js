class Bird extends BaseClass {
    constructor (x,y){
        super (x,y,50,50);
        this.image = loadImage ("sprites/bird.png");
    }
    display (){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display ();
    }
}

/*
// Bird CLASS 
class Bird {
    constructor (x,y) {
        var options = {
            restitution : 0.5,
            friction:1.0,
            density:1.5
        }
        this.width = 50;
        this.height = 50;
        this.image = loadImage ("sprites/bird.png");
        this.body = Bodies.rectangle (x, y, this.width, this.height, options);
        World.add (world, this.body);

        //console.log (this);
    }

    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        //console.log (angle);
        pos.x = mouseX;
        pos.y = mouseY;

        push ();
        translate (pos.x, pos.y);
        strokeWeight(3);
        stroke("blue");
        fill("green");
        rotate (angle);
        imageMode (CENTER);
        image (this.image,0,0,this.width, this.height);
        //rectMode (CENTER);
        //fill (255);
        //rect (0, 0, this.width, this.height);
        pop ();
    }

}
*/