
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new BOB(360,500,40)
bob2 = new BOB(400,500,40)
bob3 = new BOB(440,500,40)
bob4 = new BOB(480,500,40)

ground = new Ground(400,200,400,20)
rope1 = new Sling(bob1.body,ground.body,250,0)
rope2 = new Sling(bob2.body,ground.body,80,0)
rope3 = new Sling(bob3.body,ground.body,160,0)
rope4 = new Sling(bob4.body,ground.body,240,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  ground.display();
 rope1.display();
rope2.display();
rope3.display();
rope4.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -3,y: -3});
    
  Matter.Body.setStatic(bob1.body,false)

}
}
