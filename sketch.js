

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world ;
var object, grnd, ball ;
var Box1, Box2, Box3, Box4 ;
var  pig1, pig2;
var log1,log2 ;
var bird;
var backGrndImg;
var constrainedLog;
var chain ;
function preload () {
  backGrndImg = loadImage ("sprites/bg.png");
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  //layer 1
  grnd = new Ground (600,height,width,20);
  Box1  = new Box (700,320,70,70);
  Box2  = new Box (920,320,70,70);
  pig1 = new Pig (810,350);
  log1 = new Log (810,260,300,PI/2);
  
  //layer 2
  Box3  = new Box (700,240,70,70);
  Box4  = new Box (920,240,70,70);
  pig2 = new Pig (810,220);
  log2 = new Log (810,180,300,PI/2);

  //layer 3
  Box5  = new Box (810,160,70,70);
  log3 = new Log (760,120,150,PI/7);
  log4 = new Log (868,120,150,-PI/7.3);

  // bird
  bird = new Bird(100,100);

  constrainedLog = new Log (230,180, 80, PI/2);

  var options = {
    bodyA : bird.body,
    bodyB : constrainedLog.body,
    stiffness : 0.04,
    length : 10
  }
 // var Chain = Constraint.create (options);
  //World.add (world, Chain);
  chain = new Chain (bird.body, constrainedLog.body);
}

function draw() {
  background(backGrndImg);  
  Engine.update (engine);

  //layer 1
  Box1.display ();
  Box2.display ();
  //console.log (Box2.body.position.x + " : " + Box2.body.position.y + " : " +Box2.body.angle);
  grnd.display ();
  pig1.display ();
  log1.display ();

   //layer 2
   Box3.display ();
   Box4.display ();
   pig2.display ();
   log2.display ();
  
   // layer 3
   Box5.display ();
   log3.display ();
   log4.display ();

  // bird
  bird.display ();

  constrainedLog.display ();
  //strokeWeight (3);
  //line (bird.body.position.x, bird.body.position.y, constrainedLog.body.position.x, constrainedLog.body.position.y);
  chain.display ();

}